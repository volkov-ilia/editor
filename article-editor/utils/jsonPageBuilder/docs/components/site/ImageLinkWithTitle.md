## ImageLinkWithTitle

![ImageLinkWithTitle preview](https://i.ibb.co/xfRCfjG/ilwt.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - зелёный заголовок
   - Значение: строка
3. **description\*** - чёрный заголовок
   - Значение: строка
4. **image** - данные картинки.
   - Значение: json с полями. См. [Поля image](#Поля-image)

### Поля image

1. **href\*** - текстовая ссылка картинки
2. **src\*** - текстовая ссылка на картинку
3. **alt\*** - альтернативный текст, отображаемый, если картинка не прогрузилась

### Пример

```json
{
  "pageStepByStepId": "StepByStep",
  "pageStepByStepTitle": "Get MVP",
  "pageStepByStepDesc": "HOW TO START",
  "StepByStep": {
    "type": "StepByStep",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageStepByStepId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageStepByStepTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pageStepByStepDesc"]
      },
      {
        "name": "image",
        "function": "identity",
        "args": ["pageStepByStepImage"]
      },
      {
        "name": "items",
        "function": "container",
        "args": [
          {
            "name": "imagesValues",
            "function": "identity",
            "args": ["pageStepByStepItemsValues"]
          },
          {
            "name": "imagesMeta",
            "function": "identity",
            "args": ["pageStepByStepItemsMeta"]
          }
        ]
      }
    ]
  },
  "pageStepByStepImage": {
    "src": "https://images.ctfassets.net/13g5no3omm60/423ULYwq8T0SkTc4i0yu3u/461c77300de1d13233f4edeb77af7daa/mvp-steps.jpg",
    "alt": "how to start picture"
  },
  "pageStepByStepItemsValues": [
    {
      "text": "Tell us your idea. If you wish, we may sign NDA first.",
      "header": "Tell us your idea"
    },
    {
      "text": "Using Lean Canvas, let's make sure that your idea is MVP ready. It's free and it may save your money.",
      "header": "Make sure that your idea is MVP ready"
    },
    {
      "text": "We fix the cost and the timeframe, agree on software development process and other details with you.",
      "header": "Discussing conditions"
    },
    {
      "text": "Start MVP process for your startup.",
      "header": "Start!"
    }
  ],
  "pageStepByStepItemsMeta": [
    {
      "name": "text",
      "function": "identity",
      "args": ["text"]
    },
    {
      "name": "header",
      "function": "identity",
      "args": ["header"]
    }
  ]
}
```
