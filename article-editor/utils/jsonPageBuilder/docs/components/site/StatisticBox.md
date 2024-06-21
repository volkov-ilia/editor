## StatisticBox

![StatisticBox preview](https://i.ibb.co/kSMDvV3/numbers.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер.

### Поля items

Отображается в прямом порядке описания. Поля:

1. **value\*** - имя.
2. **description\*** - должность.
3. **suffix** - электронная почта.

### Пример

```json
{
  "pageStatisticBoxId": "StatisticBox",
  "StatisticBox": {
    "type": "StatisticBox",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageStatisticBoxId"]
      },
      {
        "name": "items",
        "function": "container",
        "args": [
          {
            "name": "itemsValues",
            "function": "identity",
            "args": ["pageStatisticBoxValues"]
          },
          {
            "name": "itemsMeta",
            "function": "identity",
            "args": ["pageStatisticBoxMeta"]
          }
        ]
      }
    ]
  },
  "pageStatisticBoxValues": [
    {
      "value": "6",
      "description": "Years on the market"
    },
    {
      "value": "478",
      "description": "User companies"
    },
    {
      "value": "1370",
      "description": "Completed projects"
    },
    {
      "value": "129021",
      "suffix": "+",
      "description": "Hours of work"
    }
  ],
  "pageStatisticBoxMeta": [
    {
      "name": "value",
      "function": "identity",
      "args": ["value"]
    },
    {
      "name": "suffix",
      "function": "identity",
      "args": ["suffix"]
    },
    {
      "name": "description",
      "function": "identity",
      "args": ["description"]
    }
  ]
}
```
