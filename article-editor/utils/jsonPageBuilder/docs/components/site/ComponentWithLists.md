## ComponentWithList

![ComponentWithList preview](https://i.ibb.co/X32LQ0w/component-With-Lists.jpg)

- [Правила полей](#Правила-полей)
- [Поля text](#Поля-text)
- [Пример](#Пример)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **text\*** - список всех элементов. См. [Поля text](#Поля-text)
   - Значение: контейнер
3. **title\*** - заголовок компонента.
   - Значение:
4. **description\*** - описание компонента. См. превью (серый текст справа в двух абзацах).
   - Значение:
5. **primaryButton** - зелёная кнопка.
   - Значение: см. **primaryButton** в [общие вложенные компоненты](../common/commonNestedComponents.md)
6. **arrowButton\*** - прозрачная кнопка.
   - Значение: см. **arrowButton** в [общие вложенные компоненты](../common/commonNestedComponents.md)

### Поля text

1. **title\*** - заголовок столбца. См. превью (Web, Mobile, Native).
2. **points\*** - альтернативный текст для фотографии, если не прогрузилась.

### Пример

```json
{
  "pageComponentWithListsId": "ComponentWithLists",
  "pageComponentWithListsTitle": "Services by software type",
  "pageComponentWithListsDesc": "Don't think more about devices. Solve the best way the business task.\n\nWe are available to build the application on any platform you need.",
  "ComponentWithLists": {
    "type": "ComponentWithLists",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageComponentWithListsId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageComponentWithListsTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pageComponentWithListsDesc"]
      },
      {
        "name": "text",
        "function": "container",
        "args": [
          {
            "name": "textValues",
            "function": "identity",
            "args": ["pageComponentWithListsTextValues"]
          },
          {
            "name": "textMeta",
            "function": "identity",
            "args": ["pageComponentWithListsTextMeta"]
          }
        ]
      },
      {
        "name": "primaryButton",
        "function": "container",
        "args": [
          {
            "name": "primaryButtonValues",
            "function": "identity",
            "args": ["pageComponentWithListsPrimaryButtonValues"]
          },
          {
            "name": "primaryButtonMeta",
            "function": "identity",
            "args": ["pageComponentWithListsPrimaryButtonMeta"]
          }
        ]
      },
      {
        "name": "arrowButton",
        "function": "container",
        "args": [
          {
            "name": "arrowButtonValues",
            "function": "identity",
            "args": ["pageComponentWithListsArrowButtonValues"]
          },
          {
            "name": "arrowButtonnMeta",
            "function": "identity",
            "args": ["pageComponentWithListsArrowButtonMeta"]
          }
        ]
      }
    ]
  },
  "pageComponentWithListsTextValues": [
    {
      "title": "Web",
      "points": [
        {
          "type": "text",
          "text": "Highload, scalable applications, SaaS"
        },
        {
          "type": "text",
          "text": "Single Page Web Applications"
        },
        {
          "type": "text",
          "text": "Progressive Web Applications"
        },
        {
          "type": "text",
          "text": ".Net, Node.js, Java, Python"
        },
        {
          "type": "with links",
          "text": [
            {
              "href": "/react",
              "linkTitle": "Go to React page",
              "text": "React"
            },
            "AngularJS",
            {
              "href": "/nextjs",
              "linkTitle": "Go to Next.js page",
              "text": "Next.js"
            }
          ]
        }
      ]
    },
    {
      "title": "Mobile",
      "points": [
        {
          "type": "text",
          "text": "Android, iOS"
        },
        {
          "type": "text",
          "text": "Hybrid applications"
        },
        {
          "type": "text",
          "text": "Back-end for mobile apps"
        },
        {
          "type": "text",
          "text": "Swift, Java, Kotlin, C#"
        },
        {
          "type": "text",
          "text": "React Native, Apache Cordova"
        }
      ]
    },
    {
      "title": "Native",
      "points": [
        {
          "type": "text",
          "text": "Cross-Platform Applications"
        },
        {
          "type": "text",
          "text": "Platform Specific Applications"
        },
        {
          "type": "text",
          "text": "Multi-threaded, scalable applications"
        },
        {
          "type": "text",
          "text": "C++, C#, JavaScript"
        },
        {
          "type": "text",
          "text": "Qt, .Net, Mono, React Native"
        }
      ]
    }
  ],
  "pageComponentWithListsTextMeta": [
    {
      "name": "title",
      "function": "identity",
      "args": ["title"]
    },
    {
      "name": "points",
      "function": "identity",
      "args": ["points"]
    }
  ],
  "pageComponentWithListsPrimaryButtonValues": [
    {
      "primaryButtonText": "Hire us",
      "primaryButtonTitle": "Go to contact form",
      "primaryButtonAction": "scrollToAnchor",
      "actionArgsValues": [
        {
          "anchor": "contact",
          "offset": 0
        }
      ],
      "actionArgsMeta": [
        {
          "name": "anchor",
          "function": "identity",
          "args": ["anchor"]
        },
        {
          "name": "offset",
          "function": "identity",
          "args": ["offset"]
        }
      ]
    }
  ],
  "pageComponentWithListsPrimaryButtonMeta": [
    {
      "name": "title",
      "function": "identity",
      "args": ["primaryButtonTitle"]
    },
    {
      "name": "text",
      "function": "identity",
      "args": ["primaryButtonText"]
    },
    {
      "name": "action",
      "function": "identity",
      "args": ["primaryButtonAction"]
    },
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
  ],
  "pageComponentWithListsArrowButtonValues": [
    {
      "arrowButtonText": "Portfolio",
      "arrowButtonHrefValues": [
        {
          "arrowButtonHref": "/portfolio",
          "arrowButtonLinkTitle": "go to portfolio"
        }
      ],
      "arrowButtonHrefMeta": [
        {
          "name": "href",
          "function": "identity",
          "args": ["arrowButtonHref"]
        },
        {
          "name": "linkTitle",
          "function": "identity",
          "args": ["arrowButtonLinkTitle"]
        }
      ]
    }
  ],
  "pageComponentWithListsArrowButtonMeta": [
    {
      "name": "text",
      "function": "identity",
      "args": ["arrowButtonText"]
    },
    {
      "name": "linkMeta",
      "function": "container",
      "args": [
        {
          "name": "arrowButtonHrefValues",
          "function": "identity",
          "args": ["arrowButtonHrefValues"]
        },
        {
          "name": "arrowButtonHrefMeta",
          "function": "identity",
          "args": ["arrowButtonHrefMeta"]
        }
      ]
    }
  ]
}
```
