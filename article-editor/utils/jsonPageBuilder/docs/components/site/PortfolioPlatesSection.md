## PortfolioPlatesSection

plate:
![article plates preview](https://i.ibb.co/WD3rVtG/SPECIAL-OFFERS.png)
articlePlate:
![article plates preview](https://i.ibb.co/1sBDfsw/ARTICLES.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка
3. **description\*** - описание компонента.
   - Значение: строка
4. **cards\*** - список фотографий с необходимыми полями. См. Поля photos
   - Значение: контейнер
5. **locale\*** - локализация формы даты. Используется для карточек, где есть publicationDate.
   - Значение: "ru", "en". По умолчанию "en"
6. **blogId\*** - путь к статьям.
   - Значение: по умолчанию "blog"
7. **casesId\*** - путь к кейсам.
   - Значение: по умолчанию "cases"

**Количество фотографий должно совпадать с количеством комментариев!**

### Поля cards

1. **imgSrc\*** - текстовая ссылка на фотографию.
2. **altImg\*** - альтернативный текст для фотографии, если не прогрузилась.
3. **title\*** - заголовок карточки.
4. **description** - строковое описание карточки.
5. **time** - примерное время чтения.
6. **linkMeta** - данные для ссылки. **См. Вложенные компоненты / linkMeta**
7. **publicationDate** - строковая дата публикации статьи.

### пример

```json
{
  "pagePortfolioPlatesSectionId": "PortfolioPlatesSection",
  "pagePortfolioPlatesSectionTitle": "SPECIAL OFFERS",
  "pagePortfolioPlatesSectionDescription": "Based on our expertise we are happy to introduce.",
  "PortfolioPlatesSection": {
    "type": "PortfolioPlatesSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pagePortfolioPlatesSectionId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pagePortfolioPlatesSectionTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pagePortfolioPlatesSectionDescription"]
      },
      {
        "name": "cards",
        "function": "container",
        "args": [
          {
            "name": "imagesValues",
            "function": "identity",
            "args": ["pagePortfolioPlatesSectionCardsValues"]
          },
          {
            "name": "imagesMeta",
            "function": "identity",
            "args": ["pagePortfolioPlatesSectionCardsMeta"]
          }
        ]
      }
    ]
  },
  "pagePortfolioPlatesSectionCardsValues": [
    {
      "imgSrc": "https://hwdtech.com/_next/static/images/561efe7062c3c29c96a9a6e31d14c983.jpg",
      "altImg": "Web Development",
      "description": "HWdTech develops working prototype or proof of concepts in 5 business days absolutely free.",
      "title": "Web Development",
      "linkMetaValues": [
        {
          "href": "/web-services-and-application-developement",
          "linkTitle": "Go to Web Development case"
        }
      ],
      "linkMetaMeta": [
        {
          "name": "href",
          "function": "identity",
          "args": ["href"]
        },
        {
          "name": "linkTitle",
          "function": "identity",
          "args": ["linkTitle"]
        }
      ]
    },
    {
      "imgSrc": "https://hwdtech.com/_next/static/images/27a7943b14bc35950442843fc18d54f9.jpg",
      "altImg": "Office Online",
      "description": "It allows you to work with documents in collaboration and change them right in the browser.",
      "title": "Integration with Office Online via WOPI protocol",
      "linkMetaValues": [
        {
          "href": "/office-online-integration",
          "linkTitle": "Go to Office Online case"
        }
      ],
      "linkMetaMeta": [
        {
          "name": "href",
          "function": "identity",
          "args": ["href"]
        },
        {
          "name": "linkTitle",
          "function": "identity",
          "args": ["linkTitle"]
        }
      ]
    },
    {
      "imgSrc": "https://hwdtech.com/_next/static/images/a2d4167d7630764897d227d97a5c129e.jpg",
      "altImg": "MVP",
      "description": "Full cycle of web, mobile, or software development for your startup to test the idea or to introduce it.",
      "title": "Get an MVP in two months for fixed price",
      "linkMetaValues": [
        {
          "href": "/get-mvp-in-two-months-for-fixed-price",
          "linkTitle": "Go to MVP case"
        }
      ],
      "linkMetaMeta": [
        {
          "name": "href",
          "function": "identity",
          "args": ["href"]
        },
        {
          "name": "linkTitle",
          "function": "identity",
          "args": ["linkTitle"]
        }
      ]
    }
  ],
  "pagePortfolioPlatesSectionCardsMeta": [
    {
      "name": "imgSrc",
      "function": "identity",
      "args": ["imgSrc"]
    },
    {
      "name": "altImg",
      "function": "identity",
      "args": ["altImg"]
    },
    {
      "name": "description",
      "function": "identity",
      "args": ["description"]
    },
    {
      "name": "title",
      "function": "identity",
      "args": ["title"]
    },
    {
      "name": "linkMeta",
      "function": "container",
      "args": [
        {
          "name": "linkMetaValues",
          "function": "identity",
          "args": ["linkMetaValues"]
        },
        {
          "name": "linkMetaMeta",
          "function": "identity",
          "args": ["linkMetaMeta"]
        }
      ]
    }
  ]
}
```
