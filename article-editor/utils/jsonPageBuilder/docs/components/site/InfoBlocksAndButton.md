## InfoBlocksAndButton

![InfoBlocksAndButton preview](https://i.ibb.co/YpYvKN7/Screenshot-from-2021-04-09-11-40-37.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - чёрный заголовок компонента
   - Значение: строка.
3. **text\*** - серый текст компонента.
   - Значение: строка.
4. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер карточек.
5. **firstTitle\*** - зелёный заголовок компонента
   - Значение: строка.
6. **primaryButton\*** - зелёная кнопка. См. **primaryButton** [Общие вложенные компоненты](../common/commonNestedComponents.md)

### Поля items

Отображается в прямом порядке описания. Поля:

1. **icon\*** - иконка. См. [список иконок](../common/iconsDict.md).
2. **iconColor\*** - цвет иконки. См. [цвета иконок](../common/iconsDict.md).
3. **description\*** - описание информационного блока.
4. **title\*** - заголовок информационного блока.

### пример

```JSON
{
   "pageInfoBlocksAndButtonId":"InfoBlocksAndButton",
   "pageInfoBlocksAndButtonFirstTitle":"Technological Solutions",
   "pageInfoBlocksAndButtonTitle":"How can we be useful",
   "pageInfoBlocksAndButtonText":"Deep specialization in React allows us to solve a wide range of tasks for interactive and dynamic single page applications (SPA) and, well-indexed in Google, web applications.",
   "InfoBlocksAndButton":{
      "type":"InfoBlocksAndButton",
      "rules":[
         {
            "name": "id",
            "function": "identity",
            "args": [
               "pageInfoBlocksAndButtonId"
            ]
         },
         {
            "name": "firstTitle",
            "function": "identity",
            "args": [
               "pageInfoBlocksAndButtonFirstTitle"
            ]
         },
         {
            "name": "title",
            "function": "identity",
            "args": [
               "pageInfoBlocksAndButtonTitle"
            ]
         },
         {
            "name": "text",
            "function": "identity",
            "args": [
               "pageInfoBlocksAndButtonText"
            ]
         },
         {
            "name": "primaryButton",
            "function": "identity",
            "args": [
               "pageInfoBlocksAndButtonPrimaryButton"
            ]
         },
         {
            "name": "items",
            "function": "container",
            "args": [
               {
                  "name": "iconsValues",
                  "function": "identity",
                  "args": [
                     "pageInfoBlocksAndButtonItemsValues"
                  ]
               },
               {
                  "name": "iconsMeta",
                  "function": "identity",
                  "args": [
                     "pageInfoBlocksAndButtonItemsMeta"
                  ]
               }
            ]
         }
      ]
   },
   "pageInfoBlocksAndButtonPrimaryButton":{
      "text": "Hire Us",
      "title": "Go to contact form",
      "action": "scrollToAnchor",
      "actionArgs": {
         "anchor": "contact",
         "offset": 0
      }
   },
   "pageInfoBlocksAndButtonItemsValues":[
      {
         "icon": "atom",
         "iconColor": "lightGreen",
         "description":
         "If you need your React website to be indexed in Google, then we will develop or configure server-side rendering (SSR), fix HTML markup, correctly setup SEO tags, or implement an AMP version of your web application.",
         "title": "SEO & Google Optimization"
      },
      {
         "icon": "stopwatch1",
         "iconColor": "lightBlue",
         "description":
         "If your current React website opens slowly, then we can improve the speed of loading webpages by optimizing the page structure, reducing the amount of javascript code, integrating with a content delivery network (cdn).",
         "title": "Performance optimization"
      },
      {
         "icon": "monitormobile",
         "iconColor": "lightPurple",
         "description":
         "A modern web application should display equally well on many different devices, browsers and different internet speeds. We will help you design and develop a responsive, single page application (SPA), progressive web applications (PWA), or AMP web applications that best suit your needs.",
         "title": "Any Devices & Internet Connection"
      },
      {
         "icon": "creative",
         "iconColor": "lightPink",
         "description":
         "We have great experience in migrating legacy applications to React and in upgrading old versions of React applications to new one. Ask us and we'll consult you on the advantages and disadvantages of porting your application to React. It’s absolutely free.",
         "title": "Migration & Upgrade"
      }
   ],
   "pageInfoBlocksAndButtonItemsMeta":[
      {
         "name": "icon",
         "function": "identity",
         "args": [
            "icon"
         ]
      },
      {
         "name": "description",
         "function": "identity",
         "args": [
            "description"
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
         "name": "iconColor",
         "function": "identity",
         "args": [
            "iconColor"
         ]
      }
   ]
}
```
