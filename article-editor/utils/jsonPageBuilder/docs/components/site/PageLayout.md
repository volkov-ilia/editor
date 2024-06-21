## PageLayout

### Правила полей

1. **menu\*** - поля меню. См. Поля menu
   - Значения: json
2. **footer\*** - заголовок компонента. См. Поля footer
   - Значение: json

### Поля menu

Минимальное количество карточек - 1. Максимальное количество карточек - 5.

1. **buttonTitle\*** - отображаемый текст при наведении на кнопку, открывающую меню (бургер)
2. **logoLinkTitle\*** - отображаемый текст при наведении на лого хедера.
3. **socialBottomText\*** - текст, отображаемый под меню навигации.
   - **companyWithYear\*** - название компании и последний текст - год создания.
   - **rightsText\*** - текст "все права сохранены"
4. **items\*** - список отображаемых страниц в меню навигации.
   - Значение: список json
     поля
   - **text\*** - отображаемый в меню навигации текст.
   - **url\*** - ссылка навигации.
   - **linkTitle\*** - отображаемый при наведении на ссылку текст.
5. **socialData\*** - список отображаемых ссылок на социальные сети.
   - Значение: список json
     поля
   - **img\*** - текстовая ссылка на картинку-превью соцсети.
   - **href\*** - ссылка.
   - **ariaLabel\*** - ariaLabel.
   - **alt\*** - альтернативный текст при загрузке картинки.
   - **title\*** - описание ссылки, отображаемое при наведении.

### Поля footer

По структуре отражает структуру страницы.

1. **components\*** - массив отображаемых в конце страницы компонентов.
   - Значение: список строковых названий компонентов.

Остальные поля определяются компонентами, указанными в списке "components". Список доступных компонентов см. [на главной](../../README.md)

#### ВАЖНО

Правила компонентов обязательно необходимо указать. Значения этих правил - будут восприниматься как дефолтные, на странице можно указать определённое для неё значение, которое заменит дефолтное.
Например, имеется такой footer:

```json
{
  "components": ["Component1"],
  "pageComponent1Text": "Some text",
  "Component1": {
    "type": "Component1",
    "rules": [
      {
        "name": "text",
        "function": "identity",
        "args": ["pageComponent1Text"]
      }
    ]
  }
}
```

В **Component1** поле **rules** с его значениями должно быть описано здесь же, как на примере выше. Аргумент **pageComponent1Text** правила **text** имеет значение "Some text", которое может быть переопределено в структуре страницы.

### пример

