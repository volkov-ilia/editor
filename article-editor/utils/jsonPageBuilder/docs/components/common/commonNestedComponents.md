# Вложенные компоненты

## Размеры экранов

1. **xxs** - от 375px в ширину
2. **xs** - от 425px в ширину
3. **sm** - от 640px в ширину
4. **md** - от 768px в ширину
5. **lg** - от 1024px в ширину
6. **xl** - от 1280px в ширину

## Общие данные изображения

1. **src\*** - полная ссылка на картинку.
2. **alt\*** - альтернативный текст картинки, если не смогла прогрузиться.
3. **width** - ширина картинки
4. **height** - высота картинки

## Текст

![Text preview](https://i.ibb.co/sv4JjY0/text.png)

### Правила полей

1. **text\*** - список текстовых значений. Обычный текст представляет из себя просто строку. Текст с ссылкой - вложенный
   JSON. См. ниже **Поля для ссылок**
2. **header** - значение заголовка, если применяется внутри компонента-родителя текста.
3. **key** - уникальный в спике текста ключ. Обязателен, если создаётся список с текстом. См. пример [компонент QuoteAboveImage](../site/QuoteAboveImage.md)

#### Поля для ссылок

1. **type\*** - тип текста. См. типы текста
2. **text\*** - текст ссылки
3. **href\*** - сама ссылка
4. **linkTitle\*** - описание ссылки

#### типы текста

Значение по умолчанию: текст.

1. **"link"** - текст с ссылкой;
2. **"points"** - список, можно задать круглые иконки;
3. **"styledText"** - стилизованный текст.
   - Доступные стили: "bold","italic","underline","lineThrough","overline" ;
4. **"text"** - текст с ссылкой и заголовком. Если выбран этот тип, то можно указывать не JSON, а просто строку.
5. **"icon"** - иконка в тексте, указывается название иконки из [Словаря Иконок](iconsDict.md);
6. **orderedList** - нумерованный список.
7. **unorderedList** - маркированный список.

### Пример

```json
{
  "pageQuoteAboveImageDescription": {
    "text": [
      {
        "type": "SecondHeader",
        "text": "My SecondHeader"
      },
      {
        "type": "ThirdHeader",
        "text": "My ThirdHeader"
      },
      {
        "text": "startup",
        "color": "lightGreen",
        "size": "xs"
      },
      {
        "type": "orderedList",
        "text": ["number one", "number two"]
      },
      {
        "type": "unorderedList",
        "text": ["number one", "number two"]
      },
      {
        "type": "icon",
        "text": "startup",
        "color": "lightGreen"
      },
      {
        "type": "icon",
        "text": "startup",
        "size": "4xl"
      },
      {
        "type": "styledText",
        "styles": ["bold", "underline", "italic"],
        "text": "Just because "
      },
      {
        "type": "styledText",
        "styles": ["bold", "overline", "italic"],
        "text": "Just because "
      },
      {
        "type": "styledText",
        "styles": ["bold", "lineThrough", "italic"],
        "text": "Just because "
      },
      {
        "type": "link",
        "href": "https://github.com/jacob-l/WopiHost",
        "linkTitle": "Go to WOPI host repo on github",
        "text": "source code"
      },
      " of our first implementation and ",
      {
        "type": "points",
        "items": [
          {
            "type": "with links",
            "text": [
              "open ",
              {
                "type": "link",
                "href": "https://github.com/jacob-l/WopiHost",
                "linkTitle": "Go to WOPI host repo on github",
                "text": "source code"
              },
              " see ",
              {
                "type": "link",
                "href": "https://habr.com/en/company/tiktokcoach/blog/223179/",
                "linkTitle": "Go to the article on habr",
                "text": "the article"
              },
              " about it."
            ]
          },
          {
            "type": "text",
            "text": "Just some text"
          }
        ]
      },
      {
        "type": "text",
        "text": "Hello world! Technologies"
      }
    ]
  }
}
```

## primaryButton

![primaryButton preview](https://i.ibb.co/5Y8ZNmn/image20.png)

### Правила полей

1. **text\*** - текст кнопки.
   1. Значение: строка
2. **action** - действие кнопки. Либо linkMeta либо action. См. [Список действий для кнопок](buttonActionsList.md)
3. **disabled** - указатель на отключение кнопки. 2. Значение - ничего => включена. "true" => отключена.
4. **isNotUpperCase** - указатель на верхний регистр для текста. 3. Значение - ничего => верхний регистр. "true" => не модифицировать текст.
5. **linkMeta** - данные для описания ссылки. Либо linkMeta либо action. См. [linkMeta](#linkmeta)

### Пример

```JSON
{
  "component1": {
    "rules": [
      {
        "name": "primaryButton",
        "function": "identity",
        "args": [
          "pageComponent1PrimaryButton"
        ]
      }
    ]
  },
  "pageComponent1PrimaryButton": {
    "text": "Get a Free Consultation",
    "title": "Go to contact form",
    "action": "scrollToAnchor",
    "actionArgs": {
      "anchor": "contact",
      "offset": 0
    }
  }
}
```

## arrowButton

![arrowButton preview](https://i.ibb.co/JkKHzLM/image42.png)

### Правила полей

1. **text\*** - текст кнопки.
   1. Значение: строка
2. **disabled** - указатель на отключение кнопки. 2. Значение - ничего => включена. "true" => отключена.
3. **isNotUpperCase** - указатель на верхний регистр для текста. 3. Значение - ничего => верхний регистр. "true" => не модифицировать текст.
4. **linkMeta** - данные для описания ссылки. Либо linkMeta либо action. См. [linkMeta](#linkmeta)

### Пример

```json
{
  "component1": {
    "rules": [
      {
        "name": "arrowButton",
        "function": "identity",
        "args": ["pageComponent1ArrowButton"]
      }
    ]
  },
  "pageComponent1ArrowButton": {
    "text": "See our portfolio",
    "linkMeta": {
      "href": "/portfolio",
      "linkTitle": "Go to portfolio"
    }
  }
}
```

## linkMeta

### Правила полей

1. **linkTitle\*** - описание ссылки (например, для экранных дикторов)
   1. Значения: строка
2. **href\*** - сама ссылка. 2. Значения: строка

### Пример

```JSON
{
  "component": {
    "rules": [
      {
        "name": "someRule",
        "function": "identity",
        "args": [
          "pageComponent1SomeRule"
        ]
      }
    ]
  },
  "pageComponent1SomeRule": {
    "someFields": "",
    "linkMeta": {
      "href": "/portfolio",
      "linkTitle": "Go to portfolio"
    }
  }
}
```
