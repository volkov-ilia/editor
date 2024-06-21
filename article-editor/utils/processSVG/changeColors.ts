import replace from "lodash/replace"

const changeColors = (svgString: string, color: string) => {
  /**
   * @param {string} svgString is a value which returns reader.readAsText for svg image. !!! Should have only one color inside "fill" and "stroke" attributes AND will replace only hex colors.
   * @param {string} color is a string with rem value
   *
   * @return {string} svg in string format with new color value.
   * **/
  return replace(svgString, /(fill|stroke)="#\w+"/gm, (val) => {
    return val.replace(/#\w+/, color)
  })
}

export default changeColors
