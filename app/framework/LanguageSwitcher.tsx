'use client'

import { useLanguage } from '@/app/context/LanguageContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  const selectLanguage = (selectedLanguage: 'cn' | 'en') => {
    localStorage.setItem('languagePreference', selectedLanguage)
    setLanguage(selectedLanguage)
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => selectLanguage('cn')}
        className={cn(
          'font-serif transition-colors',
          language === 'cn' ? 'font-bold text-amber-600' : 'text-stone-500 hover:text-stone-900'
        )}
      >
        中
      </Button>
      <span className="text-stone-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => selectLanguage('en')}
        className={cn(
          'font-serif transition-colors',
          language === 'en' ? 'font-bold text-amber-600' : 'text-stone-500 hover:text-stone-900'
        )}
      >
        EN
      </Button>
    </div>
  )
}
