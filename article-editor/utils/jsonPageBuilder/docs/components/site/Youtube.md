## Youtube

![LetTheNumbersSpeak preview](https://i.ibb.co/rc4hDyN/youtube.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для
     всей страницы строка.
2. **title\*** - заголовок компонента
   - Значение: строка.
3. **description\*** - текст в компоненте.
   - Значение: строка.
4. **previewImage\*** - строковая ссылка на превью картинку для AMP-страницы.
5. **altImg\*** - описание картинки, еслиона не прогрузилась.
6. **videoUrl\*** - строковая ссылка на видео.
7. **videoTitle\*** - заголовок видео.
8. **videoId\*** - id видео для AMP-страницы.

### Пример

```json
{
  "idYoutube": "idYoutube",
  "pageYoutubeTitle": "HOW WE WORK",
  "pageYoutubeDesc": "Welcome to our office",
  "pageYoutubPreviewImage": "https://images.ctfassets.net/13g5no3omm60/4vYeusyxPkEqVSwc8WTZQP/496e75b5eabe51f7bb7ec0b40c31e22f/home-youtube-preview.jpg",
  "pageYoutubVideoUrl": "https://www.youtube.com/embed/dX2fKjXAF74",
  "pageYoutubTitle": "HWDTech",
  "pageYoutubeVideoId": "dX2fKjXAF74",
  "pageYoutubeAltImg": "office tour video preview",
  "Youtube": {
    "type": "Youtube",
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": ["idYoutube"]
      },
      {
        "name": "title",
        "function": "identity",
        "args": ["pageYoutubeTitle"]
      },
      {
        "name": "description",
        "function": "identity",
        "args": ["pageYoutubeDesc"]
      },
      {
        "name": "previewImage",
        "function": "identity",
        "args": ["pageYoutubPreviewImage"]
      },
      {
        "name": "videoUrl",
        "function": "identity",
        "args": ["pageYoutubVideoUrl"]
      },
      {
        "name": "videoTitle",
        "function": "identity",
        "args": ["pageYoutubTitle"]
      },
      {
        "name": "videoId",
        "function": "identity",
        "args": ["pageYoutubeVideoId"]
      },
      {
        "name": "altImg",
        "function": "identity",
        "args": ["pageYoutubeAltImg"]
      }
    ]
  }
}
```
