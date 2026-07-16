'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Grid2X2 } from 'lucide-react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useLanguage } from '@/app/context/LanguageContext'
import { City } from '@/lib/types'
import { cityDirections, type Motif } from '../art-direction'

function MotifField({ motif, accent }: { motif: Motif; accent: string }) {
  const lines = Array.from({ length: 12 })
  const cells = Array.from({ length: 18 })

  if (motif === 'mirror') {
    return <div className="absolute inset-x-0 top-1/2 h-1/2 scale-y-[-1] border-t opacity-30 backdrop-blur-sm" />
  }
  if (motif === 'network' || motif === 'maze') {
    return (
      <div className="absolute inset-0 opacity-35">
        {lines.map((_, index) => (
          <i
            key={index}
            className="absolute top-1/2 left-1/2 h-px w-[130%] origin-left"
            style={{ background: accent, transform: `rotate(${index * 29}deg) translateX(-12%)` }}
          />
        ))}
      </div>
    )
  }
  if (motif === 'vertical') {
    return (
      <div className="absolute inset-0 flex justify-around opacity-35">
        {lines.map((_, index) => <i key={index} className="h-full w-px" style={{ background: accent }} />)}
      </div>
    )
  }
  if (motif === 'orbit') {
    return (
      <div className="absolute top-1/2 left-1/2 aspect-square w-[80vmin] -translate-1/2 rounded-full border opacity-40" style={{ borderColor: accent }}>
        <div className="absolute inset-[18%] rounded-full border" />
        <div className="absolute inset-[36%] rounded-full border" />
      </div>
    )
  }
  if (motif === 'crowd' || motif === 'specimen') {
    return (
      <div className="absolute inset-0 grid grid-cols-6 gap-3 p-5 opacity-25 md:grid-cols-9">
        {cells.map((_, index) => <i key={index} className="aspect-square rounded-full border" style={{ borderColor: accent }} />)}
      </div>
    )
  }
  if (motif === 'machine') {
    return <div className="absolute inset-[-20%] opacity-20 [background:repeating-linear-gradient(90deg,transparent_0_6vw,currentColor_6vw_6.1vw)]" />
  }
  return <div className="absolute top-1/2 left-1/2 h-[65vmin] w-[65vmin] -translate-1/2 rotate-45 border opacity-30" style={{ borderColor: accent }} />
}

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

  return (
    <article
      className={`city-experience motif-${direction.motif} relative min-h-screen overflow-hidden`}
      style={{ color: direction.ink, background: direction.paper, '--city-accent': direction.accent } as React.CSSProperties}
    >
      <MotifField motif={direction.motif} accent={direction.accent} />

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
