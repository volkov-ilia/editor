## Code

![Code preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **code** - строки кода, разделённые \n
3. **language\*** - язык из списка [
   "js",
   "kotlin",
   "cpp",
   "csharp",
   "json",
   "python",
   "java",
   "clike",
   "html",
   "xml",
   ]

### Пример:

```JSON
{
   "components": ["Code"],
  "pageCodeId": "Code",
  "pageCodeCode": "fun foo(a: string){\n}",
  "pageCodeLanguage": "kotlin",
  "Code": {
    "type": "Code",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageCodeId"
        ]
      },
      {
        "name": "code",
        "function": "identity",
        "args": [
          "pageCodeCode"
        ]
      },
      {
        "name": "language",
        "function": "identity",
        "args": [
          "pageCodeLanguage"
        ]
      }
    ]
  }
}
```
