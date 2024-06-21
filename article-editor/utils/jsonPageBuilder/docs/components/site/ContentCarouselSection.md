## ContentCarouselSection

![ContentCarouselSection preview](https://i.ibb.co/gtYp5n5/ci.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title** - чёрный заголовок компонента
   - Значение: строка.
3. **description** - серое описание компонента.
   - Значение: строка.
4. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер.
5. **onCenterTitle** - отображение заголовка и описания по центру.
   - Значение: если картинка должна быть справа, как на превью выше - "true", иначе - ничего.
6. **autoPlay** - автопрокрутка карусели.
   - Значение: если должна быть автопрокрутка - "true", иначе - ничего.
7. **autoPlaySpeed** - скорость автопрокрутки в миллисекундах. Чем больше значение - тем медленнее происходит прокрутка
   элементов.
   - Значение: строковая цифра.

### Поля items

Отображается в прямом порядке описания. Поля:

1. **key\*** - уникальный в списке ключ карточки.
2. **image\*** - данные картинки, см. [Общие данные изображения](../common/commonNestedComponents.md)
3. **items\*** - текст карточки. См. [Текст](../common/commonNestedComponents.md).

### Поля items из items

1. **animation** - вид анимации.
   - Значения: "left", "right", "up", "in", "bottom".
2. **src** - строковая ссылка.
3. **alt** - альтернативный текст для картинки при ошибке загрузки с ресурса.

```json
{
  "pageContentCarouselSectionId": "ContentCarouselSection",
  "pageContentCarouselSectionTitle": "Contact us",
  "pageContentCarouselSectionDescription": "Our addresses",
  "pageContentCarouselSectionOnCenterTitle": "true",
  "pageContentCarouselSectionAutoPlay": "true",
  "pageContentCarouselSectionAutoPlaySpeed": "1000",
  "ContentCarouselSection": {
    "type": "ContentCarouselSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageContentCarouselSectionId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageContentCarouselSectionTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pageContentCarouselSectionDescription"]
      },
      {
        "name": "onCenterTitle",
        "function": "identity",
        "args": ["pageContentCarouselSectionOnCenterTitle"]
      },
      {
        "name": "items",
        "function": "container",
        "args": [
          {
            "name": "contentValues",
            "function": "identity",
            "args": ["pageContentCarouselSectionContentValues"]
          },
          {
            "name": "contentMeta",
            "function": "identity",
            "args": ["pageContentCarouselSectionContentMeta"]
          }
        ]
      },
      {
        "name": "autoPlay",
        "function": "identity",
        "args": ["pageContentCarouselSectionAutoPlay"]
      },
      {
        "name": "autoPlaySpeed",
        "function": "identity",
        "args": ["pageContentCarouselSectionAutoPlaySpeed"]
      }
    ]
  },
  "pageContentCarouselSectionContentValues": [
    {
      "key": "legal address",
      "image": {
        "src": "https://images.ctfassets.net/13g5no3omm60/6rWH3rCsrBBsReH094PJeU/5ac168e5437a78f6534af13d25601c21/staticmap2.jpg",
        "alt": "legal address on the map"
      },
      "textsValues": [
        {
          "header": "Our legal address:",
          "text": "Russian Federation\n644077, Omsk\n10 Prigorodnaya st., b.1\napt. 10"
        },
        {
          "header": "Call us:",
          "text": "+1 888 657 0 76716"
        }
      ],
      "textsMeta": [
        {
          "name": "header",
          "function": "identity",
          "args": ["header"]
        },
        {
          "name": "text",
          "function": "identity",
          "args": ["text"]
        }
      ]
    },
    {
      "key": "office address",
      "image": {
        "src": "https://images.ctfassets.net/13g5no3omm60/5hTRObfiI47MUPfWPw3sFj/26ddad681c6206c94fc8a1bd4391bcc5/staticmap.jpg",
        "alt": "office address on the map"
      },
      "textsValues": [
        {
          "header": "Our office address:",
          "text": "Russian Federation\n644077, Omsk\n79 Uchebnaya st.\nLevel 7, office 701"
        },
        {
          "header": "Call us:",
          "text": "+1 888 657 0 76716"
        }
      ],
      "textsMeta": [
        {
          "name": "header",
          "function": "identity",
          "args": ["header"]
        },
        {
          "name": "text",
          "function": "identity",
          "args": ["text"]
        }
      ]
    }
  ],
  "pageContentCarouselSectionContentMeta": [
    {
      "name": "key",
      "function": "identity",
      "args": ["key"]
    },
    {
      "name": "image",
      "function": "identity",
      "args": ["image"]
    },
    {
      "name": "texts",
      "function": "container",
      "args": [
        {
          "name": "content",
          "function": "identity",
          "args": ["textsValues"]
        },
        {
          "name": "content",
          "function": "identity",
          "args": ["textsMeta"]
        }
      ]
    }
  ]
}
```
