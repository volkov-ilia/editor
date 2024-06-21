## Technologies

![Technologies preview](https://i.ibb.co/m4zvK98/technologies.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка
3. **projectName\*** - имя проекта, отображаемое в центре технологий. Не длиннее 7 символов. Отображается на всех экранах, если не задано **smallProjectName**
   - Значение: строка
4. **smallProjectName** - сокращённое имя проекта. Обязательно, если длина **projectName** больше 5 символов. Отображается только на мобильных экранах.
   - Значение: строка
5. **text\*** - серый текст компонента.
   - Значение: строка или текст по формату **Ссылка в тексте** [Общие вложенные компоненты](../common/commonNestedComponents.md)
6. **techOnLeft** - отображение технологий слева.
   - Значение: если фото должно быть слева, как на превью выше - ничего, иначе - "false"
7. **itemsTech\*** - сигнатура, отображаемая вверху слева на картинке. См. **поля signature**
   - Значение: список названий технологий. См. [Словарь технологий](../common/technologiesDict.md)
8. **primaryButton** - зелёная кнопка. См. **primaryButton** [Общие вложенные компоненты](../common/commonNestedComponents.md)

### Пример

```json
{
  "pageTechnologiesId": "Technologies",
  "pageTechnologiesProjectName": "React",
  "pageTechnologiesText": "With the starting of development, code improvement ideas immediately arised.",
  "pageTechnologiesTitle": "Technologies we used",
  "Technologies": {
    "type": "Technologies",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageTechnologiesId"]
      },
      {
        "name": "projectName",
        "function": "identity",
        "args": ["pageTechnologiesProjectName"]
      },
      {
        "name": "text",
        "function": "identity",
        "args": ["pageTechnologiesText"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageTechnologiesTitle"]
      },
      {
        "name": "primaryButton",
        "function": "identity",
        "args": ["pageTechnologiesPrimaryButton"]
      },
      {
        "name": "itemsTech",
        "function": "identity",
        "args": ["pageTechnologiesItemsTech"]
      }
    ]
  },
  "pageTechnologiesPrimaryButton": {
    "text": "Hire Us",
    "title": "Go to contact form",
    "action": "scrollToAnchor",
    "actionArgs": {
      "anchor": "contact",
      "offset": 0
    }
  },
  "pageTechnologiesItemsTech": ["materializeCss", "ts", "node", "bootstrap", "redux", "dotNetCore", "cli", "materialUi"]
}
```
