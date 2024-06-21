## ContactsSection

![ContactsSection preview](https://i.ibb.co/tHVCfv0/cs.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title** - зелёный заголовок.
   - Значение: строка.
3. **description** - чёрный заголовок.
   - Значение: строка.
4. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер.

### Поля items

Отображается в прямом порядке описания. Поля:

1. **name\*** - имя.
2. **job\*** - должность.
3. **email** - электронная почта.
4. **skype** - как найти в скайпе.
5. **image\*** - данные картинки, см. [Общие данные изображения](../common/commonNestedComponents.md)

### Пример

```json
{
  "pageContactsSectionId": "ContactsSection",
  "pageContactsSectionTitle": "HAVE A BUSINESS PROPOSITION?",
  "pageContactsSectionDesc": "Contact our CTO or CEO directly!",
  "ContactsSection": {
    "type": "ContactsSection",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["pageContactsSectionId"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageContactsSectionTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pageContactsSectionDesc"]
      },
      {
        "name": "items",
        "function": "container",
        "args": [
          {
            "name": "description",
            "function": "identity",
            "args": ["pageContactsSectionItemsValues"]
          },
          {
            "name": "description",
            "function": "identity",
            "args": ["pageContactsSectionItemsMeta"]
          }
        ]
      }
    ]
  },
  "pageContactsSectionItemsValues": [
    {
      "name": "Eugeniy Tyumentcev",
      "job": "CEO",
      "email": "etyumentcev@hwdtech.com",
      "skype": "etyumentcev",
      "image": {
        "src": "https://images.ctfassets.net/13g5no3omm60/2P4oORttGRJ1QAgeTxbXHZ/46c90c92e3ad28a6a028a89f41c8d25c/eugeniy-tyumentcev-square.jpg",
        "alt": "Eugeniy Tyumentcev photo"
      }
    },
    {
      "name": "Iakov Lilo",
      "job": "CTO",
      "email": "jlilo@hwdtech.com",
      "skype": "lilo_jasha",
      "image": {
        "src": "https://images.ctfassets.net/13g5no3omm60/6p99gmAFZ5vxDlKM1gizro/70b5a56ee6babd1a93800c6d702c8da9/iakov-lilo-square.jpg",
        "alt": "Iakov Lilo photo"
      }
    }
  ],
  "pageContactsSectionItemsMeta": [
    {
      "name": "name",
      "function": "identity",
      "args": ["name"]
    },
    {
      "name": "job",
      "function": "identity",
      "args": ["job"]
    },
    {
      "name": "email",
      "function": "identity",
      "args": ["email"]
    },
    {
      "name": "skype",
      "function": "identity",
      "args": ["skype"]
    },
    {
      "name": "image",
      "function": "identity",
      "args": ["image"]
    }
  ]
}
```
