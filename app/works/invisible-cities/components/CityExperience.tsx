'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Grid2X2 } from 'lucide-react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useLanguage } from '@/app/context/LanguageContext'
import { City } from '@/lib/types'
import { cityDirections } from '../art-direction'
import { cityScenes } from '../scenes/CityScenes'

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
  const direction = cityDirections[city.name.toLowerCase()]
  const isCn = language === 'cn'
  const description = isCn ? city.cnDescription : city.enDescription
  const displayName = isCn ? city.cnName : city.name
  const signal = isCn ? direction.cnSignal : direction.signal
  const Scene = cityScenes[city.name.toLowerCase()]

  return (
    <article
      className={`city-experience motif-${direction.motif} relative min-h-screen overflow-hidden`}
      style={{ color: direction.ink, background: direction.paper, '--city-accent': direction.accent } as React.CSSProperties}
    >
      <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-center border-b border-current px-4 py-3 text-[10px] font-black tracking-[0.18em] uppercase md:px-7">
        <Link href="/works/invisible-cities" className="flex items-center gap-2 hover:opacity-50">
          <Grid2X2 className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Atlas</span>
        </Link>
        <span>{city.type} / {city.name}</span>
        <Link href="/" className="justify-self-end hover:opacity-50">Calvino®</Link>
      </header>

      <section className="relative z-10 grid min-h-[calc(100vh-41px)] grid-rows-[auto_1fr_auto]">
        <div className="grid border-b border-current md:grid-cols-[1fr_2fr]">
          <div className="flex items-center border-b border-current p-4 md:border-r md:border-b-0 md:p-7">
            <p className="max-w-sm text-xs leading-relaxed font-bold tracking-[0.12em] uppercase">{signal}</p>
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden p-4 text-[clamp(3.7rem,12vw,11rem)] leading-[0.75] font-black tracking-[-0.09em] uppercase md:p-7"
            style={{ transform: `rotate(${direction.angle}deg)` }}
          >
            {displayName}
          </motion.h1>
        </div>

        <section aria-label={isCn ? `${displayName} 创意场景` : `${displayName} creative scene`} className="h-[72vh] min-h-[560px] border-b border-current">
          <Scene cn={isCn} />
        </section>

        <div className={`grid min-h-[70vh] ${direction.motif === 'split' || direction.motif === 'mirror' ? 'md:grid-cols-2' : 'md:grid-cols-[1.3fr_0.7fr]'}`}>
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative min-h-[52vh] overflow-hidden border-b border-current md:border-r md:border-b-0 ${direction.motif === 'mirror' ? 'after:absolute after:inset-x-0 after:top-1/2 after:h-1/2 after:bg-[linear-gradient(transparent,var(--city-accent))] after:opacity-25' : ''}`}
          >
            <Image src={imageUrl} alt="" fill priority className="object-cover grayscale contrast-125 mix-blend-multiply" />
            <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ background: direction.accent }} />
          </motion.div>

          <div className="relative flex items-center p-6 md:p-10 lg:p-14">
            <div className="prose-city max-w-xl text-base leading-[1.8] font-medium md:text-lg">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
            <span className="absolute right-4 bottom-3 text-[9px] font-black tracking-[0.2em] uppercase opacity-50">{direction.motif}</span>
          </div>
        </div>

        <nav className="grid grid-cols-2 border-t border-current text-[10px] font-black tracking-[0.16em] uppercase">
          {prevCity ? (
            <Link href={`/works/invisible-cities/${prevCity.type}/${prevCity.name}`} className="flex items-center gap-3 border-r border-current p-5 hover:bg-[var(--city-accent)]">
              <ArrowLeft className="h-4 w-4" /> {prevCity.name}
            </Link>
          ) : <span className="border-r border-current p-5 opacity-30">Beginning</span>}
          {nextCity ? (
            <Link href={`/works/invisible-cities/${nextCity.type}/${nextCity.name}`} className="flex items-center justify-end gap-3 p-5 hover:bg-[var(--city-accent)]">
              {nextCity.name} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <span className="p-5 text-right opacity-30">End</span>}
        </nav>
      </section>
    </article>
  )
}
