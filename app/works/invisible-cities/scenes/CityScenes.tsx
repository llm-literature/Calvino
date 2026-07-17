'use client'

import type { ComponentType } from 'react'

export interface SceneProps {
  cn: boolean
}
const t = (cn: boolean, zh: string, en: string) => (cn ? zh : en)

// Cities & Memory — memory is treated as an action, never a texture.
function Diomira({ cn }: SceneProps) {
  return (
    <div className="scene scene-diomira relative grid h-full place-items-center overflow-hidden bg-[#170d08] text-[#ffc95c]">
      <div className="absolute inset-0 grid grid-cols-6 gap-5 p-8 opacity-35">
        {Array.from({ length: 18 }, (_, i) => (
          <i key={i} className="aspect-square rounded-t-full border border-current" />
        ))}
      </div>
      <button className="group relative z-10 h-44 w-44 rounded-full border border-current text-xs tracking-[.25em] uppercase transition hover:bg-[#ffc95c] hover:text-[#170d08]">
        {t(cn, '按住九月的黄昏', 'Hold September dusk')}
        <span className="absolute inset-5 scale-50 rounded-full bg-current opacity-0 transition duration-1000 group-hover:scale-100 group-hover:opacity-100" />
      </button>
      <p className="absolute bottom-5 text-[10px] tracking-[.2em]">
        {t(
          cn,
          '你羡慕的不是城市，是曾经快乐的自己',
          'You envy not the city, but your once-happy self'
        )}
      </p>
    </div>
  )
}

function Isidora({ cn }: SceneProps) {
  return (
    <div className="scene scene-isidora relative h-full overflow-hidden bg-[#d9c7a8] text-[#281c31]">
      <div className="absolute inset-0 flex items-end justify-center gap-5 p-8">
        {['望远镜', '小提琴', '第三个女人', '斗鸡'].map((x, i) => (
          <div
            key={x}
            className="group flex h-[65%] w-16 origin-bottom items-start justify-center border-x border-current transition hover:h-[90%] hover:bg-[#7c43d6] hover:text-white"
          >
            <span className="mt-4 [writing-mode:vertical-rl]">
              {cn ? x : ['TELESCOPE', 'VIOLIN', 'THIRD WOMAN', 'COCKFIGHT'][i]}
            </span>
          </div>
        ))}
      </div>
      <p className="absolute bottom-16 left-5 max-w-[calc(100%_-_2.5rem)] text-2xl font-black md:bottom-6 md:left-6 md:max-w-xs md:text-3xl">
        {t(cn, '你年轻时渴望抵达。你年老时终于抵达。', 'You desired it young. You arrived old.')}
      </p>
    </div>
  )
}

function Zaira({ cn }: SceneProps) {
  return (
    <div className="scene scene-zaira relative h-full overflow-hidden bg-[#d5c2a2] text-[#281b18]">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="group absolute left-0 w-full border-t border-current transition hover:bg-[#a82c25] hover:text-white"
          style={{ top: `${10 + i * 9}%`, transform: `translateX(${i % 2 ? 8 : -6}%)` }}
        >
          <span className="ml-[15%] text-[10px] opacity-0 group-hover:opacity-100">
            {t(cn, `第 ${i + 1} 层：一件没有被写下的事`, `Layer ${i + 1}: an unwritten event`)}
          </span>
        </div>
      ))}
      <p className="absolute right-6 bottom-6 max-w-sm text-right text-2xl font-black">
        {t(
          cn,
          '城市不由尺寸构成，而由发生过的事情构成。',
          'A city is measured by what happened there.'
        )}
      </p>
    </div>
  )
}

function Zora({ cn }: SceneProps) {
  return (
    <div className="scene scene-zora group relative grid h-full grid-cols-4 grid-rows-4 bg-[#172238] p-5 text-[#d8d8cf]">
      {Array.from({ length: 16 }, (_, i) => (
        <div
          key={i}
          className="grid place-items-center border border-current text-xs transition duration-700 group-hover:opacity-0"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {String.fromCharCode(65 + i)}
        </div>
      ))}
      <p className="absolute inset-0 grid place-items-center p-10 text-center text-3xl font-black opacity-0 transition delay-700 group-hover:opacity-100">
        {t(
          cn,
          '为了被完整记住，左拉停止变化；因此她死了。',
          'To be perfectly remembered, Zora stopped changing—and died.'
        )}
      </p>
    </div>
  )
}

function Maurilia({ cn }: SceneProps) {
  return (
    <div className="scene scene-maurilia relative flex h-full items-center justify-center overflow-hidden bg-[#ead3a2] text-[#2b2119]">
      <div className="group relative aspect-[4/3] w-[72%] border-8 border-white bg-[#b84432] shadow-2xl">
        <div className="absolute inset-0 grid place-items-center text-5xl font-black transition group-hover:opacity-0">
          {t(cn, '从前', 'THEN')}
        </div>
        <div className="absolute inset-0 grid translate-x-full place-items-center bg-[#29251f] text-5xl font-black text-white transition group-hover:translate-x-0">
          {t(cn, '现在', 'NOW')}
        </div>
      </div>
      <p className="absolute bottom-5 text-xs">
        {t(
          cn,
          '请称赞明信片上的城市，但不要相信它们是同一座。',
          'Praise the postcard. Do not pretend it is the same city.'
        )}
      </p>
    </div>
  )
}

// Cities & Desire
function Dorothea({ cn }: SceneProps) {
  return (
    <div className="scene scene-dorothea grid h-full grid-cols-2 bg-[#b9dbc9] text-[#0d302e]">
      <div className="grid place-items-center border-r border-current p-8">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} className="h-12 w-12 border border-current" />
          ))}
        </div>
        <b>{t(cn, '四座塔、七扇门、九个区', '4 towers, 7 gates, 9 districts')}</b>
      </div>
      <div className="group grid place-items-center p-8 text-center">
        <p className="text-4xl font-black transition group-hover:scale-125">
          {t(
            cn,
            '或者：一个赶骆驼的人第一次感到，世界仍在等待他。',
            'Or: a camel driver feels, for the first time, the world waiting for him.'
          )}
        </p>
      </div>
    </div>
  )
}

function Anastasia({ cn }: SceneProps) {
  return (
    <div className="scene scene-anastasia relative h-full overflow-hidden bg-[#35090b] text-[#ffb29b]">
      <div className="absolute inset-0 flex animate-[spin_18s_linear_infinite] items-center justify-center">
        <div className="h-[75%] w-[75%] rounded-full border-[18px] border-dotted border-current" />
      </div>
      <button className="group absolute inset-[30%] rounded-full bg-[#ff3b1f] text-sm font-black text-white uppercase">
        <span className="group-hover:hidden">{t(cn, '满足欲望', 'Satisfy desire')}</span>
        <span className="hidden group-hover:inline">
          {t(cn, '现在为它工作', 'Now work for it')}
        </span>
      </button>
    </div>
  )
}

