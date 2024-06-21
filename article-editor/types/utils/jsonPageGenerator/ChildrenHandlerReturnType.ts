import StyledText from "./StyledText"
import IStringJson from "../contentful/IStringJson"

type ChildrenHandlerReturnType = void | string | StyledText | ChildrenHandlerReturnType[] | IStringJson

export default ChildrenHandlerReturnType
