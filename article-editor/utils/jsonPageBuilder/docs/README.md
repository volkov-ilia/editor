# Структура страниц

```JSON
{
  "components": [
    "компонент 1",
    "компонент 2"
  ],
  "компонент 1": {
  },
  "компонент 2": {
  }
}
```

**components** - список компонентов на странице. Это массив строк, каждая из которых является ключом в этом же объекте.
По ключу находится объект, описывающий соответствующий компонент.

# Описание компонентов

## Общие правила

В структуре компонентов имена переменных, указанных в args, обязательно должны совпадать с полями, описанными в
структуре страницы или в json value карточек. Имена переменных, указанных в args, могут совпадать с полем name, однако
это не обязательно. Например, в картоках:

```JSON
{
  "cardsValues": [
    {
      "description": "Highload, scalable applications, SaaS, Single Page Web Applications, Progressive Web Applications"
    }
  ],
  "cardsMeta": [
    {
      "name": "cardDescription",
      "function": "identity",
      "args": [
        "description"
      ]
    }
  ]
}
```

Пример в странице:

```JSON
{
  "idComponent": "main",
  "component1": {
    "rules": [
      {
        "name": "id",
        "function": "identity",
        "args": [
          "idComponent"
        ]
      }
    ]
  }
}
```

В структуре компонента переменные name обязательно должны совпадать с описанными правилами полей данного компонента.
Далее описываются эти правила для каждого компонента.
**\*** - обязательные в компоненте поля.

## Навигация по компонентам

Для перехода нажмите на ссылку/картинку

- [Meta](components/common/Meta.md)
- [MetaOpenGraph](components/common/MetaOpenGraph.md)
- [MetaTwitter](components/common/MetaTwitter.md)

- [![BadgesGridSection preview](https://i.ibb.co/L9JGh7m/image69.png)](components/site/BadgesGridSection.md)
- [![bgtitle preview](https://i.ibb.co/5vBS610/image57.png)](components/site/BGTitle.md)
- [![CommentsCarousel preview](https://i.ibb.co/g4tx6zH/comments-carousel.png)](components/site/CommentsCarousel.md)
- [![ComponentWithList preview](https://i.ibb.co/X32LQ0w/component-With-Lists.jpg)](components/site/ComponentWithLists.md)
- [![GridPlatesSection preview](https://i.ibb.co/rx2YfSs/image9.png)](components/site/GridPlatesSection.md)
- [![LetTheNumbersSpeak preview](https://i.ibb.co/NxWcFhD/image76.png)](components/site/LetTheNumbersSpeak.md)
- [![NewCommentCarousel preview](https://i.ibb.co/KrXYHLR/Screenshot-from-2021-03-04-16-43-37.png)](components/site/NewCommentCarousel.md)
- [![PeopleSection preview](https://i.ibb.co/gj8kPTX/image24.png)](components/site/PeopleSection.md)
- [![portfolio carousel preview](https://i.ibb.co/gTBCgzf/portfolio-Carousel.png)](components/site/PortfolioCarousel.md)
- [![article plates preview](https://i.ibb.co/WD3rVtG/SPECIAL-OFFERS.png)](components/site/PortfolioPlatesSection.md)
- [![QuoteAboveImage preview](https://i.ibb.co/7CPcGfc/Quote-Above-Image.png)](components/site/QuoteAboveImage.md)
- [![LetTheNumbersSpeak preview](https://i.ibb.co/rc4hDyN/youtube.png)](components/site/Youtube.md)
- [![InfoBlocksAndButton preview](https://i.ibb.co/YpYvKN7/Screenshot-from-2021-04-09-11-40-37.png)](components/site/InfoBlocksAndButton.md)
- [![Technologies preview](https://i.ibb.co/m4zvK98/technologies.png)](components/site/Technologies.md)
- [![StepByStep preview](https://i.ibb.co/xFxC2yX/sbs.png)](components/site/StepByStep.md)
- [![ImageLinkWithTitle preview](https://i.ibb.co/xfRCfjG/ilwt.png)](components/site/ImageLinkWithTitle.md)
- [![BoxWithAppearedBlock preview](https://i.ibb.co/gwnNCyH/bwab.png)](components/site/BoxWithAppearedBlock.md)
- [![ContentCarouselSection preview](https://i.ibb.co/gtYp5n5/ci.png)](components/site/ContentCarouselSection.md)
- [![AboutHoursSection preview](https://i.ibb.co/9wBPR1D/awh.png)](components/site/AboutHoursSection.md)
- [![ContactsSection preview](https://i.ibb.co/tHVCfv0/cs.png)](components/site/ContactsSection.md)
- [![ListImagesWithTitleSection preview](https://i.ibb.co/mFhwBdJ/liwts.png)](components/site/ListImagesWithTitleSection.md)
- [![StatisticBox preview](https://i.ibb.co/kSMDvV3/numbers.png)](components/site/StatisticBox.md)
- [![Policy preview](https://i.ibb.co/w75WGhQ/policy.png)](components/site/PolicyHandler.md)
- [![BigImageWithDescription preview](https://i.ibb.co/pnTzJ5y/biwd.png)](components/site/BigImageWithDescription.md)

## Другое

- [commonNestedComponents](components/common/commonNestedComponents.md)
- [buttonActionsList](components/common/buttonActionsList.md)
- [iconsDict](components/common/iconsDict.md)
