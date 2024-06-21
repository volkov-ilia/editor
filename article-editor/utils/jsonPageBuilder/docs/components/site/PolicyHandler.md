## Policy

![Policy preview](https://i.ibb.co/w75WGhQ/policy.png)

### Правила полей

1. **id\*** - обязательное уникальное поле. Используется в качестве якоря для проктуртки.
   - Значения: уникальная для всей страницы строка.
2. **items\*** - список информационных блоков. См. [Поля items](#Поля-items).
   - Значение: контейнер.

### Поля items

1. **title** - заголовок для списка абзацев.
2. **paragraphs** - список абзацев, можно вставлять ссылки. См. [Текст](../common/commonNestedComponents.md)

### пример

```JSON
{
"pagePolicyId":"Policy",
	"Policy":{
		"type":"Policy",
		"rules":[
			{
				"name": "id",
				"function": "identity",
				"args": [
					"pagePolicyId"
				]
			},
			{
				"name": "items",
				"function": "container",
				"args": [
					{
						"name": "itemsValues",
						"function": "identity",
						"args": [
							"pagePolicyItemsValues"
						]
					},
					{
						"name": "itemsMeta",
						"function": "identity",
						"args": [
							"pagePolicyItemsMeta"
						]
					}
				]
			}
		]
	},
	"pagePolicyItemsValues":[
		{
			"title":"3. Name and Address of the Data Protection Officer",
			"paragraphs":[
				"The Data Protection Officer of the controller is:",
				"CEO Evgeniy Tyumentcev\nHello World! Technologies LLC\nPrigorodnaya, 10/1, 92\n644077 Omsk\nRussia",
				"Phone: 1 888 657 0767",
				"Email: etyumentcev@hwdtech.ru",
				{
					"type": "with links",
					"text": [
						"Website: ",
						{
							"href": "https://hwdtech.com/",
							"linkTitle": "Go to HWdTech main page",
							"text": "https://hwdtech.com/"
						}
					]
				},
				"Any data subject may, at any time, contact our Data Protection Officer directly with all questions and suggestions concerning data protection."
			]
		},
		{
			"title":"4. Cookies",
			"paragraphs":[
				"The Internet pages of the Hello World! Technologies LLC use cookies. Cookies are text files that are stored in a computer system via an Internet browser.",
				"Many Internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet sites and servers to differentiate the individual browser of the dats subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID.",
				"Through the use of cookies, the Hello World! Technologies LLC can provide the users of this website with more user-friendly services that would not be possible without the cookie setting.",
				"By means of a cookie, the information and offers on our website can be optimized with the user in mind. Cookies allow us, as previously mentioned, to recognize our website users. The purpose of this recognition is to make it easier for users to utilize our website. The website user that uses cookies, e.g. does not have to enter access data each time the website is accessed, because this is taken over by the website, and the cookie is thus stored on the user's computer system. Another example is the cookie of a shopping cart in an online shop. The online store remembers the articles that a customer has placed in the virtual shopping cart via a cookie.",
				"The data subject may, at any time, prevent the setting of cookies through our website by means of a corresponding setting of the Internet browser used, and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our website may be entirely usable."
			]
		}
	],
	"pagePolicyItemsMeta":[
		{
			"name": "title",
			"function": "identity",
			"args": [
				"title"
			]
		},
		{
			"name": "paragraphs",
			"function": "identity",
			"args": [
				"paragraphs"
			]
		}
	]
}
```