function Despina({ cn }: SceneProps) {
  return (
    <div className="scene scene-despina group relative h-full overflow-hidden bg-[#e3c579] text-[#132534]">
      <div className="absolute inset-y-0 left-0 grid w-1/2 place-items-center border-r border-current text-5xl font-black transition group-hover:-translate-x-full">
        {t(cn, '骆驼', 'CAMEL')}
      </div>
      <div className="absolute inset-y-0 right-0 grid w-1/2 place-items-center text-5xl font-black transition group-hover:translate-x-full">
        {t(cn, '船', 'SHIP')}
      </div>
      <p className="absolute inset-0 -z-10 grid place-items-center p-12 text-center text-3xl font-black group-hover:z-10">
        {t(
          cn,
          '每座城市，都是你离开的地方所缺少的东西。',
          'Every city is what your place of departure lacks.'
        )}
      </p>
    </div>
  )
}

function Fedora({ cn }: SceneProps) {
  return (
    <div className="scene scene-fedora relative grid h-full grid-cols-3 gap-5 overflow-hidden bg-[#14243a] p-8 text-[#c9dcef]">
      {Array.from({ length: 9 }, (_, i) => (
        <button
          key={i}
          className="group grid aspect-square place-items-center rounded-full border border-current transition hover:scale-125 hover:bg-[#285aff]"
        >
          <span className="text-[10px] opacity-0 group-hover:opacity-100">
            {t(cn, `可能的城市 ${i + 1}`, `Possible city ${i + 1}`)}
          </span>
        </button>
      ))}
      <p className="absolute bottom-4 left-4 text-xs">
        {t(cn, '现实只有一个。放弃的未来有无数个。', 'One reality. Countless abandoned futures.')}
      </p>
    </div>
  )
}

function Zobeide({ cn }: SceneProps) {
  return (
    <div className="scene scene-zobeide relative h-full overflow-hidden bg-[#181426] text-[#eee6da]">
      <div className="absolute inset-[-15%] animate-[spin_40s_linear_infinite] [background:repeating-radial-gradient(circle,transparent_0_22px,#b99ce8_23px_24px)]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-16 w-16 rounded-full bg-white shadow-[0_0_80px_white]" />
      </div>
      <p className="absolute bottom-6 left-1/2 w-3/4 -translate-x-1/2 text-center font-black">
        {t(
          cn,
          '他们造了一座迷宫，想困住梦里的女人。最后只困住了自己。',
          'They built a maze to trap a woman from a dream. It trapped only them.'
        )}
      </p>
    </div>
  )
}

// Cities & Signs
function Tamara({ cn }: SceneProps) {
  const marks = ['♜', '☞', '⌁', '⚑', '◉', '♢', '↯', '☂', '⚖']
  return (
    <div className="scene scene-tamara grid h-full grid-cols-3 bg-[#e7e1ce] text-[#111c24]">
      {marks.map((m, i) => (
        <button
          key={m}
          className="group relative border border-current text-5xl hover:bg-[#ed3140] hover:text-white"
        >
          {m}
          <span className="absolute inset-0 grid place-items-end p-2 text-[9px] opacity-0 group-hover:opacity-100">
            {t(cn, '这个符号只说明另一个符号', 'This sign explains another sign')} {i + 1}
          </span>
        </button>
      ))}
    </div>
  )
}

