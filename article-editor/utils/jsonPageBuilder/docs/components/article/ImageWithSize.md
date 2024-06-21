## ImageWithSize

![ImageWithSize preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **image\*** - картинка
   - Значения: (см. [Общие поля картинок](../common/commonNestedComponents.md)) + строковое поле **description** - описание картинки

### Пример:

```JSON
{
   "components": ["ImageWithSize"],
  "pageImageWithSizeId":"ImageWithSize",
  "pageImageWithSizeImage":{
     "src": "https://images.ctfassets.net/13g5no3omm60/3qVioGWsPREIVaXSCmSqw6/25fa948dbfed133116f428bcaca5a3b3/Mask_Group-3.png",
     "alt": "button preview",
     "width": 100,
     "height": 100,
     "description": "button"
  },
  "ImageWithSize":{
    "type":"ImageWithSize",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageImageWithSizeId"
        ]
      },
      {
        "name": "image",
        "function": "identity",
        "args": [
          "pageImageWithSizeImage"
        ]
      }
    ]
  }
}
```
