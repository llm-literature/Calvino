'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/app/context/LanguageContext'
import { City } from '@/lib/types'
import { categoryScenes } from '../scenes/CategoryScenes'

const categoryDirections: Record<string, { cn: string; en: string; instruction: string; cnInstruction: string; mode: string }> = {
  memory: { cn: '城市与记忆', en: 'Cities & Memory', instruction: 'Read backward. Every city is already a ruin in the mind.', cnInstruction: '向后阅读。每座城市在记忆里都已成为废墟。', mode: '01 / PALIMPSEST' },
  desire: { cn: '城市与欲望', en: 'Cities & Desire', instruction: 'What attracts you is also what captures you.', cnInstruction: '吸引你的事物，也正在捕获你。', mode: '02 / APPETITE' },
  signs: { cn: '城市与符号', en: 'Cities & Signs', instruction: 'Nothing means itself. Follow the arrows until language breaks.', cnInstruction: '没有事物仅仅意味着自身。沿着箭头走到语言失效。', mode: '03 / SEMIOTICS' },
  thin: { cn: '轻盈的城市', en: 'Thin Cities', instruction: 'Gravity is suspended, never abolished.', cnInstruction: '重力只是被悬置，从未消失。', mode: '04 / TENSION' },
  trading: { cn: '贸易的城市', en: 'Trading Cities', instruction: 'Goods move. Stories, glances and relations move further.', cnInstruction: '货物流动，故事、目光与关系走得更远。', mode: '05 / EXCHANGE' },
  eyes: { cn: '城市与眼睛', en: 'Cities & Eyes', instruction: 'The observer is part of the architecture.', cnInstruction: '观看者就是建筑的一部分。', mode: '06 / GAZE' },
  names: { cn: '城市与名字', en: 'Cities & Names', instruction: 'Say the name. Watch the actual city disappear.', cnInstruction: '说出名字，然后看真实的城市消失。', mode: '07 / NOMENCLATURE' },
  dead: { cn: '城市与死者', en: 'Cities & the Dead', instruction: 'The dead do not leave. They reorganize the living.', cnInstruction: '死者没有离开，他们重新排列生者。', mode: '08 / AFTERLIFE' },
  sky: { cn: '城市与天空', en: 'Cities & the Sky', instruction: 'Perfect diagrams produce imperfect lives.', cnInstruction: '完美图式，制造不完美的生命。', mode: '09 / COSMOS' },
  continuous: { cn: '连绵的城市', en: 'Continuous Cities', instruction: 'There is no outside left.', cnInstruction: '已经不再存在城外。', mode: '10 / SATURATION' },
  hidden: { cn: '隐蔽的城市', en: 'Hidden Cities', instruction: 'Another city is growing inside this one.', cnInstruction: '另一座城市正在这座城市内部生长。', mode: '11 / LATENCY' },
}

export default function CategoryExperience({ cities, category }: { cities: City[]; category: string }) {
  const { language } = useLanguage()
  const direction = categoryDirections[category]
  const isCn = language === 'cn'
  const Scene = categoryScenes[category]

  return (
    <main className={`category-experience category-${category} min-h-screen bg-[#e9e7df] text-[#151513]`}>
      <header className="flex items-center justify-between border-b border-black px-4 py-4 md:px-7">
        <Link href="/works/invisible-cities" className="flex items-center gap-2 text-[10px] font-black tracking-[0.18em] uppercase hover:opacity-50">
          <ArrowLeft className="h-4 w-4" /> Atlas
        </Link>
        <span className="text-[10px] font-black tracking-[0.18em]">{direction.mode}</span>
      </header>

      <Scene
        cities={cities}
        cn={isCn}
        title={isCn ? direction.cn : direction.en}
        instruction={isCn ? direction.cnInstruction : direction.instruction}
      />
    </main>
  )
}
