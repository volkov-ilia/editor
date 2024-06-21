import sha256 from "crypto-js/sha256"
import Hex from "crypto-js/enc-hex"

export const getStringHash = (message: ArrayBuffer) => {
  const hashDigest = sha256(new TextDecoder("utf-8").decode(message))
  return hashDigest.toString(Hex)
}
