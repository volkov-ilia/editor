## AboutHoursSection

![AboutHoursSection preview](https://i.ibb.co/9wBPR1D/awh.png)

### Правила полей

1. **id\*** - строковое поле.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - зелёный заголовок.
3. **worksDaysText\*** - дни работы. Отображаются левее на одной стоке с **worksHoursText\***.
4. **worksHoursText\*** - часы работы. Отображаются левее на одной стоке с **worksDaysText\***.
5. **description1\*** - чёрное описание.
6. **description2\*** - серое описание в конце компонента.

### Пример:

```JSON
{
  "pageAboutHoursSectionId":"AboutHoursSection",
  "pageAboutHoursSectionTitle":"Our working hours:",
  "pageAboutHoursSectionWorksDaysText":"Monday - Friday",
  "pageAboutHoursSectionWorksHoursText":"10:00  -  22:00 (UTC +6)",
  "pageAboutHoursSectionDescription1":"You can call us on business days from 8:00 till 24:00 (UTC +6)",
  "pageAboutHoursSectionDescription2":"We will reply to your e-mail during one business day",
  "AboutHoursSection":{
    "type":"AboutHoursSection",
    "rules":[
      {
        "name": "id",
        "function": "identity",
        "args": [
          "pageAboutHoursSectionId"
        ]
      },
      {
        "name": "title",
        "function": "identity",
        "args": [
          "pageAboutHoursSectionTitle"
        ]
      },
      {
        "name": "worksDaysText",
        "function": "identity",
        "args": [
          "pageAboutHoursSectionWorksDaysText"
        ]
      },
      {
        "name": "worksHoursText",
        "function": "identity",
        "args": [
          "pageAboutHoursSectionWorksHoursText"
        ]
      },
      {
        "name": "description1",
        "function": "identity",
        "args": [
          "pageAboutHoursSectionDescription1"
        ]
      },
      {
        "name": "description2",
        "function": "identity",
        "args": [
          "pageAboutHoursSectionDescription2"
        ]
      }
    ]
  }
}
```
