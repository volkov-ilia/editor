## ImageColumnWithText

![ImageColumnWithText preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **image\*** - картинка
   - Значения: (см. [Общие поля картинок](../common/commonNestedComponents.md)) + строковое поле **description** - описание картинки
3. **text\*** - форматированный (необязательно) текст
   - Значения: (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md))

### Пример:

```JSON
{
   "components": ["ImageColumnWithText"],
  "pageImageColumnWithTextId":"ImageColumnWithText",
  "pageImageColumnWithTextText":"Monday - Friday",
  "pageImageColumnWithTextImage":{
     "src": "https://images.ctfassets.net/13g5no3omm60/3qVioGWsPREIVaXSCmSqw6/25fa948dbfed133116f428bcaca5a3b3/Mask_Group-3.png",
     "alt": "button preview",
     "width": 100,
     "height": 100,
     "description": "button"
  },
  "ImageColumnWithText":{
    "type":"ImageColumnWithText",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageImageColumnWithTextId"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageImageColumnWithTextText"
        ]
      },
      {
        "name": "image",
        "function": "identity",
        "args": [
          "pageImageColumnWithTextImage"
        ]
      }
    ]
  }
}
```
