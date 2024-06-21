## QuoteAboveImage

![QuoteAboveImage preview](https://i.ibb.co/7CPcGfc/Quote-Above-Image.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка
3. **imageOnLeft** - отображение слева фото.
   - Значение: если фото должно быть слева, как на превью выше - "true", иначе - ничего
4. **imageSrc\*** - текстовая прямая ссылка на картинку, отображаемую слева или справа (зависит от параметра imageOnLeft)
5. **altImg\*** - альтернативный текст, если картинка не прогрузилась.
6. **quote\*** - цитата, отображаемая над картинкой.
7. **signature** - сигнатура, отображаемая вверху слева на картинке. См. **поля signature**
   - Значение: контейнер
8. **textList\*** - список текстов. См. **поля textList**
   - Значение: контейнер

### Поля textList

1. **icons** - список иконок к items.
2. **items\*** - альтернативный текст для фотографии, если не прогрузилась.
   - Значение: контейнер, если необходимо задать текст с заголовком или ссылкой (см. [Ссылка в тексте, заголовок](../common/commonNestedComponents.md)). Иначе - список. (см. PeopleSection)

### Поля signature

1. **name\*** - имя.
2. **job\*** - должность.

### Пример

```json
{
  "pageQuoteAboveImageId": "QuoteAboveImage",
  "pageQuoteAboveImageTitle": "What do we offer?",
  "pageQuoteAboveImageDescription": "We will help you to develop a robust and scalable modern React web application from scratch or grow and support existing one.",
  "pageQuoteAboveImageImageSrc": "https://images.ctfassets.net/13g5no3omm60/59SMccjFzEPuYwJqejbzfc/8e5985dd163c131d4af95c8eddb8d345/iakov.jpg",
  "pageQuoteAboveImageImageAlt": "Iakov Lilo photo",
  "pageQuoteAboveImageImageOnLeft": "true",
  "pageQuoteAboveImageQuote": "Deep specialization in React allows us to solve a wide range of tasks to get value for our clients.",
  "QuoteAboveImage": {
    "type": "QuoteAboveImage",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageQuoteAboveImageId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageQuoteAboveImageTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pageQuoteAboveImageDescription"]
      },
      {
        "name": "imageSrc",
        "function": "identity",
        "args": ["pageQuoteAboveImageImageSrc"]
      },
      {
        "name": "altImg",
        "function": "identity",
        "args": ["pageQuoteAboveImageImageAlt"]
      },
      {
        "name": "textList",
        "function": "container",
        "args": [
          {
            "name": "textListValues",
            "function": "identity",
            "args": ["pageQuoteAboveImageTextListValues"]
          },
          {
            "name": "textListMeta",
            "function": "identity",
            "args": ["pageQuoteAboveImageTextListMeta"]
          }
        ]
      },
      {
        "name": "imageOnLeft",
        "function": "identity",
        "args": ["pageQuoteAboveImageImageOnLeft"]
      },
      {
        "name": "quote",
        "function": "identity",
        "args": ["pageQuoteAboveImageQuote"]
      },
      {
        "name": "signature",
        "function": "identity",
        "args": ["pageQuoteAboveImageSignature"]
      }
    ]
  },
  "pageQuoteAboveImageTextListValues": [
    {
      "iconsValues": [
        {
          "iconColor": "orange",
          "icon": "hourglass"
        },
        {
          "iconColor": "blue",
          "icon": "trophy"
        }
      ],
      "iconsMeta": [
        {
          "name": "iconColor",
          "function": "identity",
          "args": ["iconColor"]
        },
        {
          "name": "icon",
          "function": "identity",
          "args": ["icon"]
        }
      ],
      "itemsValues": [
        {
          "type": "with header",
          "key": "Front-end development",
          "text": "Expanding your team with React developers for a week, month or year. Define your needs and manage your budget and team size flexibly.",
          "header": "Front-end development"
        },
        {
          "type": "with header",
          "key": "Full-cycle development",
          "text": "Web application development including business analysis, UX and graphic design, and quality control. Most often, for a React application, we use the MERN stack (MongoDB, Express.js, React, Node.js).",
          "header": "Full-cycle development"
        }
      ],
      "itemsMeta": [
        {
          "name": "text",
          "function": "identity",
          "args": ["text"]
        },
        {
          "name": "header",
          "function": "identity",
          "args": ["header"]
        }
      ]
    }
  ],
  "pageQuoteAboveImageTextListMeta": [
    {
      "name": "icons",
      "function": "container",
      "args": [
        {
          "name": "iconsValues",
          "function": "identity",
          "args": ["iconsValues"]
        },
        {
          "name": "iconsMeta",
          "function": "identity",
          "args": ["iconsMeta"]
        }
      ]
    },
    {
      "name": "items",
      "function": "container",
      "args": [
        {
          "name": "iconsValues",
          "function": "identity",
          "args": ["itemsValues"]
        },
        {
          "name": "iconsMeta",
          "function": "identity",
          "args": ["itemsMeta"]
        }
      ]
    }
  ],
  "pageQuoteAboveImageSignature": {
    "name": "Iakov Lilo",
    "job": "CTO HWdTech"
  }
}
```