function Zirma({ cn }: SceneProps) {
  const visions = cn ? ['盲人', '疯子', '女孩与豹'] : ['BLIND MAN', 'MADMAN', 'GIRL + PANTHER']
  return (
    <div className="scene scene-zirma relative flex h-full overflow-hidden bg-[#f0d24f] text-[#17141b]">
      {visions.map((v) => (
        <div
          key={v}
          className="group flex flex-1 items-center justify-center border-r border-current transition hover:flex-[3] hover:bg-[#df2e70] hover:text-white"
        >
          <span className="font-black [writing-mode:vertical-rl] group-hover:[writing-mode:horizontal-tb]">
            {v}
          </span>
          <div className="hidden grid-cols-3 gap-2 p-4 group-hover:grid">
            {Array.from({ length: 9 }, (_, j) => (
              <i key={j} className="h-4 w-4 rounded-full bg-current" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Zoe({ cn }: SceneProps) {
  return (
    <div className="scene scene-zoe relative grid h-full grid-cols-3 grid-rows-3 bg-[#e4ded2] text-[#191919]">
      {['PALACE', 'MARKET', 'PRISON', 'TEMPLE', 'HOME', 'THEATRE', 'BATH', 'SCHOOL', 'GRAVE'].map(
        (x) => (
          <div
            key={x}
            className="group grid place-items-center border border-current text-xs font-black hover:bg-[#ff4d00]"
          >
            <span className="group-hover:hidden">{x}</span>
            <span className="hidden group-hover:block">?</span>
          </div>
        )
      )}
      <p className="pointer-events-none absolute inset-0 grid place-items-center text-center text-4xl font-black opacity-0 hover:opacity-100">
        {t(
          cn,
          '当任何地方都可以做任何事，城市便不可阅读。',
          'When anything can happen anywhere, the city becomes unreadable.'
        )}
      </p>
    </div>
  )
}

function Hypatia({ cn }: SceneProps) {
  return (
    <div className="scene scene-hypatia relative h-full overflow-hidden bg-[#c3e3da] text-[#062c32]">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="grid place-items-center border-r border-current text-6xl">🌸</div>
        <div className="grid place-items-center text-6xl">🦀</div>
      </div>
      <div className="group absolute inset-0 grid place-items-center bg-[#062c32]/0 transition hover:bg-[#062c32] hover:text-white">
        <p className="max-w-md translate-y-20 text-center text-2xl font-black opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          {t(
            cn,
            '你寻找少女，于是发现自杀者。事物拒绝使用你的语言。',
            'You seek bathers and find suicides. Things refuse your language.'
          )}
        </p>
      </div>
    </div>
  )
}

function Olivia({ cn }: SceneProps) {
  return (
    <div className="scene scene-olivia relative h-full overflow-hidden bg-[#e3ce90] text-[#2a2112]">
      <p className="absolute bottom-16 left-5 z-10 max-w-[calc(100%_-_2.5rem)] text-3xl font-black md:bottom-6 md:left-6 md:max-w-sm md:text-4xl">
        {t(cn, '宫殿。流苏。喷泉。孔雀。', 'Palaces. Tassels. Fountains. Peacocks.')}
      </p>
      <div className="group absolute inset-0 grid place-items-center">
        <div className="h-24 w-24 bg-[#e66b2e] transition duration-700 group-hover:h-full group-hover:w-full" />
        <p className="absolute max-w-lg text-center text-2xl font-black text-white opacity-0 delay-300 group-hover:opacity-100">
          {t(
            cn,
            '华丽的词句，描绘出一座被烟尘和车轮碾压的城市。',
            'Splendid words reveal a city ground down by smoke and wheels.'
          )}
        </p>
      </div>
    </div>
  )
}

// Thin Cities
function Isaura({ cn }: SceneProps) {
  return (
    <div className="scene scene-isaura relative h-full overflow-hidden bg-[#b9dfda] text-[#082630]">
      <input
        id="isaura-water"
        type="range"
        className="peer absolute bottom-8 left-[10%] z-20 w-[80%] accent-[#008f91]"
      />
      <div className="absolute inset-x-0 bottom-0 h-[12%] bg-[#008f91] transition-all duration-700 peer-hover:h-[75%]" />
      <div className="absolute inset-0 flex justify-around">
        {Array.from({ length: 8 }, (_, i) => (
          <i key={i} className="h-full w-px bg-current">
            <span className="absolute top-[15%] -translate-x-1/2 text-xl">⌁</span>
          </i>
        ))}
      </div>
      <p className="absolute bottom-16 left-5 max-w-[calc(100%_-_2.5rem)] text-2xl font-black md:bottom-6 md:left-6 md:max-w-sm md:text-3xl">
        {t(
          cn,
          '移动水位。看不见的湖决定看得见的城市。',
          'Move the water. The invisible lake determines the visible city.'
        )}
      </p>
    </div>
  )
}

function Zenodia({ cn }: SceneProps) {
  return (
    <div className="scene scene-zenodia relative h-full overflow-hidden bg-[#ead887] text-[#2a2110]">
      <div className="absolute inset-0 flex items-end justify-around px-6">
        {[35, 72, 48, 86, 58, 42].map((h, i) => (
          <div
            key={i}
            className="group relative w-10 border-x border-current transition hover:-translate-y-10"
            style={{ height: `${h}%` }}
          >
            <span className="absolute top-0 left-1/2 h-10 w-20 -translate-x-1/2 border border-current group-hover:bg-[#d95f2a]" />
          </div>
        ))}
      </div>
      <p className="absolute bottom-16 left-5 max-w-[calc(100%_-_2.5rem)] text-xl font-black md:bottom-5 md:max-w-md md:text-2xl">
        {t(
          cn,
          '城市可以从欲望推知；幸福的城市却没有形状。',
          'Cities reveal desires. Happy cities have no form.'
        )}
      </p>
    </div>
  )
}

function Armilla({ cn }: SceneProps) {
  return (
    <div className="scene scene-armilla relative h-full overflow-hidden bg-[#d2eee5] text-[#09282d]">
      <div className="absolute inset-0 [background-size:82px_82px] [background:linear-gradient(90deg,transparent_48%,currentColor_49%_51%,transparent_52%),linear-gradient(transparent_48%,currentColor_49%_51%,transparent_52%)]" />
      {['◯', '♒', '◡', '≈', '◌'].map((x, i) => (
        <button
          key={i}
          className="absolute z-10 grid h-14 w-14 place-items-center rounded-full bg-[#df4b2f] text-2xl text-white transition hover:scale-[2]"
          style={{ left: `${12 + i * 18}%`, top: `${20 + (i % 3) * 23}%` }}
        >
          {x}
        </button>
      ))}
      <p className="absolute right-5 bottom-5 max-w-sm text-right font-black">
        {t(
          cn,
          '没有墙、屋顶或地板。水管仍记得房间在哪里。',
          'No walls, roofs or floors. The pipes remember the rooms.'
        )}
      </p>
    </div>
  )
}

function Sophronia({ cn }: SceneProps) {
  return (
    <div className="scene scene-sophronia group relative grid h-full grid-cols-2 overflow-hidden bg-[#f0debc] text-[#1f1830]">
      <div className="flex items-center justify-center overflow-hidden border-r border-current bg-[#ff3e6c] text-7xl transition duration-700 group-hover:translate-x-full">
        ◉
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-2 p-7 transition duration-700 group-hover:-translate-x-full">
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} className="border border-current" />
        ))}
      </div>
      <p className="absolute inset-0 -z-10 grid place-items-center p-12 text-center text-3xl font-black group-hover:z-10">
        {t(
          cn,
          '每年，一半城市拆走。留下来的那一半，才是临时的。',
          'Each year half the city leaves. The half that stays is temporary.'
        )}
      </p>
    </div>
  )
}

function Octavia({ cn }: SceneProps) {
  return (
    <div className="scene scene-octavia relative h-full overflow-hidden bg-[#141c23] text-[#d8d5c8]">
      <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(63deg,transparent_0_28px,currentColor_29px_30px),repeating-linear-gradient(-63deg,transparent_0_28px,currentColor_29px_30px)]" />
      <button className="group absolute top-1/2 left-1/2 h-24 w-52 -translate-1/2 border border-current bg-[#141c23] font-black transition hover:scale-110 hover:rotate-6">
        {t(cn, '走过蛛网', 'CROSS THE WEB')}
        <span className="absolute top-full left-1/2 hidden h-[40vh] w-px bg-[#e7462f] group-hover:block" />
      </button>
      <p className="absolute bottom-5 left-5 text-sm">
        {t(
          cn,
          '居民知道网能承受的，比他们的生命更少。',
          'They know the net will last less than their lives.'
        )}
      </p>
    </div>
  )
}

// Trading Cities
function Euphemia({ cn }: SceneProps) {
  const goods = cn
    ? ['姜', '棉花', '开心果', '罂粟籽', '肉豆蔻', '金色薄纱']
    : ['GINGER', 'COTTON', 'PISTACHIO', 'POPPY', 'NUTMEG', 'GOLD CLOTH']
  return (
    <div className="scene scene-euphemia grid h-full grid-cols-3 bg-[#e5b76d] text-[#281416]">
      {goods.map((g, i) => (
        <button
          key={g}
          className="group border border-current p-3 font-black hover:bg-[#b81c1c] hover:text-white"
        >
          <span className="group-hover:hidden">{g}</span>
          <span className="hidden text-xs group-hover:block">
            {t(
              cn,
              `换成一个关于夜晚、狼与远方的故事 ${i + 1}`,
              `Trade for a story of night, wolves and distance ${i + 1}`
            )}
          </span>
        </button>
      ))}
    </div>
  )
}

function Chloe({ cn }: SceneProps) {
  return (
    <div className="scene scene-chloe relative h-full overflow-hidden bg-[#efc5d3] text-[#26101e]">
      {Array.from({ length: 14 }, (_, i) => (
        <button
          key={i}
          className="group absolute h-8 w-8 rounded-full border border-current transition hover:z-10 hover:h-40 hover:w-40 hover:bg-[#ff2851] hover:text-white"
          style={{ left: `${6 + ((i * 17) % 88)}%`, top: `${8 + ((i * 29) % 78)}%` }}
        >
          <span className="hidden p-3 text-[10px] group-hover:block">
            {t(
              cn,
              '一次问候。一次触碰。一生。都没有发生。',
              'A greeting. A touch. A lifetime. None occurred.'
            )}
          </span>
        </button>
      ))}
      <p className="pointer-events-none absolute inset-0 grid place-items-center text-5xl font-black opacity-20">
        {t(cn, '不要移开目光', 'DO NOT LOOK AWAY')}
      </p>
    </div>
  )
}

function Eutropia({ cn }: SceneProps) {
  return (
    <div className="scene scene-eutropia relative grid h-full grid-cols-3 gap-5 bg-[#cad8b2] p-8 text-[#13261e]">
      {Array.from({ length: 6 }, (_, i) => (
        <button
          key={i}
          className="group border border-current text-3xl font-black transition hover:translate-x-4 hover:-translate-y-4 hover:bg-[#e8482d] hover:text-white"
        >
          {String.fromCharCode(65 + i)}
          <span className="block text-[9px] opacity-0 group-hover:opacity-100">
            {t(cn, '同样的生活，换一座空城', 'Same lives, another empty city')}
          </span>
        </button>
      ))}
      <p className="absolute right-4 bottom-2 text-xs">
        {t(
          cn,
          '厌倦时，全城搬家并互换职业、配偶与记忆。',
          'When bored, everyone moves and exchanges jobs, spouses, memories.'
        )}
      </p>
    </div>
  )
}

function Ersilia({ cn }: SceneProps) {
  return (
    <div className="scene scene-ersilia relative h-full overflow-hidden bg-[#161616] text-[#ded8cd]">
      <div className="absolute inset-0">
        {Array.from({ length: 18 }, (_, i) => (
          <i
            key={i}
            className="absolute top-1/2 left-1/2 h-px w-[85%] origin-left bg-current transition hover:h-1 hover:bg-[#ff4d24]"
            style={{ transform: `rotate(${i * 20}deg)` }}
          />
        ))}
      </div>
      <button className="group absolute top-1/2 left-1/2 h-28 w-28 -translate-1/2 rounded-full border bg-[#161616] font-black hover:bg-[#ff4d24]">
        {t(cn, '拆掉房屋', 'REMOVE HOUSES')}
        <span className="absolute top-full left-1/2 mt-3 hidden w-60 -translate-x-1/2 text-xs group-hover:block">
          {t(
            cn,
            '关系留下来，成为一座无法居住的城。',
            'Relations remain: a city no one can inhabit.'
          )}
        </span>
      </button>
    </div>
  )
}

function Esmeralda({ cn }: SceneProps) {
  return (
    <div className="scene scene-esmeralda relative h-full overflow-hidden bg-[#bde0d5] text-[#06262c]">
      <div className="absolute inset-[-20%] transition duration-[3000ms] [background:repeating-radial-gradient(ellipse,transparent_0_30px,#087b82_31px_34px,transparent_35px_55px,#ff7849_56px_58px)] hover:scale-150 hover:rotate-90" />
      <p className="absolute top-1/2 left-1/2 w-72 -translate-1/2 bg-[#bde0d5] p-6 text-center text-2xl font-black">
        {t(
          cn,
          '两点之间，最短的路从来不是直线。',
          'Between two points, the shortest route is never straight.'
        )}
      </p>
    </div>
  )
}

// Cities & Eyes
function Valdrada({ cn }: SceneProps) {
  return (
    <div className="scene scene-valdrada group relative h-full overflow-hidden bg-[#badbe9] text-[#071d2d]">
      <div className="absolute inset-x-0 top-0 grid h-1/2 place-items-center border-b border-current text-6xl font-black">
        {t(cn, '动作', 'ACT')}
      </div>
      <div className="absolute inset-x-0 bottom-0 grid h-1/2 scale-y-[-1] place-items-center text-6xl font-black opacity-50 transition group-hover:scale-x-[-1] group-hover:scale-y-[-1]">
        {t(cn, '动作', 'ACT')}
      </div>
      <p className="absolute top-1/2 left-1/2 z-10 -translate-1/2 bg-[#ff5e45] px-5 py-2 text-xs font-black text-white">
        {t(cn, '倒影记住你的秘密', 'THE REFLECTION REMEMBERS')}
      </p>
    </div>
  )
}

function Zemrude({ cn }: SceneProps) {
  return (
    <div className="scene scene-zemrude group relative h-full overflow-hidden bg-[#d5e4e7] text-[#172031]">
      <div className="absolute inset-x-0 top-0 flex h-1/2 items-end justify-center bg-[#f0a52b] p-8 pb-12 text-center text-4xl font-black transition group-hover:-translate-y-full md:text-5xl">
        {t(cn, '抬头：窗、旗帜、喷泉', 'LOOK UP: windows, flags, fountains')}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#4a5568] p-8 text-5xl font-black text-white transition group-hover:translate-y-full">
        {t(cn, '低头：水沟、鱼鳞、废纸', 'LOOK DOWN: drains, scales, scraps')}
      </div>
      <p className="absolute inset-0 -z-10 grid place-items-center text-3xl font-black group-hover:z-10">
        {t(cn, '城市的形状，就是你的心情。', 'The city takes the shape of your mood.')}
      </p>
    </div>
  )
}

function Baucis({ cn }: SceneProps) {
  return (
    <div className="scene scene-baucis relative h-full overflow-hidden bg-[#dbe5d4] text-[#18232a]">
      <div className="absolute inset-x-0 top-0 h-[28%] border-b-8 border-current bg-[#83a14a]" />
      <div className="absolute inset-0 flex justify-around">
        {Array.from({ length: 9 }, (_, i) => (
          <i key={i} className="h-[78%] w-px bg-current" />
        ))}
      </div>
      <button className="group absolute right-7 bottom-7 h-28 w-28 rounded-full border border-current bg-[#dbe5d4] text-xs font-black hover:scale-150">
        <span className="group-hover:hidden">{t(cn, '望远镜', 'TELESCOPE')}</span>
        <span className="hidden group-hover:inline">
          {t(
            cn,
            '他们凝视大地：爱它、怕它，或敬畏它。',
            'They gaze at Earth: love, fear, or reverence.'
          )}
        </span>
      </button>
    </div>
  )
}

function Phyllis({ cn }: SceneProps) {
  return (
    <div className="scene scene-phyllis relative h-full overflow-hidden bg-[#d7dcda] text-[#1a2430]">
      <div className="grid h-full grid-cols-4 grid-rows-4">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className="group border border-current bg-transparent transition duration-500 hover:bg-[#e45c35]"
          >
            <span className="grid h-full place-items-center text-2xl group-hover:hidden">
              {['⌂', '⌒', '◇', '╳'][i % 4]}
            </span>
          </div>
        ))}
      </div>
      <p className="pointer-events-none absolute inset-0 grid place-items-center p-12 text-center text-3xl font-black opacity-0 transition hover:opacity-100">
        {t(cn, '你熟悉的路线，抹除了你曾经看见的城市。', 'Habit erases the city you once saw.')}
      </p>
    </div>
  )
}

