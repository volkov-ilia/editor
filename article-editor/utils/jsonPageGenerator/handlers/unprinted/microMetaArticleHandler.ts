import { NodeHandler } from "../../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../../generateComponentID"
import { ValueMeta } from "../../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../../componentJsonGenerator"
import get from "lodash/get"
import MICRO_META_ARTICLE from "../../../../types/utils/packageComponents/MICRO_META_ARTICLE"
import containsVitals from "../../containsVitals"
import checkImportant from "../../checkImportant"

const imageWithSizeHandler: NodeHandler = ({ component }) => {
  const type = MICRO_META_ARTICLE
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "title", value: get(component, "title"), function: IDENTITY },
    {
      name: "description",
      value: get(component, "description"),
      function: IDENTITY,
    },
    { name: "authors", value: get(component, "authors"), function: IDENTITY },
    {
      name: "publicationDate",
      value: get(component, "publicationDate"),
      function: IDENTITY,
    },
    {
      name: "modifiedDate",
      value: new Date().toDateString(),
      function: IDENTITY,
    },
    {
      name: "previewImage",
      value: get(component, "previewImage"),
      function: IDENTITY,
    },
    {
      name: "ratingValue",
      value: get(component, "ratingValue"),
      function: IDENTITY,
    },
    {
      name: "reviewCount",
      value: get(component, "reviewCount"),
      function: IDENTITY,
    },
    {
      name: "bestRating",
      value: get(component, "bestRating"),
      function: IDENTITY,
    },
    {
      name: "worstRating",
      value: get(component, "worstRating"),
      function: IDENTITY,
    },
    { name: "path", value: get(component, "path"), function: IDENTITY },
    { name: "slug", value: get(component, "slug"), function: IDENTITY },
  ]

  const res = componentJsonGenerator(componentName, type, fields)
  const vitals = ["title", "description", "publicationDate", "previewImage", "slug"]
  checkImportant(componentName, vitals, component)
  const hasVitals = containsVitals(componentName, vitals, component)
  if (hasVitals) {
    return res
  }
}

export default imageWithSizeHandler
