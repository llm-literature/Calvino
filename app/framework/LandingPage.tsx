'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/context/LanguageContext'
import { works } from './works'

const copy = {
  cn: {
    eyebrow: '伊塔洛·卡尔维诺 / 数字创意档案',
    lead: '阅读结束的地方，',
    leadAccent: '另一座世界开始生长。',
    index: '作品索引',
    enter: '进入作品',
    soon: '构建中',
    language: 'EN',
  },
  en: {
    eyebrow: 'ITALO CALVINO / DIGITAL EXPERIMENTS',
    lead: 'Where reading ends,',
    leadAccent: 'another world begins to grow.',
    index: 'Works index',
    enter: 'Enter the work',
    soon: 'In construction',
    language: '中文',
  },
}

export default function LandingPage() {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const text = copy[language]
  const featured = works[0]

  const toggleLanguage = () => {
    const next = language === 'cn' ? 'en' : 'cn'
    localStorage.setItem('languagePreference', next)
    setLanguage(next)
    router.push(next === 'en' ? '/en' : '/')
  }

  return (
    <div className="calvino-home flex h-svh flex-col overflow-hidden bg-[#f0efea] text-[#11110f]">
      <header className="grid grid-cols-[1fr_auto] items-start border-b border-black px-4 py-4 md:grid-cols-3 md:px-7">
        <Link href="/" className="font-display text-xl font-black tracking-[-0.06em] md:text-2xl">
          CALVINO®
        </Link>
        <p className="hidden text-center text-[10px] font-bold tracking-[0.18em] uppercase md:block">
          {text.eyebrow}
        </p>
        <div className="flex items-center justify-end gap-5">
          <button
            type="button"
            onClick={toggleLanguage}
            className="cursor-pointer text-[11px] font-black tracking-[0.16em] uppercase hover:underline"
            aria-label={language === 'cn' ? 'Switch to English' : '切换到中文'}
          >
            {text.language}
          </button>
          <Link
            href="https://github.com/llm-literature/calvino"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="grid min-h-0 flex-1 grid-rows-[minmax(0,1.55fr)_minmax(0,1fr)] md:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)] md:grid-rows-1">
        <section className="relative flex min-h-0 flex-col overflow-hidden border-b border-black px-4 pt-5 pb-4 md:border-r md:border-b-0 md:px-7 md:pt-8 md:pb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 shrink-0 text-[clamp(2rem,5.8vw,6.2rem)] leading-[1.02] font-black tracking-[-0.075em]"
          >
            {text.lead}
            <br />
            <span className="text-[#ee3b20]">{text.leadAccent}</span>
          </motion.p>

          <div className="relative mt-5 min-h-0 flex-1 overflow-hidden bg-black md:mt-7">
            <Image
              src={featured.image!}
              alt="Valdrada, a city reflected over water"
              fill
              priority
              className="object-cover contrast-125 grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-[#ee3b20]/20 mix-blend-multiply" />
            <span className="absolute top-3 left-3 bg-[#f0efea] px-2 py-1 text-[10px] font-black tracking-[0.18em]">
              EXP. {featured.number}
            </span>
          </div>
        </section>

        <section className="flex min-h-0 flex-col" aria-labelledby="works-title">
          <div className="flex items-center justify-between border-b border-black px-4 py-3 md:px-7">
            <h2 id="works-title" className="text-[10px] font-black tracking-[0.22em] uppercase">
              {text.index}
            </h2>
            <ArrowDownRight className="h-4 w-4" />
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-2 md:grid-cols-1 md:grid-rows-2">
            {works.map((work) => {
            const title = work.title[language]
            const content = (
              <div className="group grid h-full min-h-0 grid-cols-[2.5rem_1fr] border-r border-black transition-colors md:grid-cols-[4rem_1fr_auto] md:border-r-0 md:border-b">
                <div className="flex items-start justify-center border-r border-black py-3 text-[10px] font-black md:py-4">
                  {work.number}
                </div>
                <div className="flex min-w-0 flex-col justify-between p-3 md:p-5">
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase">
                    {work.originalTitle} / {work.year}
                  </p>
                  <h3 className="mt-2 text-[clamp(1.35rem,2.4vw,2.4rem)] leading-[0.88] font-black tracking-[-0.065em] uppercase">
                    {title}
                  </h3>
                </div>
                <div className="col-start-2 flex items-end justify-between px-3 pb-3 md:col-start-3 md:flex-col md:items-end md:p-5">
                  <span className="text-[9px] font-black tracking-[0.12em] uppercase md:text-[10px] md:tracking-[0.16em]">
                    {work.status === 'available' ? text.enter : text.soon}
                  </span>
                  {work.status === 'available' && (
                    <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:h-9 md:w-9" />
                  )}
                </div>
              </div>
            )

            return work.href ? (
              <Link
                key={work.slug}
                href={work.href}
                className="block hover:bg-[#ee3b20] hover:text-white focus-visible:bg-[#ee3b20] focus-visible:text-white focus-visible:outline-none"
              >
                {content}
              </Link>
            ) : (
              <div key={work.slug} className="text-black/35">
                {content}
              </div>
            )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
