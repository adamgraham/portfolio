export function getSessionIndex(category: string): number {
  if (category && typeof sessionStorage !== 'undefined') {
    const index = sessionStorage.getItem(`${category}-slide`);
    return index ? Number.parseInt(index) : 0;
  } else {
    return 0;
  }
}

export function setSessionIndex(category: string, slideIndex: number): void {
  if (category && typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem(`${category}-slide`, String(slideIndex));
  }
}
