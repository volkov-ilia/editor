## GridPlatesSection

![GridPlatesSection preview](https://i.ibb.co/rx2YfSs/image9.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка.
3. **description\*** - описание компонента.
   - Значение: строка.

### пример

```JSON
{
  "pageGridPlatesSectionTitle": "WHAT WE LOVE TO DO?",
  "pageGridPlatesSectionDescription": "Technology Solutions for Your Business",
  "idGridPlatesSectionTitle": "what-we-love-to-do",
  "GridPlatesSection": {
    "type": "GridPlatesSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idGridPlatesSectionTitle"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageGridPlatesSectionTitle"
        ]
      },
      {
        "name": "description",
        "function": "identity",
        "args": [
          "pageGridPlatesSectionDescription"
        ]
      },
      {
        "name": "cards",
        "function": "container",
        "args": [
          {
            "name": "labelValues",
            "function": "identity",
            "args": [
              "cardsValues"
            ]
          },
          {
            "name": "labelMeta",
            "function": "identity",
            "args": [
              "cardsMeta"
            ]
          }
        ]
      }
    ]
  },
  "cardsValues": [
    {
      "title": "Web Development",
      "description": "Highload, scalable applications, SaaS, Single Page Web Applications, Progressive Web Applications",
      "icon": "monitor",
      "iconColor": "orange"
    },
    {
      "title": "Mobile",
      "description": "Android, iOS, hybrid applications, back-end for mobile apps",
      "icon": "mobile",
      "iconColor": "green"
    },
    {
      "title": "UI/UX Design",
      "description": "We provide the UI/UX Design by following the latest trends of the market",
      "icon": "monitormobile",
      "iconColor": "pink"
    }
  ],
  "cardsMeta": [
    {
      "name": "icon",
      "function": "identity",
      "args": [
        "icon"
      ]
    },
    {
      "name": "description",
      "function": "identity",
      "args": [
        "description"
      ]
    },
    {
      "name": "title",
      "function": "identity",
      "args": [
        "title"
      ]
    },
    {
      "name": "iconColor",
      "function": "identity",
      "args": [
        "iconColor"
      ]
    }
  ]
}
```
