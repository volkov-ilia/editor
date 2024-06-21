import { CardFooterHandler } from "./componentHandlers/Footer/CardFooterHandler/CardFooterHandler"
import { CardHeaderContentHandler } from "./componentHandlers/Header/CardHeader/CardHeaderContentHandler"
import { CardHeaderHandler } from "./componentHandlers/Header/CardHeader/CardHeaderHandler"
import { DefaultLeftSideColumnContentHandler } from "./componentHandlers/SideColumn/LeftSideColumn/DefaultLeftSideColumnContentHandler"
import { DefaultLeftSideColumnHanlder } from "./componentHandlers/SideColumn/LeftSideColumn/DefaultLeftSideColumnHanlder"
import { DefaultRightSideColumnHandler } from "./componentHandlers/SideColumn/RightSideColumn/DefaultRightSideColumnHandler"
import { saveAsPDFHandler } from "./utilsHandlers/ButtonClick/SaveAsPDFHandler"
import { createArticleHandler } from "./utilsHandlers/ButtonClick/CreateArticleHandler"

export const handlers = {
  "Editor.Card.Footer": () => CardFooterHandler,
  "Editor.Card.Header": () => CardHeaderHandler,
  "Editor.Card.LeftSideColumn": () => DefaultLeftSideColumnHanlder,
  "Editor.Card.RightSideColumn": () => DefaultRightSideColumnHandler,

  "Card.Header.Content": () => CardHeaderContentHandler,
  "Card.LeftSideColumn.Content": () => DefaultLeftSideColumnContentHandler,

  "Editor.Utils.SaveAsPDF": () => saveAsPDFHandler,
  "Editor.Utils.CreateArticle": () => createArticleHandler,
}

export default handlers
