# Список действий для кнопок

## **scrollToAnchor**

**Назначение**: прокрутка к указанному якорю.
**Аргументы**:

- anchor - строка-id компонента, к которому нужно прорутить,
- offset - смещение позици прокрутки.

### Пример

```json
{
  "buttonValues": [
    {
      "buttonAction": "scrollToAnchor",
      "actionArgsValues": [
        {
          "anchor": "main-title"
        }
      ],
      "actionArgsMeta": [
        {
          "name": "anchor",
          "function": "identity",
          "args": ["anchor"]
        }
      ]
    }
  ],
  "buttonMeta": [
    {
      "name": "actionArgs",
      "function": "container",
      "args": [
        {
          "name": "actionArgsValues",
          "function": "identity",
          "args": ["actionArgsValues"]
        },
        {
          "name": "actionArgsMeta",
          "function": "identity",
          "args": ["actionArgsMeta"]
        }
      ]
    }
  ]
}
```
