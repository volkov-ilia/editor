export function cloneObject<T>(obj: T | undefined): T {
  return JSON.parse(JSON.stringify(obj))
}
