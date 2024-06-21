export type IOCKey = "IoC.Register" | "IoC.Resolve"

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type IOCResolveStategy<T> = (...args: any) => T
