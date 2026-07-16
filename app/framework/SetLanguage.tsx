'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/context/LanguageContext'

export default function SetLanguage({ lang }: { lang: 'en' | 'cn' | 'auto' }) {
  const { setLanguage } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    if (lang !== 'auto') {
      setLanguage(lang)
      return
    }

    const savedLanguage = localStorage.getItem('languagePreference')
    const detectedLanguage = navigator.languages.some((language) =>
      language.toLowerCase().startsWith('zh')
    )
      ? 'cn'
      : 'en'
    const preferredLanguage =
      savedLanguage === 'cn' || savedLanguage === 'en' ? savedLanguage : detectedLanguage

    setLanguage(preferredLanguage)
    if (preferredLanguage === 'en') {
      router.replace('/en')
    }
  }, [lang, router, setLanguage])

  return null
}
