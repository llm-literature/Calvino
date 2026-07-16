'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Grid2X2 } from 'lucide-react'
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
  const [pageIndex, setPageIndex] = useState(0)
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

  return (
    <article
      className="city-experience relative h-[100svh] overflow-hidden"
      style={{ color: direction.ink, background: direction.paper, '--city-accent': direction.accent, '--city-paper': direction.paper } as React.CSSProperties}
    >
      <header className="relative z-50 grid h-10 grid-cols-[1fr_auto_1fr] items-center border-b border-current bg-[var(--city-paper)] px-4 text-[9px] font-black tracking-[0.18em] uppercase backdrop-blur-md md:px-6">
        <Link href="/works/invisible-cities" className="flex items-center gap-2 hover:opacity-50">
          <Grid2X2 className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Atlas</span>
        </Link>
        <span>{city.type} / {city.name}</span>
        <Link href="/" className="justify-self-end hover:opacity-50">Calvino®</Link>
      </header>

      <main className="relative h-[calc(100svh-2.5rem)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Scene cn={isCn} />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/25 to-transparent mix-blend-multiply" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-none absolute top-4 left-4 z-30 max-w-[62vw] md:top-6 md:left-7"
        >
          <p className="mb-2 max-w-md text-[8px] leading-relaxed font-black tracking-[0.16em] uppercase drop-shadow-sm md:text-[10px]">{signal}</p>
          <h1 className="text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.72] font-black tracking-[-0.09em] uppercase drop-shadow-[0_2px_0_rgba(255,255,255,.2)]">
            {displayName}
          </h1>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: direction.angle / 2 }}
          className="group absolute top-5 right-4 z-20 w-[28vw] max-w-[300px] min-w-[170px] transition duration-500 hover:z-40 hover:scale-110 hover:rotate-0 hover:drop-shadow-[10px_12px_0_var(--city-accent)] md:top-7 md:right-7"
        >
          <div className="relative aspect-[4/3] overflow-hidden border border-current bg-black/10">
            <Image src={imageUrl} alt="" fill priority className="object-cover grayscale contrast-125 mix-blend-multiply transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
            <div className="absolute inset-0 opacity-10 mix-blend-color transition group-hover:opacity-0" style={{ background: direction.accent }} />
          </div>
          <figcaption className="mt-1 flex justify-between text-[7px] font-black tracking-[0.14em] uppercase opacity-70">
            <span>{city.name}</span><span>{city.type}</span>
          </figcaption>
        </motion.figure>

        <section className="absolute right-3 bottom-3 left-3 z-40 max-h-[44%] border border-current bg-[color-mix(in_srgb,var(--city-paper)_92%,transparent)] shadow-[8px_8px_0_var(--city-accent)] backdrop-blur-xl md:right-auto md:bottom-5 md:left-6 md:w-[min(47vw,680px)] md:max-h-[48%]">
          <div className="flex items-center justify-between border-b border-current px-4 py-2 text-[8px] font-black tracking-[0.16em] uppercase">
            <span>{isCn ? '城市文本' : 'City text'}</span>
            <span>{String(safePageIndex + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}</span>
          </div>

          <div className="relative min-h-[150px] overflow-hidden px-4 py-3 md:min-h-[170px] md:px-5 md:py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${language}-${safePageIndex}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="prose-city text-[clamp(.76rem,1.15vw,1rem)] leading-[1.65] font-semibold"
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
            <span className="grid place-items-center border-x border-current px-3">{direction.motif}</span>
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

        {prevCity ? (
          <Link href={`/works/invisible-cities/${prevCity.type}/${prevCity.name}`} aria-label={`Previous city: ${prevCity.name}`} className="absolute top-1/2 left-0 z-40 hidden -translate-y-1/2 border border-l-0 border-current bg-[var(--city-paper)] p-3 transition hover:bg-[var(--city-accent)] md:block"><ArrowLeft className="h-4 w-4" /></Link>
        ) : null}
        {nextCity ? (
          <Link href={`/works/invisible-cities/${nextCity.type}/${nextCity.name}`} aria-label={`Next city: ${nextCity.name}`} className="absolute top-1/2 right-0 z-40 hidden -translate-y-1/2 border border-r-0 border-current bg-[var(--city-paper)] p-3 transition hover:bg-[var(--city-accent)] md:block"><ArrowRight className="h-4 w-4" /></Link>
        ) : null}
      </main>
    </article>
  )
}