function Moriana({ cn }: SceneProps) {
  return (
    <div className="scene scene-moriana group relative h-full overflow-hidden bg-[#d8e8de] text-[#10272d]">
      <div className="absolute inset-0 grid place-items-center bg-[#d8e8de] text-7xl font-black transition duration-700 group-hover:-translate-x-full">
        {t(cn, '玻璃', 'GLASS')}
      </div>
      <div className="absolute inset-0 grid translate-x-full place-items-center bg-[#291b1b] p-10 text-center text-4xl font-black text-[#db4f37] transition duration-700 group-hover:translate-x-0">
        {t(cn, '锈铁、麻袋、腐木、废管', 'RUST, SACKS, ROTTEN WOOD, WASTE PIPES')}
      </div>
    </div>
  )
}

// Cities & Names
function Aglaura({ cn }: SceneProps) {
  const words = cn
    ? ['谨慎', '懒惰', '骄傲', '古老', '固执', '奇异']
    : ['CAUTIOUS', 'LAZY', 'PROUD', 'ANCIENT', 'STUBBORN', 'STRANGE']
  return (
    <div className="scene scene-aglaura relative flex h-full flex-wrap content-center justify-center gap-3 overflow-hidden bg-[#e2d0be] p-8 text-[#271c27]">
      {words.map((w) => (
        <span
          key={w}
          className="group border border-current px-4 py-3 text-2xl font-black transition hover:scale-150 hover:bg-[#ba3152] hover:text-transparent"
        >
          <i className="not-italic group-hover:hidden">{w}</i>
        </span>
      ))}
      <p className="absolute bottom-5 text-xs font-black">
        {t(
          cn,
          '关于城市说得越多，城市本身越不可见。',
          'The more they say about the city, the less the city can be seen.'
        )}
      </p>
    </div>
  )
}

