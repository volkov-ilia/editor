## Quote

![Quote preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **quote** - текст цитаты.
   - Значения: (см. [Текст](../common/commonNestedComponents.md))
3. **signature\*** - форматированный (необязательно) текст
   - Значения: (см. [Текст](../common/commonNestedComponents.md))

### Пример:

```JSON
{
   "components": ["Quote"],
  "pageQuoteId":"Quote",
  "pageQuoteText":"some quote here",
  "pageQuoteSignature":"John Doe",
  "Quote":{
    "type":"Quote",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageQuoteId"
        ]
      },
      {
        "name": "quote",
        "function": "identity",
        "args": [
          "pageQuoteText"
        ]
      },
      {
        "name": "signature",
        "function": "identity",
        "args": [
          "pageQuoteSignature"
        ]
      }
    ]
  }
}
```
