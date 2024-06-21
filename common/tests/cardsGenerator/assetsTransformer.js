/* eslint-disable  @typescript-eslint/no-var-requires */
const path = require("path")

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(src, filename, _, __) {
    return "module.exports = " + `{src: ${JSON.stringify(path.basename(filename))}}` + ";"
  },
}
