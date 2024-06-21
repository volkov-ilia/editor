## Portfolio Carousel

![portfolio carousel preview](https://i.ibb.co/gTBCgzf/portfolio-Carousel.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **label\*** - заголовок компонента
   - Значение: строка.
3. **description** - описание компонента.
   - Значение: строка.
4. **cards\*** - список карточек.
   - Значение: контейнер карточек.

### Правила карточек

1. **key\*** - обязательное уникальное поле.
   - Значения: уникальная для списка карточек строка.
2. **primaryTitle\*** - серый заголовок карточки
3. **title\*** - большой заголовок карточки.
4. **text\*** - текст карточки
5. **button** - зелёная кнопка. См. раздел Вложенные компоненты.
6. **buttonArrow** - кнопка с иконкой. См. раздел Вложенные компоненты.
7. **imageSrc\*** - строковая ссылка на картинку-превью карточки
8. **imageAlt\*** - текстовое описание картинки
9. **imageOnLeft** - положение картинки слева? а. "true", если картинка, как на превью выше, должна быть слева. Иначе -
   ничего.

**Для разбиения текста карточек на абзацы использовать "\n\n"** с одним слэшем (маркдаун сам добавляет второй). См. пример.

### пример

```json
{
  "idPortfolioCarousel": "PortfolioCarousel",
  "pagePortfolioCarouselLabel": "PORTFOLIO",
  "pagePortfolioCarouselImageOnLeft": "true",
  "component1": {
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["idPortfolioCarousel"]
      },
      {
        "name": "imageOnLeft",
        "function": "identity",
        "args": ["pagePortfolioCarouselImageOnLeft"]
      },
      {
        "name": "label",
        "function": "identity",
        "args": ["pagePortfolioCarouselLabel"]
      },
      {
        "name": "children",
        "function": "container",
        "args": [
          {
            "name": "actionArgsValues",
            "function": "identity",
            "args": ["pagePortfolioCarouselChildrenValues"]
          },
          {
            "name": "actionArgsMeta",
            "function": "identity",
            "args": ["pagePortfolioCarouselChildrenMeta"]
          }
        ]
      }
    ]
  },
  "pagePortfolioCarouselChildrenValues": [
    {
      "key": "TTC",
      "primaryTitle": "OWN PROJECT",
      "title": "Tik-Tok Coach",
      "text": "Tik-Tok Coach is a desktop app and a web-portal that offers you time-tracking, screenshot taking, goal setting and valuating each employee's part in the working process.",
      "imageSrc": "https://images.ctfassets.net/13g5no3omm60/45cI55EqawHzcR6meqcPwb/d5a3ebd47e9041914c7485b129f00fc1/TTC2.jpg",
      "imageAlt": "ttc portflio carousel preview image",
      "buttonValues": [
        {
          "primaryButtonText": "see Tik-Tok Coach case",
          "primaryButtonHrefValues": [
            {
              "primaryButtonHref": "/portfolio/tik-tok-coach",
              "primaryButtonlinkTitle": "Go to Tik-Tok Coach page"
            }
          ],
          "primaryButtonHrefMeta": [
            {
              "name": "href",
              "function": "identity",
              "args": ["primaryButtonHref"]
            },
            {
              "name": "linkTitle",
              "function": "identity",
              "args": ["primaryButtonlinkTitle"]
            }
          ]
        }
      ],
      "buttonMeta": [
        {
          "name": "text",
          "function": "identity",
          "args": ["primaryButtonText"]
        },
        {
          "name": "linkMeta",
          "function": "container",
          "args": [
            {
              "name": "primaryButtonHrefValues",
              "function": "identity",
              "args": ["primaryButtonHrefValues"]
            },
            {
              "name": "primaryButtonHrefMeta",
              "function": "identity",
              "args": ["primaryButtonHrefMeta"]
            }
          ]
        }
      ],
      "buttonArrowValues": [
        {
          "primaryButtonText": "SEE FULL PORTFOLIO",
          "primaryButtonHrefValues": [
            {
              "primaryButtonHref": "/portfolio",
              "primaryButtonlinkTitle": "Go to Portfolio page"
            }
          ],
          "primaryButtonHrefMeta": [
            {
              "name": "href",
              "function": "identity",
              "args": ["primaryButtonHref"]
            },
            {
              "name": "linkTitle",
              "function": "identity",
              "args": ["primaryButtonlinkTitle"]
            }
          ]
        }
      ],
      "buttonArrowMeta": [
        {
          "name": "text",
          "function": "identity",
          "args": ["primaryButtonText"]
        },
        {
          "name": "linkMeta",
          "function": "container",
          "args": [
            {
              "name": "primaryButtonHrefValues",
              "function": "identity",
              "args": ["primaryButtonHrefValues"]
            },
            {
              "name": "primaryButtonHrefMeta",
              "function": "identity",
              "args": ["primaryButtonHrefMeta"]
            }
          ]
        }
      ]
    },
    {
      "key": "Mapic",
      "primaryTitle": "NORWAY",
      "title": "Mapic",
      "text": "Mapic helps you publish GEO data without having to write any code.\n\nWith your own PostGIS database and Mapic powerful tile server, you can easily make changes to your maps without having to use any third party software.",
      "imageSrc": "https://images.ctfassets.net/13g5no3omm60/2qlQfE0RUdRlhJwO5KjehR/ff0d1b4a66722f200383683738e52415/mapic2.jpg",
      "imageAlt": "mapic portflio carousel preview image",
      "buttonValues": [
        {
          "primaryButtonText": "see Mapic case",
          "primaryButtonHrefValues": [
            {
              "primaryButtonHref": "/portfolio/mapic",
              "primaryButtonlinkTitle": "Go to Mapic page"
            }
          ],
          "primaryButtonHrefMeta": [
            {
              "name": "href",
              "function": "identity",
              "args": ["primaryButtonHref"]
            },
            {
              "name": "linkTitle",
              "function": "identity",
              "args": ["primaryButtonlinkTitle"]
            }
          ]
        }
      ],
      "buttonMeta": [
        {
          "name": "text",
          "function": "identity",
          "args": ["primaryButtonText"]
        },
        {
          "name": "linkMeta",
          "function": "container",
          "args": [
            {
              "name": "primaryButtonHrefValues",
              "function": "identity",
              "args": ["primaryButtonHrefValues"]
            },
            {
              "name": "primaryButtonHrefMeta",
              "function": "identity",
              "args": ["primaryButtonHrefMeta"]
            }
          ]
        }
      ],
      "buttonArrowValues": [
        {
          "primaryButtonText": "SEE FULL PORTFOLIO",
          "primaryButtonHrefValues": [
            {
              "primaryButtonHref": "/portfolio",
              "primaryButtonlinkTitle": "Go to Portfolio page"
            }
          ],
          "primaryButtonHrefMeta": [
            {
              "name": "href",
              "function": "identity",
              "args": ["primaryButtonHref"]
            },
            {
              "name": "linkTitle",
              "function": "identity",
              "args": ["primaryButtonlinkTitle"]
            }
          ]
        }
      ],
      "buttonArrowMeta": [
        {
          "name": "text",
          "function": "identity",
          "args": ["primaryButtonText"]
        },
        {
          "name": "linkMeta",
          "function": "container",
          "args": [
            {
              "name": "primaryButtonHrefValues",
              "function": "identity",
              "args": ["primaryButtonHrefValues"]
            },
            {
              "name": "primaryButtonHrefMeta",
              "function": "identity",
              "args": ["primaryButtonHrefMeta"]
            }
          ]
        }
      ]
    }
  ],
  "pagePortfolioCarouselChildrenMeta": [
    {
      "name": "key",
      "function": "identity",
      "args": ["key"]
    },
    {
      "name": "primaryTitle",
      "function": "identity",
      "args": ["primaryTitle"]
    },
    {
      "name": "title",
      "function": "identity",
      "args": ["title"]
    },
    {
      "name": "text",
      "function": "identity",
      "args": ["text"]
    },
    {
      "name": "imageSrc",
      "function": "identity",
      "args": ["imageSrc"]
    },
    {
      "name": "imageAlt",
      "function": "identity",
      "args": ["imageAlt"]
    },
    {
      "name": "button",
      "function": "container",
      "args": [
        {
          "name": "buttonArrowValues",
          "function": "identity",
          "args": ["buttonValues"]
        },
        {
          "name": "buttonArrowMeta",
          "function": "identity",
          "args": ["buttonMeta"]
        }
      ]
    },
    {
      "name": "buttonArrow",
      "function": "container",
      "args": [
        {
          "name": "buttonArrowValues",
          "function": "identity",
          "args": ["buttonArrowValues"]
        },
        {
          "name": "buttonArrowMeta",
          "function": "identity",
          "args": ["buttonArrowMeta"]
        }
      ]
    }
  ]
}
```
