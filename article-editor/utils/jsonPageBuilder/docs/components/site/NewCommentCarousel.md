## NewCommentCarousel

![NewCommentCarousel preview](https://i.ibb.co/KrXYHLR/Screenshot-from-2021-03-04-16-43-37.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка
3. **photos\*** - список фотографий с необходимыми полями. См. Поля photos
   - Значение: контейнер
4. **comments\*** - список комментариев с необходимыми полями. См. Поля comments
   - Значение: контейнер

**Количество фотографий должно совпадать с количеством комментариев!**

### Поля photos

Минимальное количество карточек - 1. Максимальное количество карточек - 5.

1. **src\*** - текстовая ссылка на фотографию.
2. **alt\*** - альтернативный текст для фотографии, если не прогрузилась.

### Поля comments

Минимальное количество карточек - 1. Максимальное количество карточек - 5.

1. **key\*** - уникальный в списке фотографий идентификатор.
2. **quote\*** - текст цитаты.
3. **name\*** - ФИО комментатора.
4. **job\*** - должность комментатора.
5. **reviewSiteName** - прямая ссылка на комментарий или ресурс. Обязательно, если указано **reviewLink**
6. **reviewLink** - название ресурса. Обязательно, если указано **reviewSiteName**

### пример

```JSON
{
  "pageNewCommentCarouselId": "NewCommentCarousel",
  "pageNewCommentCarouseTitle": "clients feedback",
  "NewCommentCarousel": {
    "type": "NewCommentCarousel",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageNewCommentCarouselId"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageNewCommentCarouseTitle"
        ]
      },
      {
        "name": "comments",
        "function": "container",
        "args": [
          {
            "name": "cardsValues",
            "function": "identity",
            "args": [
              "pageNewCommentCarouseCommentsValues"
            ]
          },
          {
            "name": "cardsMeta",
            "function": "identity",
            "args": [
              "pageNewCommentCarouseCommentsMeta"
            ]
          }
        ]
      },
      {
        "name": "photos",
        "function": "container",
        "args": [
          {
            "name": "imagesValues",
            "function": "identity",
            "args": [
              "pageNewCommentCarousePhotosValues"
            ]
          },
          {
            "name": "imagesMeta",
            "function": "identity",
            "args": [
              "pageNewCommentCarousePhotosMeta"
            ]
          }
        ]
      }
    ]
  },
  "pageNewCommentCarouseCommentsValues": [
    {
      "key": "Gordon Marsh",
      "quote": "«Hello World! Technologies» is a team that asks good questions in order to understand the project really well and works in good faith and without negligence.",
      "name": "Gordon Marsh",
      "job": "CEO, CodeFuse Technology",
      "reviewSiteName": "clutch",
      "reviewLink": "https://clutch.co/profile/hello-world-technologies-hwdtech#review-162730"
    }
  ],
  "pageNewCommentCarouseCommentsMeta": [
    {
      "name": "key",
      "function": "identity",
      "args": [
        "key"
      ]
    },
    {
      "name": "quote",
      "function": "identity",
      "args": [
        "quote"
      ]
    },
    {
      "name": "name",
      "function": "identity",
      "args": [
        "name"
      ]
    },
    {
      "name": "job",
      "function": "identity",
      "args": [
        "job"
      ]
    },
    {
      "name": "reviewSiteName",
      "function": "identity",
      "args": [
        "reviewSiteName"
      ]
    },
    {
      "name": "reviewLink",
      "function": "identity",
      "args": [
        "reviewLink"
      ]
    }
  ],
  "pageNewCommentCarousePhotosValues": [
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/5eu0VvxuG1g2sEQyOwIGBb/a1dc6ce5d2d018e1b011c7bb914e9acf/gordon_marsh.jpg",
      "alt": "Gordon Marsh photo"
    }
  ],
  "pageNewCommentCarousePhotosMeta": [
    {
      "name": "src",
      "function": "identity",
      "args": [
        "src"
      ]
    },
    {
      "name": "alt",
      "function": "identity",
      "args": [
        "alt"
      ]
    }
  ]
}
```
