import replace from "lodash/replace"

const changeSize = (svgString: string, width: number, height: number) => {
  /**
   * @param {string} svgString is a value which returns reader.readAsText for svg image
   * @param {string} width and height is a string with rem value
   *
   * @return {string} svg in string format with new width and height values.
   * **/
  const correctSVG = replace(svgString, /width="\w+(.\w+)?"/, `width="${width}rem"`)
  return replace(correctSVG, /height="\w+(.\w+)?"/, `height="${height}rem"`)
}

export default changeSize
