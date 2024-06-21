## CommentsCarousel

![CommentsCarousel preview](https://i.ibb.co/g4tx6zH/comments-carousel.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка
3. **imageOnLeft** - отображение слева всех фото в комменариях.
   - Значение: если фото должно быть слева, как на превью выше - "true", иначе - ничего
4. **comments\*** - список комментариев с необходимыми полями. См. Поля comments
   - Значение: контейнер

### Поля comments

1. **src\*** - текстовая ссылка на фотографию.
2. **img\*** - альтернативный текст для фотографии, если не прогрузилась.
3. **quote\*** - текст цитаты.
4. **name\*** - ФИО комментатора.
5. **job\*** - должность комментатора.
6. **reviewSiteName** - прямая ссылка на комментарий или ресурс. Обязательно, если указано **reviewLink**
7. **reviewLink** - название ресурса. Обязательно, если указано **reviewSiteName**

### пример

```json
{
  "pageCommentsCarouselId": "CommentsCarousel",
  "pageCommentsCarouselTitle": "Clients comments",
  "pageCommentsCarouselImageOnLeft": "true",
  "CommentsCarousel": {
    "type": "CommentsCarousel",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageCommentsCarouselId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageCommentsCarouselTitle"]
      },
      {
        "name": "imageOnLeft",
        "function": "identity",
        "args": ["pageCommentsCarouselImageOnLeft"]
      },
      {
        "name": "comments",
        "function": "container",
        "args": [
          {
            "name": "imagesValues",
            "function": "identity",
            "args": ["pageCommentsCarouselCommentsValues"]
          },
          {
            "name": "imagesMeta",
            "function": "identity",
            "args": ["pageCommentsCarouselCommentsMeta"]
          }
        ]
      }
    ]
  },
  "pageCommentsCarouselCommentsValues": [
    {
      "key": "Gordon Marsh",
      "quote": "«Hello World! Technologies» is a team that asks good questions in order to understand the project really well and works in good faith and without negligence.",
      "name": "Gordon Marsh",
      "job": "CEO, CodeFuse Technology",
      "reviewSiteName": "clutch",
      "reviewLink": "https://clutch.co/profile/hello-world-technologies-hwdtech#review-162730",
      "src": "https://images.ctfassets.net/13g5no3omm60/5eu0VvxuG1g2sEQyOwIGBb/a1dc6ce5d2d018e1b011c7bb914e9acf/gordon_marsh.jpg",
      "alt": "Gordon Marsh photo"
    }
  ],
  "pageCommentsCarouselCommentsMeta": [
    {
      "name": "key",
      "function": "identity",
      "args": ["key"]
    },
    {
      "name": "quote",
      "function": "identity",
      "args": ["quote"]
    },
    {
      "name": "job",
      "function": "identity",
      "args": ["job"]
    },
    {
      "name": "name",
      "function": "identity",
      "args": ["name"]
    },
    {
      "name": "reviewSiteName",
      "function": "identity",
      "args": ["reviewSiteName"]
    },
    {
      "name": "reviewLink",
      "function": "identity",
      "args": ["reviewLink"]
    },
    {
      "name": "src",
      "function": "identity",
      "args": ["src"]
    },
    {
      "name": "alt",
      "function": "identity",
      "args": ["alt"]
    }
  ]
}
```
