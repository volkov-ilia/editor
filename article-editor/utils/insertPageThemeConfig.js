import get from "lodash/get"
import forEach from "lodash/forEach"
import merge from "lodash/merge"
import cloneDeep from "lodash/cloneDeep"

const structureConfig = ({ structure, themeConfig }) => {
  const tempStructure = cloneDeep(structure)

  forEach(structure, (component, index) => {
    const easterEggs =
      get(themeConfig, `currentPage.${component.id}`) || get(themeConfig, `currentPage.${component.type}`)
    if (easterEggs) {
      tempStructure[index] = merge(component, { easterEggs })
    }
  })
  return tempStructure
}

const layoutConfig = ({ pageLayoutData, themeConfig }) => {
  const tempPageLayout = { ...pageLayoutData }
  if (get(themeConfig, "logo")) {
    tempPageLayout.logoSrc = themeConfig.logo
  }
  if (get(themeConfig, "companyName")) {
    tempPageLayout.companyName = themeConfig.companyName
  }
  return tempPageLayout
}

const config = ({ themeConfig, pageLayoutData, structure }) => {
  return {
    newMenuData: layoutConfig({ pageLayoutData, themeConfig }),
    newComponentProps: structureConfig({ structure, themeConfig }),
  }
}

export default config
