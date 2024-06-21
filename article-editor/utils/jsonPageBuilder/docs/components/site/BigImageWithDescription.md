## BigImageWithDescription

![BigImageWithDescription preview](https://i.ibb.co/pnTzJ5y/biwd.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **title\*** - чёрный заголовок компонента
   - Значение: строка.
3. **description\*** - серое описание компонента.
   - Значение: строка.
4. **image\*** - данные картинки. См. [Общие данные изображения](../common/commonNestedComponents.md).
   - Значение: контейнер.
5. **imageOnLeft** - отображение картинки слева.
   - Значение: если картинка должна быть слева - "true", иначе - ничего.
6. **primaryButton\*** - зелёная кнопка. См. **primaryButton** [Общие вложенные компоненты](../others/commonNestedComponents.md
7. **firstTitle** - картинка отображается на экране указанной величины.
8. **firstTitle** - зелёный заголовок.
9. **linkMeta** - если компонент должен представлять из себя ссылку. См. [linkMeta](../common/commonNestedComponents.md).
10. **tags** - список тегов.
11. **publicationDate** - дата публикации.

### Поля appearedImage

1. **animation** - вид анимации.
   - Значения: "left", "right", "up", "in", "bottom".
2. **src** - строковая ссылка.
3. **alt** - альтернативный текст для картинки при ошибке загрузки с ресурса.

### Поля items

Отображается в прямом порядке описания. Поля:

1. **icon\*** - иконка. См. [список иконок](../common/iconsDict.md).
2. **iconColor\*** - цвет иконки. См. [цвета иконок](../common/iconsDict.md).
3. **description\*** - описание информационного блока.
4. **title\*** - заголовок информационного блока.

### пример

```JSON
{
   "pageBigImageWithDescriptionId":"BigImageWithDescription",
   "pageBigImageWithDescriptionImage":{
      "src":"https://images.ctfassets.net/13g5no3omm60/7xU0rfAaZenLGWKVs5bzYi/544177599759b0fabde533e2ecedd201/money-wiz.jpg",
      "alt":"moneyWiz application panel for Windows"
   },
   "pageBigImageWithDescriptionTitle":"We released MoneyWiz for Windows",
   "pageBigImageWithDescriptionDesc":"We have fully automatized the process. Our client has to run the command, specify a number of the version — and this new version resides on a server, so the users get updates automatically. For deployment organizing we used ClickOnce.",
   "pageBigImageWithDescriptionFirstTitle":"first",
   "pageBigImageWithDescriptionPrimaryButton":{
      "text": "Get yourself a project like this",
      "title": "Go to contact form",
      "action": "scrollToAnchor",
      "actionArgs": {
         "anchor": "contact",
         "offset": 0
      }
   },
   "pageBigImageWithDescriptionLinkMeta":{
      "href": "/",
      "linkTitle": "Go to HWdTech"
   },
   "BigImageWithDescription": {
      "type": "BigImageWithDescription",
      "rules": [
         {
            "name": "id",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionId"
            ]
         },
         {
            "name": "image",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionImage"
            ]
         },
         {
            "name": "title",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionTitle"
            ]
         },
         {
            "name": "description",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionDesc"
            ]
         },
         {
            "name": "firstTitle",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionFirstTitle"
            ]
         },
         {
            "name": "primaryButton",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionPrimaryButton"
            ]
         },
         {
            "name": "linkMeta",
            "function": "identity",
            "args": [
               "pageBigImageWithDescriptionLinkMeta"
            ]
         }
      ]
   }
}
```
