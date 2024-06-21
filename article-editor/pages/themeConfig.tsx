import React from "react"
import ThemeConfigPage from "../ui/components/ThemeConfigPage"

const texts = {
  configName: "*Название конфига (без пробелов)",
  titleLoadLogoText: "Логотип темы",
  titleLoadEasterEggsImagesText: "*Пасхалки",
  loadImages: "Загрузите картинки",
  loadLogo: "Загрузите лого",
  buttonLoadLogoText: "Загрузить",
  buttonLoadEasterEggsImagesText: "Загрузить",
  titleUncountedImages: "Псевдопасхалки",
  buttonUncountedImages: "Загрузить",
  uncountedImages: "Загрузите псевдопасхалки",
  expiresAt: "*Выключить",
  turnOnAt: "*Включить",
  topLogoText: "Текст вместо HWDTECH! в лого",
  bottomLogoText: "Текст вместо TECHNOLOGIES в лого",
  pageMax: "*Максимум пасхалок на странице",
  ignoredPagesSlug: "Игнорировать слаги (перечислить через пробел)",
  iconColors: "hex цвета (перечислить через пробел)",
  genMax: "Генерировать максимум",
  smallestImageSize: "*Минимальный размер пасхалки",
  biggestImageSize: "*Максимальный размер пасхалки",
  easterEggsColors: "*Перечислите цвета пасхалок",
  generateConfig: "Сгенерировать!",
  generateConfigTitle: "Сгенерировать конфиг",
  titleCopy: "Копировать содержимое конфига",
  buttonCopy: "Копировать",
}

const docText = `На данной странице генерируется конфиг для размещения пасхалок на сайте.
Обязательные поля отмечены *.
В поле "${texts.ignoredPagesSlug}" при необходимости указываются слаги или пути страниц/разделов, которые не должны включаться в конфиг.
В полях "${texts.smallestImageSize}" и "${texts.biggestImageSize}" указывается лишь интервал. Генерация размеров случайна в указанном интервале. Размер указывается в rem.
В поле "${texts.genMax}" указать любое значение, если нужно сгенерировать максимально возможное количество пасхалок на каждой странице (это количество может быть меньше максимального).
Картинки пасхалок должны иметь формат svg. Пасхалки должны быть однотонными, иначе изменение цвета применится некорректно. Загружать можно несколько картинок сразу. Одинаковые картинки не загружаются. Проверить, чтобы не имелось полей fill|stroke="none".
Псевдопасхалки - такие же картинки с такими же требованиями, как к пасхалкам, НО их количество в конфиге НЕ отражается.`

const ConfigPage = () => <ThemeConfigPage texts={texts} docText={docText} />

export default ConfigPage
