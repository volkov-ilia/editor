## ContactForm

![StepByStep preview](https://i.ibb.co/Tb37vq8/cform.png)

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **policyLink\*** - заголовок страницы.
3. **text\*** - текст на странице. См. ниже.

### Поля text

1. **title** - заголовок,
2. **okMes** - сообщение после успешной отправки,
3. **locale** - язык сайта,
4. **descOpen** - чёрный заголовок после отправки сообщения,
5. **descNotOpen** - чёрный заголовок до отправки,
6. **emailLabel** - подпись 1 поля,
7. **emailPlaceholder** - серый текст 1 поля,
8. **nameLabel** - подпись 2 поля,
9. **namePlaceholder** - серый текст 2 поля,
10. **phoneLabel** - подпись 3 поля,
11. **phonePlaceholder** - серый текст 3 поля,
12. **questionLabel** - подпись 4 поля,
13. **questionPlaceholder** - серый текст 4 поля,
14. **policyText** - текст до ссылки на политику
15. **policyLinkText** - текст ссылки
16. **policyLinkTitle** - описание ссылки
17. **formRequired** - обозначение полей со \*
18. **buttonText** - текст кнопки
19. **nameMismatch** - сообщение при несовпадении ожидаемых типов

### пример

```JSON
{
  "ContactForm": {
    "type": "ContactForm",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageContactFormId"
        ]
      },
      {
        "name": "policyLink",
        "function": "identity",
        "args": [
          "pageContactFormPolicyLink"
        ]
      },
      {
        "name": "text",
        "function": "identity",
        "args": [
          "pageContactFormText"
        ]
      }
    ]
  },
  "pageContactFormId": "contact",
  "pageContactFormPolicyLink": "/policy",
  "pageContactFormText": {
    "title": "Спросите нас",
    "okMes": "Форма была успешно отправлена",
    "locale": "rus",
    "descOpen": "Спасибо за обращение!",
    "descNotOpen": "Мы ответим в течение суток",
    "emailLabel": "Ваша почта",
    "emailPlaceholder": "адрес электронной почты",
    "nameLabel": "Ваше имя",
    "namePlaceholder": "Иван",
    "phoneLabel": "Ваш телефон",
    "phonePlaceholder": "+7 999 999 99 99",
    "questionLabel": "Ваш вопрос",
    "questionPlaceholder": "Опишите ваш вопрос",
    "policyText": "Нажимая на эту кнопку, вы соглашаетесь с обработкой ваших персональных данных и принимаете нашу ",
    "policyLinkText": "политику обработки конфиденциальных данных",
    "policyLinkTitle": "Открыть страницу политики обработки конфиденциальных данных",
    "formRequired": "обязательное поле",
    "buttonText": "Спросить!",
    "nameMismatch": "Пожалуйста, введите ваши имя и фамилию, разделённые пробелом"
  }
}
```