function Leandra({ cn }: SceneProps) {
  return (
    <div className="scene scene-leandra grid h-full grid-cols-2 bg-[#e8d2b2] text-[#291b16]">
      <div className="group relative grid place-items-center border-r border-current">
        <span className="text-7xl">⚿</span>
        <p className="absolute p-8 text-center opacity-0 group-hover:opacity-100">
          {t(cn, '门边的神：跟随住户和钥匙离开', 'Gods of doors: they follow tenants and keys')}
        </p>
      </div>
      <div className="group relative grid place-items-center">
        <span className="text-7xl">♨</span>
        <p className="absolute p-8 text-center opacity-0 group-hover:opacity-100">
          {t(
            cn,
            '炉边的神：属于房屋，记得所有家庭',
            'Gods of hearths: they belong to the house and remember every family'
          )}
        </p>
      </div>
      <p className="absolute bottom-16 left-1/2 max-w-[calc(100%_-_2.5rem)] -translate-x-1/2 bg-[#c75b39] px-5 py-2 text-center text-xs font-black text-white md:top-5 md:bottom-auto md:max-w-none md:whitespace-nowrap">
        {t(cn, '听他们争论谁才是真正的莱安德拉', 'Hear them dispute the true Leandra')}
      </p>
    </div>
  )
}

function Pyrrha({ cn }: SceneProps) {
  return (
    <div className="scene scene-pyrrha group relative grid h-full place-items-center overflow-hidden bg-[#e8d6c2] text-[#281a22]">
      <h3 className="text-[18vw] leading-none font-black tracking-[-.1em] transition duration-700 group-hover:scale-[2.5] group-hover:opacity-0">
        PYRRHA
      </h3>
      <div className="absolute inset-0 grid scale-50 place-items-center opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100">
        <div className="h-[60%] w-[35%] border-[12px] border-[#e23d65]" />
        <p className="absolute bottom-8 max-w-md text-center font-black">
          {t(
            cn,
            '见到城市之后，名字不再能容纳它。',
            'Once seen, the city no longer fits inside its name.'
          )}
        </p>
      </div>
    </div>
  )
}

function Clarice({ cn }: SceneProps) {
  return (
    <div className="scene scene-clarice relative h-full overflow-hidden bg-[#d7c6a6] text-[#29231b]">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
        {Array.from({ length: 20 }, (_, i) => (
          <button
            key={i}
            className="group border border-current text-2xl hover:bg-[#b8402d] hover:text-white"
          >
            {['♜', '⌂', '♢', '⚱', '╬'][i % 5]}
            <span className="hidden text-[8px] group-hover:block">
              {t(cn, '从旧城拆下，装进新城', 'Taken from old Clarice, fitted to new')}
            </span>
          </button>
        ))}
      </div>
      <p className="pointer-events-none absolute inset-0 grid place-items-center p-20 text-center text-4xl font-black opacity-0 backdrop-blur-sm transition hover:opacity-100">
        {t(
          cn,
          '每次复兴都用废墟拼出；没人知道哪一块属于最初的城市。',
          'Every rebirth is assembled from ruins. No one knows the original pieces.'
        )}
      </p>
    </div>
  )
}

function Irene({ cn }: SceneProps) {
  return (
    <div className="scene scene-irene relative h-full overflow-hidden bg-[#281c2c] text-[#e6c4cb]">
      <div className="absolute inset-x-[10%] bottom-[18%] h-[35%] [background-size:32px_27px] blur-[2px] transition duration-[2000ms] [background:radial-gradient(circle_at_20%_30%,#ff785a_0_2px,transparent_3px),radial-gradient(circle_at_70%_60%,#ffcfb8_0_3px,transparent_4px)] hover:scale-[2.8] hover:blur-[18px]" />
      <p className="absolute bottom-16 left-5 max-w-[calc(100%_-_2.5rem)] text-2xl font-black md:bottom-6 md:left-6 md:max-w-sm md:text-3xl">
        {t(cn, '靠近她，远方的伊莱那就消失。', 'Approach her, and distant Irene disappears.')}
      </p>
    </div>
  )
}

