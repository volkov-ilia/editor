import { getBytes } from "./getBytes"
import { getStringHash } from "./getStringHash"

export const getImageHash = async (file: Blob) => {
  const bytes = await getBytes(file)
  return getStringHash(bytes as ArrayBuffer)
}
