## ArticleYoutube

![ArticleYoutube preview]()

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **previewImage\*** - см. параметры для картинки.
3. **videoId\*** - id видео для AMP-страницы.
4. **title\*** - строковое описание видео.

### Параметры для картинки

- **src\*** - строковая ссылка на картинку.
- **alt\*** - текстовое описание картинки.
- **width\*** - ширина картинки.
- **height\*** - высота картинки.

## Пример

```json
{
  "components": ["ArticleYoutube"],
  "idArticleYoutube": "idArticleYoutube",
  "pageArticleYoutubeTitle": "HWDTech",
  "pageArticleYoutubeVideoId": "dX2fKjXAF74",
  "ArticleYoutube": {
    "type": "ArticleYoutube",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["idArticleYoutube"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageArticleYoutubeTitle"]
      },
      {
        "name": "videoId",
        "function": "identity",
        "args": ["pageArticleYoutubeVideoId"]
      }
    ]
  }
}
```
