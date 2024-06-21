export const getBytes: (file: Blob) => Promise<string | ArrayBuffer | null> = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = function () {
      resolve(reader.result)
    }

    reader.onerror = function (error) {
      reject({ error })
    }

    reader.readAsArrayBuffer(file)
  })
}
