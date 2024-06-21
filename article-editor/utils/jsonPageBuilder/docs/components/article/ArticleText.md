## ArticleText

![ArticleText preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **text\*** - форматированный (необязательно) текст
   - Значения: (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md))

### Пример:

```JSON
{
   "components": ["ArticleText"],
  "pageArticleTextId":"ArticleText",
  "pageArticleTextText":"Monday - Friday",
  "ArticleText":{
    "type":"ArticleText",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageArticleTextId"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageArticleTextText"
        ]
      }
    ]
  }
}
```
