import IHTTPClient from "./IHTTPClient"
import axios from "axios"
import apiUrlBuilder from "./APIUrlBuilder"
import authApiUrlBuilder from "./authAPIUrlBuilder"
import binApiUrlBuilder from "./binAPIUrlBuilder"
import binApiSaveImageUrlBuilder from "./binApiSaveImageUrlBuilder"

class HTTPClient implements IHTTPClient {
  static delete(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.delete(authApiUrlBuilder(apiURL), config)
  }

  static get(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.get(apiUrlBuilder(apiURL), config)
  }

  static post(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.post(apiUrlBuilder(apiURL), config)
  }

  static put(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.put(apiUrlBuilder(apiURL), config)
  }

  static head(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.head(apiUrlBuilder(apiURL), config)
  }

  static authGet(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.get(authApiUrlBuilder(apiURL), config)
  }

  static authPost(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.post(authApiUrlBuilder(apiURL), config)
  }

  static binGet(apiURL: string, config: Record<string, any>): Promise<Request> {
    return axios.get(binApiUrlBuilder(apiURL), config)
  }

  static binPost(apiURL: string, data: FormData, config: Record<string, any>): Promise<Request> {
    return axios.post(binApiUrlBuilder(apiURL), data, config)
  }

  static binSaveImage(apiURL: string, data: FormData, config: Record<string, any>): Promise<Request> {
    return axios.post(binApiSaveImageUrlBuilder(apiURL), data, config)
  }
}

export default HTTPClient
