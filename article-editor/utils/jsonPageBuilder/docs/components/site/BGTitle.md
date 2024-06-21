## BGTitle

![bgtitle preview](https://i.ibb.co/5vBS610/image57.png)

### Правила полей

1. **id\***- уникальное поле. Используется в качестве якоря для проктуртки.
   1. Значения: уникальная для всей страницы строка.
2. **background\*** - картинка фона. 2. Значение: строка, содержащая ссылку на картинку.
3. **label\*** - выделенный текст над заголовком. 3. Значение: 1. поля для текста: 1. **primaryText** - зелёный текст. 2. **usualText** - обычный текст. 2. поля для “хлебных крошек” см. [Пример](#Пример) и [linkMeta](../common/commonNestedComponents.md)
4. **title\*** - заголовок первого уровня для всей страницы, он же должен быть в мета. 4. Значение: строка, не длиннее 63 символов.
5. **description\*** - описание страницы. 5. Значения: строка.
6. **titleFirstLineCharNumber** - количество символов в первой строке заголовка без учёта последнего пробела. 6. Значение: строка-число от 0 до 19
7. **titleSecondLineCharNumber** - количество символов во второй строке заголовка без учёта последнего пробела. 7. Значение: строка-число от 0 до 21
8. **primaryButton** - зелёная кнопка. См. раздел Вложенные компоненты.
9. **arrowButton** - кнопка с иконкой. См. раздел Вложенные компоненты.
10. **iconButtonArrow** - название иконки. 8. Значения: по дефолту - стрелочка, иначе - значения из словаря, см. Словарь Иконок.

### Пример:

```JSON
{
  "pageTitle": "React Development Service",
  "pageDescription": "Since 2016 React has been one of the key competencies in our company. 49% of all our projects utilize React.",
  "idBGTitle": "mainTitle",
  "background": "https://images.ctfassets.net/13g5no3omm60/3ZWOHYFW1Zlb2FekQO5Xs3/7672e8ddf0d01336a9b437eb8f5d32cd/react-bg.jpg",
  "titleFirstLineCharNumber": "18",
  "BGTitle": {
    "type": "BGTitle",
    "rules": [
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageTitle"
        ]
      },
      {
        "name": "description",
        "function": "identity",
        "args": [
          "pageDescription"
        ]
      },
      {
        "name": "background",
        "function": "identity",
        "args": [
          "background"
        ]
      },
      {
        "name": "titleFirstLineCharNumber",
        "function": "identity",
        "args": [
          "titleFirstLineCharNumber"
        ]
      },
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idBGTitle"
        ]
      },
      {
        "name": "label",
        "function": "identity",
        "args": [
          "pageBGTitleLabel"
        ]
      },
      {
        "name": "primaryButton",
        "function": "identity",
        "args": [
          "pageBGTitlePrimaryButton"
        ]
      },
      {
        "name": "arrowButton",
        "function": "identity",
        "args": [
          "pageBGTitleArrowButton"
        ]
      }
    ]
  },
  "pageBGTitleLabel":{
    "primaryText":"HWdTech",
    "usualText":"Services",
    "primaryLinkMeta":{
      "href": "/",
      "linkTitle": "Go to HWdTech"
    },
    "usualLinkMeta":{
      "href": "/services",
      "linkTitle": "Go to our services"
    }
  },
  "pageBGTitlePrimaryButton": {
    "text": "Get a Free Consultation",
    "title": "Go to contact form",
    "action": "scrollToAnchor",
    "actionArgs": {
      "anchor": "contact",
      "offset": 0
    }
  },
  "pageBGTitleArrowButton":{
    "text":"See our portfolio",
    "linkMeta":{
      "href":"/portfolio",
      "linkTitle":"Go to portfolio"
    }
  }
}
```
