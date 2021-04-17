export function titleCase(title) {
  return title.replace(/\b\w/g, (l) => l.toUpperCase());
}
