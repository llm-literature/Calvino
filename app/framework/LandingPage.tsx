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
    lead: '我们不解释卡尔维诺。',
    leadAccent: '我们进入他。',
    index: '作品索引',
    enter: '进入作品',
    soon: '构建中',
    note: '阅读结束的地方，另一座世界开始生长。',
    language: 'EN',
  },
  en: {
    eyebrow: 'ITALO CALVINO / DIGITAL EXPERIMENTS',
    lead: 'We do not explain Calvino.',
    leadAccent: 'We enter him.',
    index: 'Works index',
    enter: 'Enter the work',
    soon: 'In construction',
    note: 'Where reading ends, another world begins to grow.',
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
    <div className="calvino-home min-h-screen bg-[#f0efea] text-[#11110f]">
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

      <main>
        <section className="relative overflow-hidden border-b border-black px-4 pt-10 pb-8 md:px-7 md:pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 max-w-5xl text-[clamp(2.4rem,7vw,7.4rem)] leading-[0.88] font-black tracking-[-0.075em]"
          >
            {text.lead}
            <br />
            <span className="text-[#ee3b20]">{text.leadAccent}</span>
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)] md:items-end">
            <div className="relative aspect-[16/9] overflow-hidden bg-black md:aspect-[2/1]">
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
            <p className="max-w-md text-sm leading-relaxed font-semibold md:pb-1 md:text-base">
              {text.note}
            </p>
          </div>
        </section>

        <section aria-labelledby="works-title">
          <div className="flex items-center justify-between border-b border-black px-4 py-3 md:px-7">
            <h2 id="works-title" className="text-[10px] font-black tracking-[0.22em] uppercase">
              {text.index}
            </h2>
            <ArrowDownRight className="h-4 w-4" />
          </div>

          {works.map((work) => {
            const title = work.title[language]
            const content = (
              <div className="group grid min-h-44 grid-cols-[3.5rem_1fr] border-b border-black transition-colors md:grid-cols-[6rem_1fr_auto]">
                <div className="flex items-start justify-center border-r border-black py-5 text-xs font-black">
                  {work.number}
                </div>
                <div className="flex flex-col justify-between p-5 md:p-7">
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase">
                    {work.originalTitle} / {work.year}
                  </p>
                  <h3 className="mt-8 text-[clamp(2rem,5.3vw,5.8rem)] leading-[0.88] font-black tracking-[-0.065em] uppercase">
                    {title}
                  </h3>
                </div>
                <div className="col-start-2 flex items-end justify-between px-5 pb-5 md:col-start-3 md:flex-col md:items-end md:p-7">
                  <span className="text-[10px] font-black tracking-[0.16em] uppercase">
                    {work.status === 'available' ? text.enter : text.soon}
                  </span>
                  {work.status === 'available' && (
                    <ArrowUpRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:h-12 md:w-12" />
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
        </section>
      </main>
    </div>
  )
}