// Cities & the Dead
function Melania({ cn }: SceneProps) {
  const roles = cn
    ? ['军人', '寄生虫', '纨绔子弟', '妓女', '吝啬父亲', '愚仆']
    : ['SOLDIER', 'PARASITE', 'DANDY', 'COURTESAN', 'MISER', 'FOOL']
  return (
    <div className="scene scene-melania relative grid h-full grid-cols-3 bg-[#ddc1aa] text-[#211414]">
      {roles.map((r, i) => (
        <button
          key={r}
          className="group border border-current font-black hover:bg-[#a8211f] hover:text-white"
        >
          <span>{r}</span>
          <span className="hidden text-[9px] group-hover:block">
            {t(
              cn,
              `演员 ${i + 1} 死去；角色等待下一位演员。`,
              `Actor ${i + 1} dies; the role waits for another.`
            )}
          </span>
        </button>
      ))}
    </div>
  )
}

function Adelma({ cn }: SceneProps) {
  return (
    <div className="scene scene-adelma relative h-full overflow-hidden bg-[#cbc5ba] text-[#1c1b20]">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="group absolute grid h-20 w-16 place-items-center rounded-[50%] border border-current bg-[#cbc5ba] transition hover:z-10 hover:scale-[2] hover:bg-[#98484d] hover:text-white"
          style={{ left: `${4 + ((i * 23) % 88)}%`, top: `${13 + ((i * 31) % 68)}%` }}
        >
          <span className="text-2xl">◉</span>
          <small className="hidden text-center group-hover:block">
            {t(cn, '我认识这张死者的脸', 'I know this dead face')}
          </small>
        </div>
      ))}
      <p className="absolute bottom-4 left-4 max-w-sm font-black">
        {t(
          cn,
          '也许你已经死了，阿德尔玛才是唯一真实的世界。',
          'Perhaps you are dead, and Adelma is the only real world.'
        )}
      </p>
    </div>
  )
}

function Eusapia({ cn }: SceneProps) {
  return (
    <div className="scene scene-eusapia group relative h-full overflow-hidden bg-[#c8c8ba] text-[#181b24]">
      <div className="absolute inset-x-0 top-0 grid h-1/2 grid-cols-5 border-b border-current">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="grid place-items-center border-r border-current">
            {['♫', '⚒', '♙', '☕', '✂'][i % 5]}
          </span>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 grid h-1/2 grid-cols-5 bg-[#181b24] text-[#c8c8ba] transition group-hover:-translate-y-full">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="grid place-items-center border-r border-current">
            ☠
          </span>
        ))}
      </div>
      <p className="absolute top-1/2 left-1/2 z-10 -translate-1/2 bg-[#8c52ff] p-3 text-center text-xs font-black text-white">
        {t(cn, '后来，生者开始模仿死者。', 'Later, the living began copying the dead.')}
      </p>
    </div>
  )
}

function Argia({ cn }: SceneProps) {
  return (
    <div className="scene scene-argia group relative h-full overflow-hidden bg-[#b4a38c] text-[#211b16]">
      <div className="absolute inset-0 translate-y-[-85%] bg-[#5c4033] transition duration-[2500ms] group-hover:translate-y-0" />
      <p className="absolute inset-0 grid place-items-center p-12 text-center text-5xl font-black transition group-hover:text-[#b4a38c]">
        {t(cn, '这里没有空气。只有泥土。', 'There is no air here. Only earth.')}
      </p>
      <span className="absolute bottom-3 left-3 text-[9px]">
        {t(cn, '把指针停在页面上，让城市被埋葬', 'Keep the pointer here. Let the city be buried.')}
      </span>
    </div>
  )
}

function Laudomia({ cn }: SceneProps) {
  return (
    <div className="scene scene-laudomia grid h-full grid-cols-3 bg-[#d5c7d8] text-[#1e1925]">
      {[t(cn, '生者', 'LIVING'), t(cn, '死者', 'DEAD'), t(cn, '未生者', 'UNBORN')].map((x, i) => (
        <div
          key={x}
          className="group grid place-items-center border-r border-current p-3 text-center text-3xl font-black transition hover:bg-[#ae4b70] hover:text-white"
        >
          <span>{x}</span>
          <small className="mt-5 hidden text-xs group-hover:block">
            {i === 0
              ? t(cn, '向后寻找解释', 'seek explanations behind')
              : i === 1
                ? t(cn, '重复已经发生的名字', 'repeat names already lived')
                : t(cn, '一张空白但无限的脸', 'a blank, infinite face')}
          </small>
        </div>
      ))}
    </div>
  )
}

// Cities & the Sky
function Eudoxia({ cn }: SceneProps) {
  return (
    <div className="scene scene-eudoxia group relative h-full overflow-hidden bg-[#ebcd86] text-[#24172d]">
      <div className="absolute inset-[-30%] rotate-12 opacity-50 transition duration-[3000ms] [background:repeating-conic-gradient(from_30deg,#d13370_0_8deg,transparent_8deg_20deg,#24172d_20deg_22deg)] group-hover:scale-50 group-hover:rotate-[190deg]" />
      <p className="absolute top-1/2 left-1/2 w-72 -translate-1/2 bg-[#ebcd86] p-5 text-center text-2xl font-black">
        {t(
          cn,
          '地毯是城市的真实地图，还是神任意画下的图案？',
          'Is the carpet the city’s true map—or God’s arbitrary doodle?'
        )}
      </p>
    </div>
  )
}

function Beersheba({ cn }: SceneProps) {
  return (
    <div className="scene scene-beersheba relative grid h-full grid-rows-3 bg-[#f0d88e] text-[#271c0e]">
      <div className="grid place-items-center bg-[#6d55ff] text-3xl font-black text-white md:pt-10">
        {t(cn, '想象中的黄金天城', 'IMAGINED GOLDEN HEAVEN')}
      </div>
      <div className="grid place-items-center border-y border-current text-3xl font-black">
        {t(cn, '地上的城', 'EARTHLY CITY')}
      </div>
      <div className="group grid place-items-center overflow-hidden bg-[#271c0e] text-[#f0d88e]">
        <span className="text-3xl font-black group-hover:hidden">
          {t(cn, '想象中的垃圾地狱', 'IMAGINED WASTE HELL')}
        </span>
        <span className="hidden text-center text-sm group-hover:block">
          {t(
            cn,
            '但真正的珍宝在最下面，真正的垃圾在最上面。',
            'But treasure lies below, and refuse above.'
          )}
        </span>
      </div>
    </div>
  )
}

