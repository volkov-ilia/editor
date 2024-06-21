## BoxWithAppearedBlock

![BoxWithAppearedBlock preview](https://i.ibb.co/gwnNCyH/bwab.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - чёрный заголовок компонента
   - Значение: строка.
3. **description\*** - серое описание компонента.
   - Значение: строка.
4. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер.
5. **appearFromLeft** - отображение картинки слева.
   - Значение: если картинка должна быть справа, как на превью выше - ничего, иначе - "true"
6. **primaryButton\*** - зелёная кнопка. См. **primaryButton** [Общие вложенные компоненты](../common/commonNestedComponents.md)
7. **appearedImage\*** - отображаемая картинка. См. [Поля appearedImage](#Поля-appearedImage)
   - Значение: json
8. **appearOn** - картинка отображается на экране указанной величины.
   - Значения см. [Размеры экранов](../common/commonNestedComponents.md)
   - по умолчанию: **lg**.
   - Дополнительное значение: **all** - видно на всех экранах.

### Поля appearedImage

1. **animation** - вид анимации.
   - Значения: "left", "right", "up", "in", "bottom".
2. **src** - строковая ссылка.
3. **alt** - альтернативный текст для картинки при ошибке загрузки с ресурса.

### Поля items

Отображается в прямом порядке описания. Поля:

1. **icon\*** - иконка. См. [список иконок](../common/iconsDict.md).
2. **iconColor\*** - цвет иконки. См. [цвета иконок](../common/iconsDict.md).
3. **description\*** - описание информационного блока.
4. **title\*** - заголовок информационного блока.

### пример

```JSON
{
   "pageBoxWithAppearedBlockId": "BoxWithAppearedBlock",
   "pageBoxWithAppearedBlockTitle": "Tik-Tok Coach features",
   "pageBoxWithAppearedBlockDescription": "Additionally, we developed a number of small features and UX design (have a look at examples a little more below!).",
   "BoxWithAppearedBlock": {
      "type": "BoxWithAppearedBlock",
      "rules": [
         {
            "name": "id",
            "function": "identity",
            "args": [
               "pageBoxWithAppearedBlockId"
            ]
         },
         {
            "name": "title",
            "function": "identity",
            "args": [
               "pageBoxWithAppearedBlockTitle"
            ]
         },
         {
            "name": "description",
            "function": "identity",
            "args": [
               "pageBoxWithAppearedBlockDescription"
            ]
         },
         {
            "name": "appearedImage",
            "function": "identity",
            "args": [
               "pageBoxWithAppearedBlockAI"
            ]
         },
         {
            "name": "items",
            "function": "container",
            "args": [
               {
                  "name": "reasonsValues",
                  "function": "identity",
                  "args": [
                     "pageBoxWithAppearedBlockReasonsValues"
                  ]
               },
               {
                  "name": "reasonsMeta",
                  "function": "identity",
                  "args": [
                     "pageBoxWithAppearedBlockReasonsMeta"
                  ]
               }
            ]
         },
         {
            "name": "primaryButton",
            "function": "identity",
            "args": [
               "pageBoxWithAppearedBlockButton"
            ]
         }
      ]
   },
   "pageBoxWithAppearedBlockAI": {
      "src": "https://images.ctfassets.net/13g5no3omm60/1jmbush3YPHMffiKOWpBZG/8a10af75b14fe84a690c0e64c1664037/ttk-panel.jpg",
      "alt": "codefuse screen",
      "animation": "right"
   },
   "pageBoxWithAppearedBlockButton": {
      "text": "Hire us",
      "title": "Go to contact form",
      "action": "scrollToAnchor",
      "actionArgs": {
         "anchor": "contact",
         "offset": 0
      }
   },
   "pageBoxWithAppearedBlockReasonsValues": [
      {
         "icon": "monitor",
         "color": "orange",
         "title": "Offline working",
         "description": "Unlike other trackers, Tik-Tok Coach continues working offline."
      },
      {
         "icon": "settings",
         "color": "green",
         "title": "Universality",
         "description": "Tik-Tok Coach can be easily launched on any computer, even on the old ones!"
      },
      {
         "icon": "office",
         "color": "pink",
         "title": "Cross-platforming",
         "description": "We achieved a significant cut down of the project's worktime by simplifying the app porting on different paltforms (saved up to 90% of the code)."
      },
      {
         "icon": "broken",
         "color": "purple",
         "title": "UX design",
         "description": "You can type in an issue's name, a user name, an e-mail as a solid text — the app will automatically differentiate them."
      }
   ],
   "pageBoxWithAppearedBlockReasonsMeta": [
      {
         "name": "icon",
         "function": "identity",
         "args": [
            "icon"
         ]
      },
      {
         "name": "color",
         "function": "identity",
         "args": [
            "color"
         ]
      },
      {
         "name": "title",
         "function": "identity",
         "args": [
            "title"
         ]
      },
      {
         "name": "description",
         "function": "identity",
         "args": [
            "description"
         ]
      }
   ]
}
```
