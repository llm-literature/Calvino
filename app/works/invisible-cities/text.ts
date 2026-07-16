/**
 * Removes literal backslash-newline markers inherited from hard-wrapped source
 * files. Real paragraph breaks remain intact for Markdown rendering.
 */
export function normalizeCityText(value: string) {
  return value.replaceAll('\\n', '')
}
