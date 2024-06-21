## CodeSnippet

![CodeSnippet preview]()

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **src** - ссылка на сниппет
3. **resource\*** - GitHub | GitLab | CodeSandbox
4. **title\*** - описание блока
5. **height\*** - высота блока в пикселях

### Примеры ссылок на сниппеты

- **CodeSandbox**: https://codesandbox.io/embed/0qor7onxy0?fontsize=14&hidenavigation=1&theme=dark
- **GitLab**: https://gitlab.com/-/snippets/2095295.js
- **GitHub**: https://gist.github.com/hieptl/c6f210ce1c4a3bfb13130ca6a7b8fba6.js

### Пример:

```JSON
{
   "components": ["CodeSnippet"],
  "pageCodeSnippetId": "CodeSnippet",
  "pageCodeSnippetSrc": "https://codesandbox.io/embed/0qor7onxy0?fontsize=14&hidenavigation=1&theme=dark",
  "pageCodeSnippetResource": "CodeSandbox",
  "pageCodeSnippetTitle": "some title",
  "pageCodeSnippetHeight": 600,
  "CodeSnippet": {
    "type": "CodeSnippet",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageCodeSnippetId"
        ]
      },
      {
        "name": "src",
        "function": "identity",
        "args": [
          "pageCodeSnippetSrc"
        ]
      },
      {
        "name": "resource",
        "function": "identity",
        "args": [
          "pageCodeSnippetResource"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageCodeSnippetTitle"
        ]
      },
      {
        "name": "height",
        "function": "identity",
        "args": [
          "pageCodeSnippetHeight"
        ]
      }
    ]
  }
}
```