function Thekla({ cn }: SceneProps) {
  return (
    <div className="scene scene-thekla relative h-full overflow-hidden bg-[#d6d1bc] text-[#142127]">
      <div className="absolute inset-0 [background:repeating-linear-gradient(72deg,transparent_0_38px,currentColor_39px_41px),repeating-linear-gradient(-72deg,transparent_0_55px,#ff5d32_56px_58px)]" />
      <div className="group absolute inset-[20%] grid place-items-center bg-[#d6d1bc] p-8 text-center">
        <b className="text-3xl">{t(cn, '为什么永远建不完？', 'WHY NEVER FINISH?')}</b>
        <p className="mt-4 opacity-0 group-hover:opacity-100">
          {t(
            cn,
            '为了让毁灭永远没有开始的机会。蓝图是夜空。',
            'So destruction never gets a chance to begin. The blueprint is the night sky.'
          )}
        </p>
      </div>
    </div>
  )
}

function Perinthia({ cn }: SceneProps) {
  return (
    <div className="scene scene-perinthia relative h-full overflow-hidden bg-[#101c35] text-[#d3d8eb]">
      <div className="absolute inset-0 animate-[spin_30s_linear_infinite] [background:radial-gradient(circle_at_50%_50%,transparent_0_18%,#ff4e4e_18.4%_19%,transparent_19.4%_34%,#d3d8eb_34.4%_35%,transparent_35.4%)]" />
      <div className="absolute inset-0 grid grid-cols-5 items-end gap-2 p-8">
        {[25, 80, 42, 65, 34].map((h, i) => (
          <i
            key={i}
            className="bg-[#ff4e4e] transition hover:skew-x-12"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="absolute bottom-16 left-5 max-w-[calc(100%_-_2.5rem)] font-black md:bottom-5 md:max-w-sm">
        {t(
          cn,
          '天文学家造出完美星城；街上出生的却全是怪物。',
          'Astronomers built a perfect star-city; every child born there was a monster.'
        )}
      </p>
    </div>
  )
}

function Andria({ cn }: SceneProps) {
  return (
    <div className="scene scene-andria group relative grid h-full place-items-center overflow-hidden bg-[#0b1830] text-[#cbd7ed]">
      {Array.from({ length: 7 }, (_, i) => (
        <i
          key={i}
          className="absolute rounded-full border border-current transition duration-[2000ms] group-hover:rotate-180"
          style={{ inset: `${7 + i * 6}%` }}
        />
      ))}
      <button className="z-10 h-32 w-32 rounded-full bg-[#ffb703] font-black text-[#0b1830] transition hover:scale-150">
        {t(cn, '改变城市', 'CHANGE CITY')}
      </button>
      <p className="absolute bottom-5 text-xs">
        {t(cn, '每次改变城市，星空也会改变。', 'Every change to the city changes the stars.')}
      </p>
    </div>
  )
}

// Continuous Cities
function Leonia({ cn }: SceneProps) {
  const trash = ['▣', '◫', '◉', '⌑', '▤', '◇', '▧', '◌', '▦', '▥', '◎', '□']
  return (
    <div className="scene scene-leonia group relative h-full overflow-hidden bg-[#ebe7db] text-[#171717]">
      <div className="absolute inset-x-0 top-0 flex h-1/3 items-center justify-around border-b border-current text-4xl">
        {trash.slice(0, 5).map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-2/3 flex-wrap content-end justify-center gap-4 bg-[#ff3b1f] p-5 text-5xl text-white transition duration-[2000ms] group-hover:h-full">
        {trash.concat(trash).map((x, i) => (
          <span key={i} className="transition group-hover:-rotate-12">
            {x}
          </span>
        ))}
      </div>
      <p className="absolute bottom-16 left-4 z-10 max-w-[calc(100%_-_2rem)] font-black text-white mix-blend-difference md:bottom-4 md:max-w-sm">
        {t(
          cn,
          '每天早晨一切崭新；每天夜里城市更接近被自己的过去掩埋。',
          'Every morning everything is new; every night the city is closer to burial by its past.'
        )}
      </p>
    </div>
  )
}

function Trude({ cn }: SceneProps) {
  return (
    <div className="scene scene-trude relative grid h-full grid-cols-4 grid-rows-3 bg-[#d8d1c4] text-[#28231d]">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="group grid place-items-center border border-current text-3xl font-black hover:bg-[#e55b35] hover:text-white"
        >
          <span className="group-hover:hidden">TRUDE</span>
          <span className="hidden text-[9px] group-hover:block">
            {t(cn, '你刚离开的城市', 'THE CITY YOU JUST LEFT')}
          </span>
        </div>
      ))}
      <p className="pointer-events-none absolute inset-0 grid place-items-center text-5xl font-black opacity-0 backdrop-blur-sm transition hover:opacity-100">
        {t(
          cn,
          '世界被一座没有开始也没有结束的特鲁德覆盖。',
          'The world is covered by one Trude without beginning or end.'
        )}
      </p>
    </div>
  )
}

function Procopia({ cn }: SceneProps) {
  return (
    <div className="scene scene-procopia group relative h-full overflow-hidden bg-[#dce0bd] text-[#21301e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#e8572d_0_8px,transparent_9px)] bg-[size:52px_52px] transition-all duration-[3000ms] group-hover:bg-[size:18px_18px]" />
      <div className="absolute inset-[20%] grid place-items-center bg-[#dce0bd] p-8 text-center text-3xl font-black transition group-hover:scale-50">
        {t(
          cn,
          '第一年：一个人。下一年：三个人。最后，他们的脸贴在窗上。',
          'First year: one person. Next: three. At last, faces press against the glass.'
        )}
      </div>
    </div>
  )
}

function Cecilia({ cn }: SceneProps) {
  return (
    <div className="scene scene-cecilia group relative h-full overflow-hidden bg-[#d8d6bc] text-[#29281e]">
      <div className="absolute inset-0 bg-[linear-gradient(35deg,transparent_45%,#e55232_46%_54%,transparent_55%),linear-gradient(-35deg,transparent_45%,#29281e_46%_54%,transparent_55%)] bg-[size:110px_90px] transition duration-[2500ms] group-hover:bg-[size:28px_25px]" />
      <p className="absolute top-1/2 left-1/2 w-3/4 -translate-1/2 bg-[#d8d6bc] p-8 text-center text-3xl font-black">
        {t(
          cn,
          '牧羊人曾经认得草地。多年后，城市吞掉了所有方向。',
          'A shepherd once knew the fields. Years later, the city swallowed every direction.'
        )}
      </p>
    </div>
  )
}

function Penthesilea({ cn }: SceneProps) {
  return (
    <div className="scene scene-penthesilea relative h-full overflow-hidden bg-[#d8cfbe] text-[#211e1b]">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-[50%] border border-current"
          style={{ inset: `${4 + i * 5}%` }}
        />
      ))}
      <button className="group absolute top-1/2 left-1/2 h-24 w-44 -translate-1/2 bg-[#e2683d] font-black text-white transition hover:scale-[2.5]">
        <span className="group-hover:hidden">{t(cn, '寻找城门', 'FIND THE GATE')}</span>
        <span className="hidden group-hover:inline">
          {t(cn, '你仍在郊区', 'STILL IN THE OUTSKIRTS')}
        </span>
      </button>
      <p className="absolute bottom-4 left-4 text-xs">
        {t(cn, '也许城外只意味着另一座潘特熙莱雅。', 'Perhaps outside means another Penthesilea.')}
      </p>
    </div>
  )
}

