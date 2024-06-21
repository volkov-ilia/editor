## Footer

![Footer preview](https://i.ibb.co/2W4r43J/footer.png)

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **footerBG\*** - картинка под текстом.
3. **href\*** - ссылка на лого.
4. **logo\*** - картинка лого.
5. **phone\*** - телефон под лого.
6. **items\*** - текст на странице. См. ниже.

### Поля items

1. **title** - описание ссылки.
2. **text** - отображаемый текст.
3. **href** - ссылка.

### пример

```JSON
{
  "pageFooterHref": "/",
  "pageFooterFooterBG": "https://images.ctfassets.net/mue5t0ky2rh8/4xakolbyIhPbobPe7PcZ8N/d12f184219dc33fad8191cbe20520297/footer-bg.png?h=250",
  "pageFooterLogo": "https://images.ctfassets.net/mue5t0ky2rh8/4HNJAwlG8zlzJCGyR1IS5q/805e8fbb1d43f69f7dcf582e10214414/logo.png",
  "pageFooterPhone": "8 (800) 550 0 989",
  "Footer": {
    "type": "Footer",
    "rules": [
      {
        "name": "href",
        "function": "identity",
        "args": [
          "pageFooterHref"
        ]
      },
      {
        "name": "footerBG",
        "function": "identity",
        "args": [
          "pageFooterFooterBG"
        ]
      },
      {
        "name": "logo",
        "function": "identity",
        "args": [
          "pageFooterLogo"
        ]
      },
      {
        "name": "phone",
        "function": "identity",
        "args": [
          "pageFooterPhone"
        ]
      },
      {
        "name": "items",
        "function": "container",
        "args": [
          {
            "name": "footerItemsValues",
            "function": "identity",
            "args": [
              "pageFooterItemsValues"
            ]
          },
          {
            "name": "footerItemsMeta",
            "function": "identity",
            "args": [
              "pageFooterItemsMeta"
            ]
          }
        ]
      }
    ]
  },
  "pageFooterItemsValues": [
    {
      "heading": "Наши проекты",
      "items": [
        {
          "href": "/portfolio/moneywiz",
          "title": "Открыть страницу MoneyWiz",
          "text": "MoneyWiz Windows"
        },
        {
          "href": "/portfolio/kattis",
          "title": "Открыть страницу Kattis",
          "text": "Kattis"
        },
        {
          "href": "/portfolio/clifford",
          "title": "Открыть страницу Clifford Wallace",
          "text": "Clifford Wallace"
        },
        {
          "href": "/portfolio/mapic",
          "title": "Открыть страницу Mapic",
          "text": "Mapic"
        }
      ]
    },
    {
      "heading": "Блог",
      "items": [
        {
          "href": "/cases/callmeai",
          "title": "Открыть статью ИИ модерирует контент",
          "text": "ИИ модерирует контент"
        },
        {
          "href": "/cases/designer",
          "title": "Открыть статью Автоматизация дизайна",
          "text": "Автоматизация дизайна"
        },
        {
          "href": "/blog/complexity",
          "title": "Открыть статью Проблемы разработки",
          "text": "Проблемы разработки"
        }
      ]
    },
    {
      "heading": "О нас",
      "items": [
        {
          "href": "/policy",
          "title": "Открыть страницу Политика",
          "text": "Политика"
        },
        {
          "href": "/contacts",
          "title": "Открыть страницу контакты",
          "text": "Контакты"
        }
      ]
    }
  ],
  "pageFooterItemsMeta": [
    {
      "name": "heading",
      "function": "identity",
      "args": [
        "heading"
      ]
    },
    {
      "name": "items",
      "function": "identity",
      "args": [
        "items"
      ]
    }
  ]
}
```
