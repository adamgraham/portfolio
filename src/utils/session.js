export function getSessionIndex(category) {
  if (category && typeof sessionStorage !== 'undefined') {
    return Number.parseInt(sessionStorage.getItem(`${category}-slide`)) || 0;
  } else {
    return 0;
  }
}

export function setSessionIndex(category, slideIndex) {
  if (category && typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem(`${category}-slide`, slideIndex);
  }
}
