## LetTheNumbersSpeak

![LetTheNumbersSpeak preview](https://i.ibb.co/NxWcFhD/image76.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка.
3. **text\*** - текст в компоненте.
   - Значение: строка.
4. **cards\*** - список из 3 карточек с цифрами.
   - Значение: контейнер карточек с 3 элементами.
5. **descBox\*** - список из 1 карточки с ссылкой.
   - Значение: контейнер карточек с 1 элементом.
6. **button** - кнопка. **См. Вложенные компоненты / primaryButton**

### Описание cards

Отображается в прямом порядке описания слева-направо. Поля:

1. **text\*** - смысловое значение числа.
   - Значение: строка.
2. **number\*** - отображаемое число.
   - Значение: строка с числом.
3. **suffix** - высота картинки бэйджа.
   - Значение: строка со знаком +, % и т.п.

### Описание descBox

Отображается в прямом порядке описания слева-направо. Поля:

1. **text\*** - обычный текст.
2. **description\*** - отображаемый текст
3. **linkTitle** - описание ссылки.
4. **href** - строковая ссылка.

### пример

```JSON
{
  "idLetTheNumbersSpeak": "LetTheNumbersSpeak",
  "pageLetTheNumbersSpeakTitle": "Let the numbers speak!",
  "pageLetTheNumbersSpeakText": "36 months is the average time of our partnership with a client. We are proud of 500+ cases and have experience with 200+ technologies, languages, platforms, libraries, frameworks.",
  "LetTheNumbersSpeak": {
    "type": "LetTheNumbersSpeak",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idLetTheNumbersSpeak"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageLetTheNumbersSpeakTitle"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageLetTheNumbersSpeakText"
        ]
      },
      {
        "name": "cards",
        "function": "container",
        "args": [
          {
            "name": "cardsValues",
            "function": "identity",
            "args": [
              "pageLetTheNumbersSpeakCardsValues"
            ]
          },
          {
            "name": "cardsMeta",
            "function": "identity",
            "args": [
              "pageLetTheNumbersSpeakCardsMeta"
            ]
          }
        ]
      },
      {
        "name": "descBox",
        "function": "container",
        "args": [
          {
            "name": "descBoxValues",
            "function": "identity",
            "args": [
              "pageLetTheNumbersSpeakDescBoxValues"
            ]
          },
          {
            "name": "descBoxMeta",
            "function": "identity",
            "args": [
              "pageLetTheNumbersSpeakDescBoxMeta"
            ]
          }
        ]
      },
      {
        "name": "button",
        "function": "container",
        "args": [
          {
            "name": "buttonValues",
            "function": "identity",
            "args": [
              "pageLetTheNumbersSpeakButtonValues"
            ]
          },
          {
            "name": "buttonMeta",
            "function": "identity",
            "args": [
              "pageLetTheNumbersSpeakButtonMeta"
            ]
          }
        ]
      }
    ]
  },
  "pageLetTheNumbersSpeakCardsValues": [
    {
      "text": "Years",
      "number": 5,
      "suffix": "+"
    },
    {
      "text": "Return customers",
      "number": 77,
      "suffix": "%"
    },
    {
      "text": "Countries",
      "number": 15,
      "suffix": ""
    }
  ],
  "pageLetTheNumbersSpeakCardsMeta": [
    {
      "name": "text",
      "function": "identity",
      "args": [
        "text"
      ]
    },
    {
      "name": "number",
      "function": "identity",
      "args": [
        "number"
      ]
    },
    {
      "name": "suffix",
      "function": "identity",
      "args": [
        "suffix"
      ]
    }
  ],
  "pageLetTheNumbersSpeakDescBoxValues": [
    {
      "text": "& Much More",
      "description": "View work history",
      "href": "/portfolio",
      "linkTitle": "Go to Portfolio page"
    }
  ],
  "pageLetTheNumbersSpeakDescBoxMeta": [
    {
      "name": "text",
      "function": "identity",
      "args": [
        "text"
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
      "name": "href",
      "function": "identity",
      "args": [
        "href"
      ]
    },
    {
      "name": "linkTitle",
      "function": "identity",
      "args": [
        "linkTitle"
      ]
    }
  ],
  "pageLetTheNumbersSpeakButtonValues": [
    {
      "primaryButtonText": "WORK HISTORY",
      "primaryButtonAction": "scrollToAnchor",
      "actionArgsValues": [
        {
          "anchor": "main-title",
          "offset": 0
        }
      ],
      "actionArgsMeta": [
        {
          "name": "anchor",
          "function": "identity",
          "args": [
            "anchor"
          ]
        },
        {
          "name": "offset",
          "function": "identity",
          "args": [
            "offset"
          ]
        }
      ]
    }
  ],
  "pageLetTheNumbersSpeakButtonMeta": [
    {
      "name": "text",
      "function": "identity",
      "args": [
        "primaryButtonText"
      ]
    },
    {
      "name": "action",
      "function": "identity",
      "args": [
        "primaryButtonAction"
      ]
    },
    {
      "name": "actionArgs",
      "function": "container",
      "args": [
        {
          "name": "actionArgsValues",
          "function": "identity",
          "args": [
            "actionArgsValues"
          ]
        },
        {
          "name": "actionArgsMeta",
          "function": "identity",
          "args": [
            "actionArgsMeta"
          ]
        }
      ]
    }
  ]
}
```