```JSON
{
  "menu": {
    "buttonTitle": "Show navigation menu",
    "logoLinkTitle": "Go to home",
    "socialBottomText": {
      "companyWithYear": "LLC Hello World! Technologies 2011",
      "rightsText": "© All Rights Reserved."
    },
    "items": [
      {
        "text": "Home",
        "url": "/",
        "linkTitle": "Open home page"
      },
      {
        "text": "Services",
        "url": "/services",
        "linkTitle": "Open services page"
      },
      {
        "text": "Portfolio",
        "url": "/portfolio",
        "linkTitle": "Open portfolio page"
      },
      {
        "text": "Blog",
        "url": "/blog",
        "linkTitle": "Open blog page"
      },
      {
        "text": "Contacts",
        "url": "/contacts",
        "linkTitle": "Open contacts page"
      },
      {
        "text": "Policy",
        "url": "/policy",
        "linkTitle": "Open policy page"
      }
    ],
    "socialData": [
      {
        "img": "https://images.ctfassets.net/mue5t0ky2rh8/6Kr7OqhS9BG0LEK8Hp6cKA/7f13957c7deee47a39caf2196c31c331/facebook.svg",
        "href": "https://www.facebook.com/hwdtech",
        "ariaLabel": "facebook",
        "alt": "facebook icon",
        "title": "Open company page on facebook"
      },
      {
        "img": "https://images.ctfassets.net/mue5t0ky2rh8/1wcef7hpaCw4XY28tDLczh/1de14e00bdaee1821122295c228e492d/twitter.svg",
        "href": "https://twitter.com/hwdtech",
        "ariaLabel": "twitter",
        "alt": "twitter icon",
        "title": "Open company page on twitter"
      },
      {
        "img": "https://images.ctfassets.net/mue5t0ky2rh8/25NlDCmqE3slF9tGEeRnli/36054a8c3eacbddb7b03289880812c25/vk.svg",
        "href": "https://vk.com/hwdtech",
        "ariaLabel": "vk",
        "alt": "vk icon",
        "title": "Open company page on vk"
      },
      {
        "img": "https://images.ctfassets.net/mue5t0ky2rh8/3ZY4hHvabfZJiCAoFr9JEz/14d5b305193450a73eaa0deee9c7c534/dribble.svg",
        "href": "https://dribbble.com/hwdtech",
        "ariaLabel": "dribble",
        "alt": "dribble icon",
        "title": "Open company page on dribble"
      },
      {
        "img": "https://images.ctfassets.net/mue5t0ky2rh8/1Uk6oCreg6XzNzd7CpAYvP/4b6a3db01e3eabaa0decdfa00e00d536/linkedin.svg",
        "href": "https://www.linkedin.com/company/hwdtech-llc",
        "ariaLabel": "linkedin",
        "alt": "linkedin icon",
        "title": "Open company page on linkedin"
      }
    ]
  },
  "footer": {
    "components": [
      "ContactForm",
      "Footer"
    ],
    "pageFooterHref": "/",
    "pageFooterFooterBG": "https://images.ctfassets.net/mue5t0ky2rh8/4xakolbyIhPbobPe7PcZ8N/d12f184219dc33fad8191cbe20520297/footer-bg.png",
    "pageFooterLogo": "https://images.ctfassets.net/mue5t0ky2rh8/4HNJAwlG8zlzJCGyR1IS5q/805e8fbb1d43f69f7dcf582e10214414/logo.png",
    "pageFooterPhone": "+1 888 657 0 767",
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
        "heading": "Our projects",
        "items": [
          {
            "href": "/portfolio/moneywiz",
            "title": "Go to MoneyWiz page",
            "text": "MoneyWiz Windows"
          },
          {
            "href": "/portfolio/kattis",
            "title": "Go to Kattis page",
            "text": "Kattis"
          },
          {
            "href": "/portfolio/clifford",
            "title": "Go to Clifford Wallace page",
            "text": "Clifford Wallace"
          },
          {
            "href": "/portfolio/mapic",
            "title": "Go to Mapic page",
            "text": "Mapic"
          }
        ]
      },
      {
        "heading": "Blog",
        "items": [
          {
            "href": "/cases/callmeai",
            "title": "Go to AI moderating content page",
            "text": "AI moderating content"
          },
          {
            "href": "/cases/designer",
            "title": "Go to Automation of the design page",
            "text": "Automation of the design"
          },
          {
            "href": "/blog/complexity",
            "title": "Go to Problems of development page",
            "text": "Problems of development"
          }
        ]
      },
      {
        "heading": "About us",
        "items": [
          {
            "href": "/policy",
            "title": "Go to policy page",
            "text": "Policy"
          },
          {
            "href": "/contacts",
            "title": "Go to contacts page",
            "text": "Contacts"
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
    ],
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
      "title": "ASK QUESTION",
      "okMes": "Form was successfully submitted",
      "locale": "eng",
      "descOpen": "Thank you for sending!",
      "descNotOpen": "We will respond during a day",
      "emailLabel": "Your email",
      "emailPlaceholder": "Email address",
      "nameLabel": "Your name",
      "namePlaceholder": "John",
      "phoneLabel": "Your phone",
      "phonePlaceholder": "+1 800 000 00 00",
      "questionLabel": "Your question",
      "questionPlaceholder": "Describe your question",
      "policyText": "By pressing the button you agree to your personal data processing and accept our ",
      "policyLinkText": "GDPR-compliant Privacy Policy",
      "policyLinkTitle": "Go to policy page",
      "formRequired": "required field",
      "buttonText": "get quote",
      "nameMismatch": "Please enter your first and last name separated by space",
      "role": "client"
    }
  }
}
```
