## Meta

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок страницы. Должен совпадать с отображаемым в BGTitle заголовком.
3. **description\*** - описание страницы. Должно совпадать с отображаемым в BGTitle.
4. **keywords\*** - ключевые слова страницы.

### Пример:

```JSON
{
  "idMeta": "main-meta",
  "pageTitle": "Custom Software Development Company",
  "pageDescription": "описание страницы",
  "metaKeywords": "test keywords",
  "Meta": {
    "type": "Meta",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idMeta"
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
        "name": "keywords",
        "function": "identity",
        "args": [
          "metaKeywords"
        ]
      }
    ]
  }
}
```
