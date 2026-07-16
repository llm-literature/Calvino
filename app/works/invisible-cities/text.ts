/**
 * Removes literal backslash-newline markers inherited from hard-wrapped source
 * files. Real paragraph breaks remain intact for Markdown rendering.
 */
export function normalizeCityText(value: string) {
  return value.replaceAll('\\n', '')
}

export function paginateCityText(value: string, targetLength = 520) {
  const normalized = normalizeCityText(value).trim()
  const sentences = normalized.match(/[^。！？.!?]+[。！？.!?]+|[^。！？.!?]+$/g) ?? [normalized]
  const pages: string[] = []
  let current = ''

  for (const sentence of sentences) {
    const next = `${current}${sentence}`
    if (current && next.length > targetLength) {
      pages.push(current.trim())
      current = sentence
    } else {
      current = next
    }
  }

  if (current.trim()) pages.push(current.trim())
  return pages.length ? pages : ['']
}
