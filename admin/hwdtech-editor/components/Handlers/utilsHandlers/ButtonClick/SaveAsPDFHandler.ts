export const saveAsPDFHandler = () => {
  const title = document.title
  document.title = "some title"
  window.print()
  document.title = title
}
