export function ucFirst(str: string) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

export function lcFirst(str: string) {
  if (!str) return str;

  return str[0].toLowerCase() + str.slice(1);
}