import contFetcher from "../utils/contentful/fetcher"
import { articlesMetadata } from "../utils/articlesMetadata"
import get from "lodash/get"

export default function Home() {
  return {}
}

export async function getServerSideProps() {
  const enArticles = await contFetcher(`/api/getArticles?locale=en&type=articles`)
  const ruArticles = await contFetcher(`/api/getArticles?locale=ru&type=articles`)
  articlesMetadata(get(ruArticles, "result"), "ruArticles.json", "ru")
  articlesMetadata(get(enArticles, "result"), "enArticles.json", "en")

  return {
    props: {},
  }
}
