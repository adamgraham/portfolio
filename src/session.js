export function getSessionIndex(category) {
  if (category && sessionStorage) {
    return Number.parseInt(sessionStorage.getItem(`${category}-slide`)) || 0;
  } else {
    return 0;
  }
}

export function setSessionIndex(category, slideIndex) {
  if (category && sessionStorage) {
    sessionStorage.setItem(`${category}-slide`, slideIndex);
  }
}
