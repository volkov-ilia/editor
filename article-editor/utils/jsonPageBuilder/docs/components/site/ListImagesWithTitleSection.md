## ListImagesWithTitleSection

![ListImagesWithTitleSection preview](https://i.ibb.co/mFhwBdJ/liwts.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title** - зелёный заголовок.
   - Значение: строка.
3. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер.

### Поля items

Отображается в прямом порядке описания. Поля:

1. **src\*** - ссылка на картинку.
2. **href\*** - ссылка, куда ведёт картинка.
3. **ariaLabel** - заголовок для ссылки (для экранных дикторов).
4. **alt** - альтернативный текст картинки, если та не прогрузилась.
5. **width\*** - ширина картинки со ссылкой.
   - По умолчанию: 50.
6. **height\*** - высота картинки со ссылкой.
   - По умолчанию: 50.

### Пример

```json
{
  "pageListImagesWithTitleSectionId": "ListImagesWithTitleSection",
  "pageListImagesWithTitleSectionTitle": "OUR SOCIAL MEDIA",
  "ListImagesWithTitleSection": {
    "type": "ListImagesWithTitleSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageListImagesWithTitleSectionId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageListImagesWithTitleSectionTitle"]
      },
      {
        "name": "items",
        "function": "container",
        "args": [
          {
            "name": "itemsValues",
            "function": "identity",
            "args": ["pageListImagesWithTitleSectionItemsValues"]
          },
          {
            "name": "itemsMeta",
            "function": "identity",
            "args": ["pageListImagesWithTitleSectionItemsMeta"]
          }
        ]
      }
    ]
  },
  "pageListImagesWithTitleSectionItemsValues": [
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/5RL9lyeXKvgET118D4soFD/dbe9ec6dfdd0d13ca90ad55b14547376/facebook.svg",
      "href": "https://www.facebook.com/hwdtech",
      "ariaLabel": "facebook",
      "alt": "facebook icon",
      "width": "70",
      "height": "70"
    },
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/2St94oAOxVlAx5tF1Y0hBu/8e015bb044b5b3f8f97059dfcf4df355/twitter.svg",
      "href": "https://twitter.com/hwdtech",
      "ariaLabel": "twitter",
      "alt": "twitter icon",
      "width": "70",
      "height": "70"
    },
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/0cBJe3ZYqTsVnMXh75Fk7/5af989dab15f8ad696bbe8b0d5e962f8/linkedin.svg",
      "href": "https://www.linkedin.com/company/hwdtech-llc",
      "ariaLabel": "linkedin",
      "alt": "linkedin icon",
      "width": "70",
      "height": "70"
    },
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/1wxVF8ME5k8t34n3I2rAiX/d4e28ee65c36661d7d06a3cbf52fc8d5/vk.svg",
      "href": "https://vk.com/hwdtech",
      "ariaLabel": "vk",
      "alt": "vk icon",
      "width": "70",
      "height": "70"
    },
    {
      "src": "https://images.ctfassets.net/13g5no3omm60/5SD7DJZ1BArwU6Vn48Dq4/57180e46b9f830c705cdb94ec7992865/dribble.svg",
      "href": "https://dribbble.com/hwdtech",
      "ariaLabel": "dribble",
      "alt": "dribble icon",
      "width": "70",
      "height": "70"
    }
  ],
  "pageListImagesWithTitleSectionItemsMeta": [
    {
      "name": "src",
      "function": "identity",
      "args": ["src"]
    },
    {
      "name": "alt",
      "function": "identity",
      "args": ["alt"]
    },
    {
      "name": "href",
      "function": "identity",
      "args": ["href"]
    },
    {
      "name": "ariaLabel",
      "function": "identity",
      "args": ["ariaLabel"]
    },
    {
      "name": "width",
      "function": "identity",
      "args": ["width"]
    },
    {
      "name": "height",
      "function": "identity",
      "args": ["height"]
    }
  ]
}
```
