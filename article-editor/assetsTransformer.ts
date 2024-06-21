// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

module.exports = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  process(src, filename, _, __) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";"
  },
}
