## OrderedList and UnorderedList

![OrderedList preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **items\*** - список форматированных (необязательно) текстов
   - Значения: (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md))

### Пример:

```JSON
{
   "pageQuoteAboveImageDescription": {
      "text": [
         {
            "type": "orderedList",
            "items": [
               {
                  "type": "with links",
                  "text": [
                     "open ",
                     {
                        "type": "link",
                        "href": "https://github.com/jacob-l/WopiHost",
                        "linkTitle": "Go to WOPI host repo on github",
                        "text": "source code"
                     },
                     " see ",
                     {
                        "type": "link",
                        "href": "https://habr.com/en/company/tiktokcoach/blog/223179/",
                        "linkTitle": "Go to the article on habr",
                        "text": "the article"
                     },
                     " about it."
                  ]
               },
               "number two"
            ]
         },
         {
            "type": "unorderedList",
            "items": [
               {
                  "type": "with links",
                  "text": [
                     "open ",
                     {
                        "type": "link",
                        "href": "https://github.com/jacob-l/WopiHost",
                        "linkTitle": "Go to WOPI host repo on github",
                        "text": "source code"
                     },
                     " see ",
                     {
                        "type": "link",
                        "href": "https://habr.com/en/company/tiktokcoach/blog/223179/",
                        "linkTitle": "Go to the article on habr",
                        "text": "the article"
                     },
                     " about it."
                  ]
               },
               "number two"
            ]
         }
      ]
   }
}
```