// Hidden Cities
function Olinda({ cn }: SceneProps) {
  return (
    <div className="scene scene-olinda group relative grid h-full place-items-center overflow-hidden bg-[#d6e4b6] text-[#182618]">
      <div className="h-2 w-2 rounded-full bg-[#e24d2e] transition duration-[3000ms] group-hover:h-[160vmax] group-hover:w-[160vmax]" />
      <div className="pointer-events-none absolute inset-0 grid scale-0 grid-cols-5 gap-3 p-8 text-white transition duration-[2500ms] group-hover:scale-100">
        {Array.from({ length: 20 }, (_, i) => (
          <i key={i} className="border border-white" />
        ))}
      </div>
      <p className="absolute bottom-16 left-5 max-w-[calc(100%_-_2.5rem)] font-black md:bottom-5 md:max-w-xs">
        {t(
          cn,
          '把指针留在针尖上。新城市从旧城市内部生长。',
          'Hold the pointer on the pinprick. A new city grows inside the old.'
        )}
      </p>
    </div>
  )
}

function Raissa({ cn }: SceneProps) {
  return (
    <div className="scene scene-raissa relative h-full overflow-hidden bg-[#dfcbd0] text-[#291c22]">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="grid place-items-center border border-current text-2xl">
            {['×', '!', '⌁', '—'][i % 4]}
          </span>
        ))}
      </div>
      <div className="group absolute top-[12%] left-[8%] h-3 w-3 rounded-full bg-[#ffbe0b] transition duration-[3000ms] hover:h-[76%] hover:w-[84%]">
        <p className="hidden h-full items-center justify-center p-12 text-center text-2xl font-black group-hover:flex">
          {t(
            cn,
            '一条看不见的幸福丝线连接着所有微小善意，并把另一座幸福的城市织进痛苦之城。',
            'An invisible thread joins every small kindness, weaving a happy city inside the unhappy one.'
          )}
        </p>
      </div>
    </div>
  )
}

function Marozia({ cn }: SceneProps) {
  return (
    <div className="scene scene-marozia group relative grid h-full grid-cols-2 overflow-hidden bg-[#d7d1cf] text-[#282226]">
      <div className="grid place-items-center bg-[#68605f] text-8xl transition duration-700 group-hover:-translate-y-full">
        ♟<span className="text-xs">{t(cn, '老鼠纪元', 'AGE OF RATS')}</span>
      </div>
      <div className="grid translate-y-full place-items-center bg-[#47a8a8] text-8xl text-white transition duration-700 group-hover:translate-y-0">
        ⌁<span className="text-xs">{t(cn, '燕子纪元', 'AGE OF SWALLOWS')}</span>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs font-black">
        {t(
          cn,
          '新的纪元已经出现，但只在短暂、偶然的瞬间。',
          'The new age is already here, in brief accidental moments.'
        )}
      </p>
    </div>
  )
}

function Theodora({ cn }: SceneProps) {
  const species = ['蛇', '蜘蛛', '苍蝇', '白蚁', '木蛀虫', '翼龙', '狮身人面兽', '独角兽']
  return (
    <div className="scene scene-theodora relative grid h-full grid-cols-4 bg-[#d0dcc5] text-[#18231c]">
      {species.map((s, i) => (
        <button
          key={s}
          className="group border border-current text-2xl font-black hover:bg-[#9d3b28] hover:text-white"
        >
          <span>
            {cn
              ? s
              : [
                  'SNAKES',
                  'SPIDERS',
                  'FLIES',
                  'TERMITES',
                  'BORERS',
                  'PTERODACTYLS',
                  'SPHINXES',
                  'UNICORNS',
                ][i]}
          </span>
          <small className="hidden group-hover:block">
            {t(cn, '从图书馆的书页里返回', 'RETURNING FROM THE LIBRARY')}
          </small>
        </button>
      ))}
    </div>
  )
}

function Berenice({ cn }: SceneProps) {
  return (
    <div className="scene scene-berenice group relative grid h-full place-items-center overflow-hidden bg-[#ded4c9] text-[#211b1b]">
      {Array.from({ length: 7 }, (_, i) => (
        <div
          key={i}
          className="absolute border-8 transition duration-700 group-hover:rotate-180"
          style={{ inset: `${5 + i * 6}%`, borderColor: i % 2 ? '#d62e2e' : '#211b1b' }}
        />
      ))}
      <p className="z-10 max-w-md bg-[#ded4c9] p-6 text-center text-2xl font-black">
        {t(
          cn,
          '不义之城里藏着正义之城；正义之城里又孵化新的不义。没有最后一层。',
          'An unjust city hides a just city, which incubates new injustice. There is no final layer.'
        )}
      </p>
    </div>
  )
}

export const cityScenes: Record<string, ComponentType<SceneProps>> = {
  diomira: Diomira,
  isidora: Isidora,
  zaira: Zaira,
  zora: Zora,
  maurilia: Maurilia,
  dorothea: Dorothea,
  anastasia: Anastasia,
  despina: Despina,
  fedora: Fedora,
  zobeide: Zobeide,
  tamara: Tamara,
  zirma: Zirma,
  zoe: Zoe,
  hypatia: Hypatia,
  olivia: Olivia,
  isaura: Isaura,
  zenodia: Zenodia,
  armilla: Armilla,
  sophronia: Sophronia,
  octavia: Octavia,
  euphemia: Euphemia,
  chloe: Chloe,
  eutropia: Eutropia,
  ersilia: Ersilia,
  esmeralda: Esmeralda,
  valdrada: Valdrada,
  zemrude: Zemrude,
  baucis: Baucis,
  phyllis: Phyllis,
  moriana: Moriana,
  aglaura: Aglaura,
  leandra: Leandra,
  pyrrha: Pyrrha,
  clarice: Clarice,
  irene: Irene,
  melania: Melania,
  adelma: Adelma,
  eusapia: Eusapia,
  argia: Argia,
  laudomia: Laudomia,
  eudoxia: Eudoxia,
  beersheba: Beersheba,
  thekla: Thekla,
  perinthia: Perinthia,
  andria: Andria,
  leonia: Leonia,
  trude: Trude,
  procopia: Procopia,
  cecilia: Cecilia,
  penthesilea: Penthesilea,
  olinda: Olinda,
  raissa: Raissa,
  marozia: Marozia,
  theodora: Theodora,
  berenice: Berenice,
}
