import { Entry } from "contentful-management/types"

type EntryResult = Entry | { message: string } | undefined

export default EntryResult
