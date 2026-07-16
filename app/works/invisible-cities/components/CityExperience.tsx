'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Grid2X2, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useLanguage } from '@/app/context/LanguageContext'
import { City } from '@/lib/types'
import { cityDirections } from '../art-direction'
import { cityScenes } from '../scenes/CityScenes'
import { paginateCityText } from '../text'

export default function CityExperience({
  city,
  prevCity,
  nextCity,
  imageUrl,
}: {
  city: City
  prevCity: City | null
  nextCity: City | null
  imageUrl: string
}) {
  const { language } = useLanguage()
  const router = useRouter()
  const [pageIndex, setPageIndex] = useState(0)
  const [readingOpen, setReadingOpen] = useState(false)
  const direction = cityDirections[city.name.toLowerCase()]
  const isCn = language === 'cn'
  const displayName = isCn ? city.cnName : city.name
  const signal = isCn ? direction.cnSignal : direction.signal
  const Scene = cityScenes[city.name.toLowerCase()]
  const pages = useMemo(
    () => paginateCityText(isCn ? city.cnDescription : city.enDescription, isCn ? 360 : 450),
    [city.cnDescription, city.enDescription, isCn]
  )
  const safePageIndex = Math.min(pageIndex, pages.length - 1)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('a, button, input, textarea, select')) return

      if (event.key === 'ArrowLeft') {
        if (readingOpen && safePageIndex > 0) {
          setPageIndex((index) => Math.max(0, index - 1))
        } else if (!readingOpen && prevCity) {
          router.push(`/works/invisible-cities/${prevCity.type}/${prevCity.name}`)
        }
      }

      if (event.key === 'ArrowRight') {
        if (readingOpen && safePageIndex < pages.length - 1) {
          setPageIndex((index) => Math.min(pages.length - 1, index + 1))
        } else if (!readingOpen && nextCity) {
          router.push(`/works/invisible-cities/${nextCity.type}/${nextCity.name}`)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextCity, pages.length, prevCity, readingOpen, router, safePageIndex])

  return (
    <article
      className="city-experience relative h-[100svh] overflow-hidden"
      style={
        {
          color: direction.ink,
          background: direction.paper,
          '--city-accent': direction.accent,
          '--city-paper': direction.paper,
        } as React.CSSProperties
      }
    >
      <header className="relative z-50 grid h-10 grid-cols-[1fr_auto_1fr] items-stretch border-b border-current bg-[var(--city-paper)] text-[8px] font-black tracking-[0.14em] uppercase backdrop-blur-md md:text-[9px]">
        {prevCity ? (
          <Link
            href={`/works/invisible-cities/${prevCity.type}/${prevCity.name}`}
            className="group flex min-w-0 items-center gap-2 border-r border-current px-3 transition hover:bg-[var(--city-accent)] md:px-5"
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition group-hover:-translate-x-1" />
            <span className="hidden truncate sm:inline">
              {isCn ? prevCity.cnName : prevCity.name}
            </span>
            <span className="sm:hidden">{isCn ? '上一城' : 'Prev'}</span>
          </Link>
        ) : (
          <span className="border-r border-current" />
        )}

        <Link
          href="/works/invisible-cities"
          className="flex items-center gap-2 px-3 transition hover:bg-[var(--city-accent)] md:px-5"
        >
          <Grid2X2 className="h-3.5 w-3.5" />
          <span className="hidden md:inline">{city.type} / </span>
          {city.name}
        </Link>

        {nextCity ? (
          <Link
            href={`/works/invisible-cities/${nextCity.type}/${nextCity.name}`}
            className="group flex min-w-0 items-center justify-end gap-2 border-l border-current px-3 transition hover:bg-[var(--city-accent)] md:px-5"
          >
            <span className="hidden truncate sm:inline">
              {isCn ? nextCity.cnName : nextCity.name}
            </span>
            <span className="sm:hidden">{isCn ? '下一城' : 'Next'}</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-1" />
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center justify-end border-l border-current px-3 hover:bg-[var(--city-accent)]"
          >
            Calvino®
          </Link>
        )}
      </header>

      <main className="relative h-[calc(100svh-2.5rem)] overflow-hidden">
        <div className="city-stage" data-reading={readingOpen ? 'open' : 'closed'}>
          <div className="absolute inset-0 z-0">
            <Scene cn={isCn} />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/25 to-transparent mix-blend-multiply" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-none absolute top-4 left-4 z-30 max-w-[62vw] md:top-6 md:left-7"
          >
            <p className="mb-2 max-w-md text-[8px] leading-relaxed font-black tracking-[0.16em] uppercase drop-shadow-sm md:text-[10px]">
              {signal}
            </p>
            <h1 className="text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.72] font-black tracking-[-0.09em] uppercase drop-shadow-[0_2px_0_rgba(255,255,255,.2)]">
              {displayName}
            </h1>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: direction.angle / 2 }}
            className="group absolute top-5 right-4 z-20 w-[28vw] max-w-[300px] min-w-[170px] origin-right transition duration-500 hover:z-40 hover:scale-110 hover:rotate-0 hover:drop-shadow-[10px_12px_0_var(--city-accent)] md:top-7 md:right-[calc(44px+1.75rem)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-current bg-black/10">
              <Image
                src={imageUrl}
                alt=""
                fill
                priority
                className="object-cover mix-blend-multiply contrast-125 grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0 opacity-10 mix-blend-color transition group-hover:opacity-0"
                style={{ background: direction.accent }}
              />
            </div>
            <figcaption className="mt-1 flex justify-between text-[7px] font-black tracking-[0.14em] uppercase opacity-70">
              <span>{city.name}</span>
              <span>{city.type}</span>
            </figcaption>
          </motion.figure>
        </div>

        <section className="city-reader" data-reading={readingOpen ? 'open' : 'closed'}>
          <button
            type="button"
            onClick={() => setReadingOpen((open) => !open)}
            aria-expanded={readingOpen}
            aria-label={
              isCn
                ? readingOpen
                  ? '返回城市场景'
                  : '阅读城市正文'
                : readingOpen
                  ? 'Return to city scene'
                  : 'Read city text'
            }
            className="city-reader-toggle"
          >
            <span className="city-reader-bookmark">
              <span>{isCn ? '阅读城市' : 'Read city'}</span>
              <span>
                {String(safePageIndex + 1).padStart(2, '0')}/{String(pages.length).padStart(2, '0')}
              </span>
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
            </span>
            <span className="city-reader-heading">
              <span className="flex items-center gap-3">
                <span className="text-base">文</span>
                <span>{isCn ? '返回城市' : 'Return to city'}</span>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  {String(safePageIndex + 1).padStart(2, '0')} /{' '}
                  {String(pages.length).padStart(2, '0')}
                </span>
                <X className="h-3.5 w-3.5" />
              </span>
            </span>
          </button>

          <div className="relative overflow-hidden px-5 py-4 md:px-7 md:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${language}-${safePageIndex}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="prose-city text-[clamp(.78rem,1.1vw,1rem)] leading-[1.7] font-semibold"
              >
                <ReactMarkdown>{pages[safePageIndex]}</ReactMarkdown>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] border-t border-current text-[8px] font-black tracking-[0.14em] uppercase">
            <button
              type="button"
              disabled={safePageIndex === 0}
              onClick={() => setPageIndex((index) => Math.max(0, index - 1))}
              className="flex cursor-pointer items-center gap-2 px-4 py-3 text-left transition hover:bg-[var(--city-accent)] disabled:cursor-default disabled:opacity-25"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> {isCn ? '上一幕' : 'Previous'}
            </button>
            <span className="grid place-items-center border-x border-current px-3">
              {direction.motif}
            </span>
            <button
              type="button"
              disabled={safePageIndex === pages.length - 1}
              onClick={() => setPageIndex((index) => Math.min(pages.length - 1, index + 1))}
              className="flex cursor-pointer items-center justify-end gap-2 px-4 py-3 text-right transition hover:bg-[var(--city-accent)] disabled:cursor-default disabled:opacity-25"
            >
              {isCn ? '下一幕' : 'Next'} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>
      </main>
    </article>
  )
}
