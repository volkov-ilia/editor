abstract class IHTTPClient {
  static post: (apiURL: string, config: Record<string, any>) => Promise<Request>
  static get: (apiURL: string, config: Record<string, any>) => Promise<Request>
  static delete: (apiURL: string, config: Record<string, any>) => Promise<Request>
  static put: (apiURL: string, config: Record<string, any>) => Promise<Request>
}
export default IHTTPClient
