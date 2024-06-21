const commonErrorHandler = (e: unknown) => {
  let message = "Unknown error"
  if (e instanceof Error) message = e.message
  return { message }
}

export default commonErrorHandler
