import Vk from "../../../../types/Vk"

export class NestedHandlers {
  static converters: Vk.ComponentHandlerResult = {
    paragraph: (element, state) => {
      const result = element.children?.map((child) => child.text).join("")
      if (result) state.text.push(result)
    },
    image: (element: Vk.slateElement, state) => {
      if (element.url.length) {
        state.imgs.push(element.url)
      }
    },
    description: (element, state) => {
      this.converters["paragraph"](element, state)
    },
    quoteText: (element, state) => {
      const textQuote = element.children?.map((el) => el.text).join("")
      if (textQuote) state.text.push(textQuote)
    },
    signature: (element, state) => {
      const authorQuote = element.children?.map((el) => el.text).join("")
      if (authorQuote) state.text.push(authorQuote)
    },
    codeItem: (element, state) => {
      const codeItem = element.children?.map((code) => code.text).join("")
      if (codeItem) state.text.push(codeItem)
    },
    link: (element, state) => {
      const codeItem = element.children?.map((code) => code.text).join("")
      if (codeItem) state.text.push("https://www.youtube.com/embed/" + codeItem)
    },
  }
}
