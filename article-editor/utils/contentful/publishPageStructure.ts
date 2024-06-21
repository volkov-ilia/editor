import { Entry } from "contentful-management/types"

export const publishPageStructure = async (buttonType: string, result: Entry) => {
  if (buttonType === "publish") {
    await result.publish()
  }
}
