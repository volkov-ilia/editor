## MetaOpenGraph

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок страницы.
3. **description\*** - описание страницы.
4. **imageUrl\*** - ссылка в виде текста для отображаемой превью картинки в твиттер.

### пример

```JSON
{
  "pageTitle": "Custom Software Development Company",
  "pageDescription": "описание страницы",
  "idMetaOpenGraph": "facebook-meta",
  "previewMetaImgLink": "https://images.ctfassets.net/13g5no3omm60/2Hh0Z8QJ0oey57imyU5wVB/db5bfa1112a1863372a155d7737e3517/logo__1_.jpg",
  "MetaOpenGraph": {
    "type": "MetaOpenGraph",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idMetaOpenGraph"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageTitle"
        ]
      },
      {
        "name": "description",
        "function": "identity",
        "args": [
          "pageDescription"
        ]
      },
      {
        "name": "imageUrl",
        "function": "identity",
        "args": [
          "previewMetaImgLink"
        ]
      }
    ]
  }
}
```
