import toFinite from "lodash/toFinite"

const calculateSizeProportions = (svgString: string) => {
  /**
   * @param {string} svgString is a value which returns reader.readAsText for svg image.
   *
   * @return {string} proportion to calculate new height.
   * **/
  const width = svgString.match(/width="\w+(.\w+)?"/)![0].match(/\d+(.\d+)?/)![0]
  const height = svgString.match(/height="\w+(.\w+)?"/)![0].match(/\d+(.\d+)?/)![0]
  if (width && height) {
    const numberW = toFinite(width)
    const numberH = toFinite(height)
    return numberW / numberH
  }
  return 1
}

export default calculateSizeProportions
