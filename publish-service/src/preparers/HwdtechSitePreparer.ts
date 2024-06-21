import Contentful from "../types/Contentful"
import Content from "../../../common/types/Content"

class HwdtechSitePreparer {
  public static postAnArticleOnHwdtechSite(
    formDataSlateStructure: Content.FormDataSlateStructureType,
    convertedArticle: Contentful.ArticleConverted,
  ) {
    return {
      fields: {
        pageId: formDataSlateStructure.form.title,
        slug: formDataSlateStructure.slug,
        id: formDataSlateStructure.slug,
        path: formDataSlateStructure.form.path,
        json: convertedArticle,
      },
    }
  }
}

export default HwdtechSitePreparer
