## BadgesGridSection

![BadgesGridSection preview](https://i.ibb.co/L9JGh7m/image69.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка.
3. **description\*** - описание компонента.
   - Значение: строка.
4. **children\*** - список значений строк спика под описанием.
   - Значение: контейнер карточек.

### Описание children карточек

Отображается в прямом порядке описания. Поля:

1. **key\*** - уникальное среди списка картинок значение.
2. **reward\*** - строковая ссылка на картинку с бэйджем.
3. **height\*** - высота картинки бэйджа.
   - Значение: строка с числом.
4. **width\*** - ширина картинки бэйджа.
   - Значение: строка с числом.
5. **alt\*** - альтернативный текст для картинки при ошибке загрузки с ресурса.

### пример

```JSON
{
  "idBadgesGridSection": "BadgesGridSection",
  "pageBadgesGridSectionTitle": "HONORABLE RECOGNITIONS & AWARDS",
  "pageBadgesGridSectionDesc": "Year after year, HWDTech has been recognized as one of the top design and development firms in the world. It’s nice to feel appreciated!",
  "BadgesGridSection": {
    "type": "BadgesGridSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idBadgesGridSection"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageBadgesGridSectionTitle"
        ]
      },
      {
        "name": "description",
        "function": "identity",
        "args": [
          "pageBadgesGridSectionDesc"
        ]
      },
      {
        "name": "children",
        "function": "container",
        "args": [
          {
            "name": "labelValues",
            "function": "identity",
            "args": [
              "pageBadgesGridSectionImagesValues"
            ]
          },
          {
            "name": "labelMeta",
            "function": "identity",
            "args": [
              "pageBadgesGridSectionImagesMeta"
            ]
          }
        ]
      }
    ]
  },
  "pageBadgesGridSectionImagesValues": [
    {
      "key": "top-web-developers-clutch",
      "width": "188",
      "reward": "https://images.ctfassets.net/13g5no3omm60/2KnNP0teHpKDGhwgmwIQHD/d502d68eb922c8989ca06641c2ed987f/top-web-developers-clutch.png",
      "height": "200",
      "alt": "top-web-developers-clutch"
    },
    {
      "key": "top-web-developers-extract",
      "width": "200px",
      "reward": "https://images.ctfassets.net/13g5no3omm60/4kRpUdbO0EnWfyPdCCY23/5360e7c1c5e783142504399b97f5d262/top-web-developers-extract.png",
      "height": "200px",
      "alt": "top-web-developers-extract"
    },
    {
      "key": "top-web-developers-good-firm",
      "width": "212px",
      "reward": "https://images.ctfassets.net/13g5no3omm60/7DOS6AG6GN66mNXH6LeKwh/1f8a0b82f166bb1069dd75067024abfc/top-web-developers-good-firms.png",
      "height": "170px",
      "alt": "top-web-developers-good-firm"
    }
  ],
  "pageBadgesGridSectionImagesMeta": [
    {
      "name": "key",
      "function": "identity",
      "args": [
        "key"
      ]
    },
    {
      "name": "reward",
      "function": "identity",
      "args": [
        "reward"
      ]
    },
    {
      "name": "width",
      "function": "identity",
      "args": [
        "width"
      ]
    },
    {
      "name": "height",
      "function": "identity",
      "args": [
        "height"
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
