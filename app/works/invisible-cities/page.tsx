'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '@/public/works/invisible-cities/data.json'
import { useLanguage } from '@/app/context/LanguageContext'

const categories = [
  { type: 'memory', cn: '城市与记忆', en: 'Cities & Memory', mark: '记', color: '#d6b16f' },
  { type: 'desire', cn: '城市与欲望', en: 'Cities & Desire', mark: '欲', color: '#ff3b31' },
  { type: 'signs', cn: '城市与符号', en: 'Cities & Signs', mark: '符', color: '#44b6a8' },
  { type: 'thin', cn: '轻盈的城市', en: 'Thin Cities', mark: '轻', color: '#c7dce4' },
  { type: 'trading', cn: '贸易的城市', en: 'Trading Cities', mark: '易', color: '#efa83b' },
  { type: 'eyes', cn: '城市与眼睛', en: 'Cities & Eyes', mark: '目', color: '#3c95ff' },
  { type: 'names', cn: '城市与名字', en: 'Cities & Names', mark: '名', color: '#d15380' },
  { type: 'dead', cn: '城市与死者', en: 'Cities & the Dead', mark: '死', color: '#9b8fc4' },
  { type: 'sky', cn: '城市与天空', en: 'Cities & the Sky', mark: '天', color: '#f5cb45' },
  { type: 'continuous', cn: '连绵的城市', en: 'Continuous Cities', mark: '∞', color: '#73a95a' },
  { type: 'hidden', cn: '隐蔽的城市', en: 'Hidden Cities', mark: '隐', color: '#e06a47' },
]

const copy = {
  cn: {
    kicker: '一部关于欲望、记忆与语言的不可穷尽地图',
    titleA: '不存在的',
    titleB: '五十五座城',
    instruction: '移动你的目光。每一组城市都会重绘这张地图。',
    dialogue: '“你讲述的每座城市，都像威尼斯。”',
    answer: '“每次描述一座城市，我都在谈论威尼斯。”',
    choose: '选择一种观看方式',
    enter: '进入这个系列',
  },
  en: {
    kicker: 'An inexhaustible atlas of desire, memory and language',
    titleA: 'Fifty-five cities',
    titleB: 'that do not exist',
    instruction: 'Move your gaze. Each family redraws the atlas.',
    dialogue: '“Every city you describe resembles Venice.”',
    answer: '“Every time I describe a city, I am saying something about Venice.”',
    choose: 'Choose a way of seeing',
    enter: 'Enter this series',
  },
}

export default function InvisibleCitiesAtlas() {
  const { language } = useLanguage()
  const isCn = language === 'cn'
  const text = copy[language]
  const [activeType, setActiveType] = useState('memory')
  const activeCategory = categories.find((category) => category.type === activeType)!
  const activeCities = data.cities.filter((city) => city.type === activeType)

  return (
    <main className="min-h-screen overflow-hidden bg-[#11110f] text-[#ece9df] selection:bg-[#ff3b31]">
      <header className="grid grid-cols-[1fr_auto] items-center border-b border-white/30 px-4 py-4 md:grid-cols-3 md:px-7">
        <Link href="/" className="flex items-center gap-2 text-[10px] font-black tracking-[.18em] uppercase hover:text-[#ff3b31]">
          <ArrowLeft className="h-4 w-4" /> Calvino
        </Link>
        <span className="hidden text-center text-[10px] font-black tracking-[.2em] uppercase md:block">Le città invisibili / 1972</span>
        <span className="justify-self-end text-[10px] font-black tracking-[.18em]">55 × 11</span>
      </header>

      <section className="relative border-b border-white/30 px-4 pt-8 pb-10 md:px-7 md:pt-12">
        <p className="mb-8 text-[10px] font-black tracking-[.22em] uppercase text-[#ff6a4e]">{text.kicker}</p>
        <h1 className="relative z-10 text-[clamp(4.2rem,13vw,12.5rem)] leading-[.7] font-black tracking-[-.095em] uppercase">
          {text.titleA}<br/><span className="ml-[8vw] text-[#ff6a4e]">{text.titleB}</span>
        </h1>
        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <p className="max-w-sm text-sm leading-relaxed font-bold">{text.instruction}</p>
          <div className="grid grid-cols-2 gap-4 text-xs leading-relaxed md:text-sm"><p>{text.dialogue}</p><p className="text-[#ff6a4e]">{text.answer}</p></div>
        </div>
      </section>

      <section className="grid min-h-[82vh] border-b border-white/30 lg:grid-cols-[minmax(360px,.72fr)_1.28fr]">
        <div className="border-b border-white/30 lg:border-r lg:border-b-0">
          <p className="border-b border-white/30 px-5 py-3 text-[9px] font-black tracking-[.22em] uppercase">{text.choose}</p>
          {categories.map((category, index) => {
            const active = category.type === activeType
            return (
              <button
                key={category.type}
                type="button"
                onMouseEnter={() => setActiveType(category.type)}
                onFocus={() => setActiveType(category.type)}
                onClick={() => setActiveType(category.type)}
                className="group grid w-full cursor-pointer grid-cols-[3rem_1fr_auto] items-center border-b border-white/20 text-left transition"
                style={{ background: active ? category.color : 'transparent', color: active ? '#11110f' : 'inherit' }}
              >
                <span className="grid h-full min-h-16 place-items-center border-r border-current/30 text-[10px] font-black">{String(index + 1).padStart(2, '0')}</span>
                <span className="px-4 text-[clamp(1.2rem,2.5vw,2.3rem)] leading-none font-black tracking-[-.05em] uppercase">{isCn ? category.cn : category.en}</span>
                <span className="px-5 text-2xl transition group-hover:rotate-12 group-hover:scale-125">{category.mark}</span>
              </button>
            )
          })}
        </div>

        <div className="relative min-h-[70vh] overflow-hidden" style={{ background: activeCategory.color }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeType} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <div className="absolute inset-0 grid grid-cols-5">
                {activeCities.map((city, index) => (
                  <Link key={city.name} href={`/works/invisible-cities/${city.type}/${city.name}`} className="group relative overflow-hidden border-r border-black/30">
                    <Image src={`/works/invisible-cities/${city.type}/${city.name}.png`} alt="" fill className="object-cover grayscale opacity-30 mix-blend-multiply transition duration-700 group-hover:scale-125 group-hover:opacity-80 group-hover:grayscale-0" />
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-black/60">0{index + 1}</span>
                    <span className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-[clamp(1.8rem,4vw,4.5rem)] leading-none font-black tracking-[-.06em] text-[#11110f] uppercase [writing-mode:vertical-rl] transition group-hover:[writing-mode:horizontal-tb]">{isCn ? city.cnName : city.name}</span>
                  </Link>
                ))}
              </div>
              <div className="pointer-events-none absolute top-1/2 left-1/2 grid h-44 w-44 -translate-1/2 place-items-center rounded-full border border-black bg-[#11110f] text-center text-[#ece9df] shadow-2xl">
                <span className="text-6xl font-black">{activeCategory.mark}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Link href={`/works/invisible-cities/${activeType}`} className="group flex items-center justify-between bg-[#ece9df] px-5 py-7 text-[#11110f] transition hover:bg-[#ff6a4e] md:px-8">
        <span className="text-[clamp(2rem,5vw,5rem)] font-black tracking-[-.06em] uppercase">{text.enter}: {isCn ? activeCategory.cn : activeCategory.en}</span>
        <ArrowUpRight className="h-10 w-10 transition group-hover:translate-x-2 group-hover:-translate-y-2 md:h-16 md:w-16" />
      </Link>
    </main>
  )
}
