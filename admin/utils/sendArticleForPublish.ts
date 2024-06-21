import { client } from "@hwdtech/api-requests"

/* istanbul ignore next */
export const sendArticleForPublish = (idArticle: string, source: string, date: Date, version: string) =>
  client.sendReq("publish-service", "publish", {
    reqType: "post",
    body: { idArticle, source, publishTime: date.valueOf(), version },
  })
