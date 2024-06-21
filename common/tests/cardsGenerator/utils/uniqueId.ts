const uniqueId = (length = 6) => {
  return Math.ceil(Math.random() * Date.now())
    .toPrecision(length)
    .toString()
    .replace(".", "")
    .replace(/e\+\d+/, "")
}

export default uniqueId
