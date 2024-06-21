## GrayBlockWithText

![GrayBlockWithText preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **text\*** - форматированный (необязательно) текст
   - Значения: (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md))

Также в коде можно было бы установить **bgColor** - цвет текста, обычно задаётся только через другие компоненты в качестве пропс.

- Значения: строка hex, rgb, rgba. Например, "#f4f4f4", "rgb(244,244,244)", "rgba(244,244,244,0.4)"
  Однако в редакторе нет подходящего функционала.

### Пример:

```JSON
{
   "components": ["GrayBlockWithText"],
  "pageGrayBlockWithTextId":"GrayBlockWithText",
  "pageGrayBlockWithTextBgColor":"#f4f4f4",
  "pageGrayBlockWithTextText":"Monday - Friday",
  "GrayBlockWithText":{
    "type":"GrayBlockWithText",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageGrayBlockWithTextId"
        ]
      },
      {
        "name": "bgColor",
        "function": "identity",
        "args": [
          "pageGrayBlockWithTextBgColor"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageGrayBlockWithTextText"
        ]
      }
    ]
  }
}
```
