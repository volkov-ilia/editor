## Separator

![Separator preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.

### Пример:

```JSON
{
   "components": ["Separator"],
  "pageSeparatorId":"Separator",
  "Separator":{
    "type":"Separator",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageSeparatorId"
        ]
      }
    ]
  }
}
```
