## TwoImagesWithText

![TwoImagesWithText preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **text\*** - форматированный (необязательно) текст
   - Значения: (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md))
3. **images\*** - список картинок
   - Значения: (см. [Общие поля картинок](../common/commonNestedComponents.md)) + строковое поле **description** -
     описание картинки

### Пример:

```JSON
{
   "components": ["TwoImagesWithText"],
  "pageTwoImagesWithTextId": "TwoImagesWithText",
  "pageTwoImagesWithTextText": "Monday - Friday",
  "TwoImagesWithText": {
    "type": "TwoImagesWithText",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageTwoImagesWithTextId"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageTwoImagesWithTextText"
        ]
      },
      {
        "name": "images",
        "function": "container",
        "args": [
          {
            "name": "cardsValues",
            "function": "identity",
            "args": [
              "pageTwoImagesWithTextImagesValues"
            ]
          },
          {
            "name": "cardsMeta",
            "function": "identity",
            "args": [
              "pageTwoImagesWithTextImagesMeta"
            ]
          }
        ]
      }
    ]
  },
  "pageTwoImagesWithTextImagesValues": [
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/3qVioGWsPREIVaXSCmSqw6/25fa948dbfed133116f428bcaca5a3b3/Mask_Group-3.png",
      "alt": "button preview",
      "width": 100,
      "height": 100,
      "description": "button"
    },
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/2sk8c9NQXeMrqaPSRjmw0R/a2cdef0b1d8bfc5084e30240648ed29d/Mask_Group-2.png",
      "alt": "text formatting preview",
      "width": 100,
      "height": 100
    }
  ],
  "pageTwoImagesWithTextImagesMeta": [
    {
      "name": "src",
      "function": "identity",
      "args": [
        "src"
      ]
    },
    {
      "name": "alt",
      "function": "identity",
      "args": [
        "alt"
      ]
    },
    {
      "name": "width",
      "function": "identity",
      "args": [
        "width"
      ]
    },
    {
      "name": "height",
      "function": "identity",
      "args": [
        "height"
      ]
    },
    {
      "name": "description",
      "function": "identity",
      "args": [
        "description"
      ]
    }
  ]
}
```
