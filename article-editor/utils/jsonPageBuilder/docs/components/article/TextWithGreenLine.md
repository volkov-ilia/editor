## TextWithGreenLine

![TextWithGreenLine preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **text\*** - форматированный (необязательно) текст
   - Значения: (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md))

### Пример:

```JSON
{
   "components": ["TextWithGreenLine"],
  "pageTextWithGreenLineId":"TextWithGreenLine",
  "pageTextWithGreenLineText":"Monday - Friday",
  "TextWithGreenLine":{
    "type":"TextWithGreenLine",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageTextWithGreenLineId"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageTextWithGreenLineText"
        ]
      }
    ]
  }
}
```
