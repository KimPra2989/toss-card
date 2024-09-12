function removeHtmlTags(text: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(text, 'text/html')
  const cleanText = doc.body.textContent || ''

  return cleanText
}

export default removeHtmlTags
