import { useEffect, useState } from 'react'

export function useDocument() {
  const [myDocument, setMyDocument] = useState<Document | null>(null)

  useEffect(() => setMyDocument(document), [])

  return myDocument as Document
}
