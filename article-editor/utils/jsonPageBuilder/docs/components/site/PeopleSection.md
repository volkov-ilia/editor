## PeopleSection

![PeopleSection preview](https://i.ibb.co/gj8kPTX/image24.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка.
3. **description\*** - описание компонента.
   - Значение: строка.
4. **text\*** - список значений строк спика под описанием.
   - Значение: список строк.
5. **images\*** - выплывающие картинки.
   - Значение: контейнер картинок.
6. **primaryButton** - зелёная кнопка. См. **primaryButton** [Общие вложенные компоненты](../common/commonNestedComponents.md)

### Описание images

Первая в списке картинка - самая левая сверху. Вторая - самая левая снизу. Третья - самая правая. Поля:

1. **key** - уникальное среди списка картинок значение.
2. **animation** - вид анимации. Для первой - left, для второй - up, для третье - bottom. Доступные значения: left,
   right, up, in, bottom.
3. **src** - строковая ссылка.
4. **location** - расположение из значений left/right.
5. **alt** - альтернативный текст для картинки при ошибке загрузки с ресурса.

### пример

```JSON
{
  "idPeopleSection": "PeopleSection",
  "pagePeopleSectionTitle": "Transparent Terms",
  "pagePeopleSectionDesc": "We are offering a Full-Service Development Team, which is a fixed-cost variable-scope month-to-month product development engagement.",
  "pagePeopleSectionText": [
    "Customer would have an option to terminate development at any time with no penalty.",
    "Project invoicing is monthly with a payment due on the 1st of each month. No prepaids.",
    "Fixed Cost, Variable Scope — Minimized Risk.",
    "Unpaid balance for the accrued hours is collected for the services provided in the previous month."
  ],
  "PeopleSection": {
    "type": "PeopleSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idPeopleSection"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pagePeopleSectionTitle"
        ]
      },
      {
        "name": "description",
        "function": "identity",
        "args": [
          "pagePeopleSectionDesc"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pagePeopleSectionText"
        ]
      },
      {
        "name": "images",
        "function": "container",
        "args": [
          {
            "name": "labelValues",
            "function": "identity",
            "args": [
              "pagePeopleSectionImagesValues"
            ]
          },
          {
            "name": "labelMeta",
            "function": "identity",
            "args": [
              "pagePeopleSectionImagesMeta"
            ]
          }
        ]
      }
    ]
  },
  "pagePeopleSectionImagesValues": [
    {
      "key": "look at the notebook",
      "animation": "left",
      "src": "https://images.ctfassets.net/13g5no3omm60/4ZeLpkesqZX8vtwVEGVLPA/f9cfb2dbb6c09cbcf729718a5938eb46/bottom.jpg",
      "location": "left",
      "alt": "look at the notebook"
    },
    {
      "key": "team and a plant",
      "animation": "up",
      "src": "https://images.ctfassets.net/13g5no3omm60/2SboecBxVedEEWH4EfLJOq/f6c150580b5ee81ea43027231ec292ab/teamAndPlant.jpg",
      "location": "left",
      "alt": "team and a plant"
    },
    {
      "key": "smiling Maxim",
      "animation": "bottom",
      "src": "https://images.ctfassets.net/13g5no3omm60/4OsxaNmDWxz2EmlwiJBw4i/292a692b5d89b58bba5381d7c583751c/right.jpg",
      "location": "right",
      "alt": "smiling Maxim"
    }
  ],
  "pagePeopleSectionImagesMeta": [
    {
      "name": "key",
      "function": "identity",
      "args": [
        "key"
      ]
    },
    {
      "name": "animation",
      "function": "identity",
      "args": [
        "animation"
      ]
    },
    {
      "name": "src",
      "function": "identity",
      "args": [
        "src"
      ]
    },
    {
      "name": "location",
      "function": "identity",
      "args": [
        "location"
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
