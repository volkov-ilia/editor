## SubscribeSection

![StepByStep preview](https://i.ibb.co/YPKpFhY/subsc.png)

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **policyLink\*** - заголовок страницы.
3. **text\*** - текст на странице. См. ниже.

### Поля text

1. **title** - заголовок,
2. **okMes** - сообщение после успешной отправки,
3. **descOpen** - чёрный заголовок после отправки сообщения,
4. **descNotOpen** - чёрный заголовок до отправки,
5. **emailLabel** - подпись 1 поля,
6. **emailPlaceholder** - серый текст 1 поля,
7. **nameLabel** - подпись 2 поля,
8. **namePlaceholder** - серый текст 2 поля,
9. **policyText** - текст до ссылки на политику
10. **policyLinkText** - текст ссылки
11. **policyLinkTitle** - описание ссылки
12. **formRequired** - обозначение полей со \*
13. **buttonText** - текст кнопки

### пример

```JSON
{
  "SubscribeSection": {
    "type": "SubscribeSection",
    "rules": [
      {
        "args": [
          "pageSubscribeSectionId"
        ],
        "name": "id",
        "function": "identity"
      },
      {
        "args": [
          "pageSubscribeSectionPolicyLink"
        ],
        "name": "policyLink",
        "function": "identity"
      },
      {
        "args": [
          "pageSubscribeSectionText"
        ],
        "name": "text",
        "function": "identity"
      }
    ]
  },
  "pageSubscribeSectionId": "contact",
  "pageFooterFooterBG": "https://images.ctfassets.net/mue5t0ky2rh8/4xakolbyIhPbobPe7PcZ8N/d12f184219dc33fad8191cbe20520297/footer-bg.png?h=250",
  "pageSubscribeSectionText": {
    "okMes": "Вы успешно подписались!",
    "title": "Подписка",
    "descOpen": "Спасибо за подписку!",
    "nameLabel": "Ваше имя",
    "buttonText": "Подписаться",
    "emailLabel": "Ваш E-mail",
    "policyText": "Гарантируем - никакого спама.\nНажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c ",
    "descNotOpen": "Раз в месяц мы делаем рассылку с анонсом новых кейсов и статей, опубликованных на сайте.",
    "formRequired": "обязательное поле",
    "policyLinkText": "политикой в отношении обработки персональных данных.",
    "namePlaceholder": "Пётр",
    "policyLinkTitle": "Открыть страницу политики обработки персональных данных",
    "emailPlaceholder": "example@example.com"
  },
  "pageSubscribeSectionPolicyLink": "/policy"
}
```
