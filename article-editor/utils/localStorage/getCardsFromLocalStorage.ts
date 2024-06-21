export function getCardsFromLocalStorage() {
  return localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")!) : {}
}
