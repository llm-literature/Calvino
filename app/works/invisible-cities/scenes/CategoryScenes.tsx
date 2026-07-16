'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType } from 'react'
import type { City } from '@/lib/types'

export interface CategorySceneProps {
  cities: City[]
  cn: boolean
  title: string
  instruction: string
}

const cityName = (city: City, cn: boolean) => cn ? city.cnName : city.name
const cityLink = (city: City) => `/works/invisible-cities/${city.type}/${city.name}`
const cityImage = (city: City) => `/works/invisible-cities/${city.type}/${city.name}.png`

function MemoryArchive({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#d8c7a8] text-[#2b1f19]">
    <div className="border-b border-current p-6 md:p-10"><p className="text-[10px] font-black tracking-[.2em]">ARCHIVE / UNRELIABLE</p><h1 className="max-w-6xl text-[clamp(4rem,13vw,11rem)] leading-[.72] font-black tracking-[-.09em]">{title}</h1><p className="mt-6 max-w-lg font-bold">{instruction}</p></div>
    <div className="relative mx-auto h-[72vh] max-w-6xl">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group absolute top-[8%] left-1/2 aspect-[4/3] w-[58%] origin-bottom -translate-x-1/2 border-8 border-white bg-[#eee1c8] shadow-2xl transition duration-500 hover:z-20 hover:-translate-y-16 hover:rotate-0" style={{transform:`translateX(-50%) rotate(${(index-2)*5}deg) translateY(${index*9}px)`,zIndex:index}}><Image src={cityImage(city)} alt="" fill className="object-cover grayscale opacity-40 transition group-hover:opacity-80"/><span className="absolute inset-x-0 bottom-0 bg-[#eee1c8] p-4 text-3xl font-black uppercase">{cityName(city,cn)}</span></Link>)}</div>
  </section>
}

function DesireTrap({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#3a0912] text-[#ffb29a]">
    <div className="absolute top-1/2 left-1/2 h-[82vmin] w-[82vmin] -translate-1/2 animate-[spin_50s_linear_infinite] rounded-full border border-current">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group absolute grid h-32 w-32 -translate-1/2 place-items-center overflow-hidden rounded-full border bg-[#3a0912] text-center text-xs font-black uppercase transition hover:z-10 hover:scale-[1.8] hover:bg-[#ff3b1f] hover:text-white" style={{left:`${50+46*Math.cos(index*Math.PI*2/cities.length)}%`,top:`${50+46*Math.sin(index*Math.PI*2/cities.length)}%`}}>{cityName(city,cn)}<Image src={cityImage(city)} alt="" fill className="-z-10 object-cover opacity-0 mix-blend-luminosity group-hover:opacity-40"/></Link>)}</div>
    <div className="pointer-events-none absolute inset-0 grid place-items-center p-8 text-center"><div><h1 className="text-[clamp(4rem,12vw,10rem)] leading-[.76] font-black tracking-[-.09em]">{title}</h1><p className="mx-auto mt-6 max-w-md font-bold">{instruction}</p><span className="mt-8 inline-block text-[10px] tracking-[.2em]">{cn?'每个入口都把你拉向中心':'EVERY ENTRANCE PULLS YOU INWARD'}</span></div></div>
  </section>
}

function SignSystem({ cities, cn, title, instruction }: CategorySceneProps) {
  const symbols=['☞','⚑','◉','↯','♜']
  return <section className="min-h-[calc(100vh-49px)] bg-[#ece5d2] text-[#111d24]">
    <header className="grid border-b border-current md:grid-cols-2"><h1 className="p-6 text-[clamp(4rem,12vw,10rem)] leading-[.72] font-black tracking-[-.09em]">{title}</h1><p className="flex items-end border-t border-current p-6 text-2xl font-black md:border-t-0 md:border-l">{instruction}</p></header>
    <div className="grid md:grid-cols-5">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group relative flex min-h-[55vh] flex-col items-center justify-between overflow-hidden border-r border-b border-current p-5 hover:bg-[#ed3140] hover:text-white"><span className="text-7xl transition group-hover:rotate-45 group-hover:scale-150">{symbols[index]}</span><div className="text-center"><p className="text-3xl font-black uppercase">{cityName(city,cn)}</p><p className="mt-3 text-[9px] tracking-[.16em] opacity-0 group-hover:opacity-100">{cn?'这个名字指向另一件事':'THIS NAME POINTS ELSEWHERE'}</p></div></Link>)}</div>
  </section>
}

function ThinSuspension({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#cfe6df] text-[#102a31]">
    <div className="absolute inset-x-0 top-0 z-10 border-b border-current bg-[#cfe6df] p-6"><h1 className="text-[clamp(4rem,11vw,9rem)] leading-[.74] font-black tracking-[-.09em]">{title}</h1><p className="mt-4 font-bold">{instruction}</p></div>
    <div className="absolute inset-x-0 top-[26%] bottom-0 flex justify-around">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group relative w-px origin-top bg-current transition hover:rotate-3" style={{height:`${56+index*7}%`}}><span className="absolute top-full left-1/2 grid h-36 w-36 -translate-x-1/2 place-items-center overflow-hidden rounded-full border bg-[#cfe6df] text-center text-xl font-black uppercase transition group-hover:-translate-y-12 group-hover:scale-125 group-hover:bg-[#df4b2f] group-hover:text-white"><Image src={cityImage(city)} alt="" fill className="object-cover opacity-0 mix-blend-multiply group-hover:opacity-35"/><i className="z-10 not-italic">{cityName(city,cn)}</i></span></Link>)}</div>
  </section>
}

function TradingFloor({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="min-h-[calc(100vh-49px)] overflow-hidden bg-[#e7b96e] text-[#281416]">
    <div className="flex w-max animate-[category-conveyor_24s_linear_infinite] border-b border-current">{[...cities,...cities].map((city,index)=><Link key={`${city.name}-${index}`} href={cityLink(city)} className="group relative grid h-[58vh] w-[38vw] min-w-72 place-items-center overflow-hidden border-r border-current p-6 hover:bg-[#b81c1c] hover:text-white"><Image src={cityImage(city)} alt="" fill className="object-cover opacity-0 grayscale mix-blend-multiply group-hover:opacity-50"/><span className="z-10 text-[clamp(2rem,5vw,5rem)] font-black uppercase">{cityName(city,cn)}</span><small className="absolute bottom-5 z-10 opacity-0 group-hover:opacity-100">{cn?'交换货物，也交换记忆':'GOODS CHANGE HANDS; MEMORIES CHANGE OWNERS'}</small></Link>)}</div>
    <div className="grid p-6 md:grid-cols-[2fr_1fr]"><h1 className="text-[clamp(4rem,11vw,9rem)] leading-[.74] font-black tracking-[-.09em]">{title}</h1><p className="self-end text-xl font-black">{instruction}</p></div>
  </section>
}

function EyesMirror({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#bcdde7] text-[#071d2d]">
    <div className="absolute inset-x-0 top-1/2 h-px bg-current"/><div className="grid min-h-[calc(100vh-49px)] grid-cols-5">{cities.map(city=><Link key={city.name} href={cityLink(city)} className="group relative border-r border-current"><div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden"><Image src={cityImage(city)} alt="" fill className="object-cover grayscale transition group-hover:scale-125 group-hover:grayscale-0"/></div><div className="absolute inset-x-0 bottom-0 h-1/2 scale-y-[-1] overflow-hidden opacity-45"><Image src={cityImage(city)} alt="" fill className="object-cover grayscale"/></div><span className="absolute top-1/2 left-1/2 z-10 -translate-1/2 bg-[#ff5e45] px-3 py-2 text-sm font-black text-white uppercase [writing-mode:vertical-rl]">{cityName(city,cn)}</span></Link>)}</div>
    <div className="pointer-events-none absolute inset-0 grid place-items-center"><div className="bg-[#bcdde7]/90 p-6 text-center"><h1 className="text-[clamp(3rem,8vw,7rem)] leading-none font-black">{title}</h1><p className="mt-3 font-bold">{instruction}</p></div></div>
  </section>
}

function NamesField({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#e2d0be] text-[#281c27]">
    <div className="absolute inset-0 flex flex-col justify-center">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group relative block border-y border-current py-2 text-[clamp(4rem,12vw,10rem)] leading-[.72] font-black tracking-[-.08em] uppercase hover:z-10 hover:bg-[#ba3152] hover:text-white"><span className="inline-block transition duration-700 group-hover:translate-x-[30vw] group-hover:opacity-0">{cityName(city,cn)}</span><span className="absolute inset-0 hidden items-center justify-center text-sm tracking-[.2em] group-hover:flex">{cn?'名字退场，城市才出现':'THE NAME LEAVES; THE CITY APPEARS'}</span></Link>)}</div>
    <div className="pointer-events-none absolute top-5 right-5 z-20 max-w-xs bg-[#e2d0be] p-4 text-right"><h1 className="text-3xl font-black">{title}</h1><p className="mt-2 text-xs font-bold">{instruction}</p></div>
  </section>
}

function DeadTheatre({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#1b1820] text-[#d7c9bd]">
    <div className="absolute inset-x-0 top-0 h-24 bg-[#8e2d36] [clip-path:polygon(0_0,100%_0,92%_100%,82%_30%,72%_100%,62%_30%,52%_100%,42%_30%,32%_100%,22%_30%,12%_100%)]"/>
    <header className="relative z-10 p-8 pt-28 text-center"><h1 className="text-[clamp(4rem,12vw,10rem)] leading-[.75] font-black tracking-[-.09em]">{title}</h1><p className="mx-auto mt-5 max-w-lg font-bold">{instruction}</p></header>
    <div className="mx-auto flex max-w-6xl items-end justify-center gap-3 px-5 pb-10">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group relative flex h-[40vh] flex-1 items-end justify-center border border-current bg-[#27212b] p-3 transition hover:h-[58vh] hover:bg-[#8e2d36]"><span className="text-xl font-black uppercase [writing-mode:vertical-rl] group-hover:[writing-mode:horizontal-tb]">{cityName(city,cn)}</span><span className="absolute top-5 hidden text-5xl group-hover:block">{['☠','◉','♙','⚱','◌'][index]}</span></Link>)}</div>
  </section>
}

function SkyChart({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#0c1730] text-[#d1d9ed]">
    <div className="absolute top-1/2 left-1/2 h-[88vmin] w-[88vmin] -translate-1/2 rounded-full border border-current opacity-50"><div className="absolute inset-[16%] rounded-full border"/><div className="absolute inset-[34%] rounded-full border"/>{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group absolute grid h-24 w-24 -translate-1/2 place-items-center rounded-full border bg-[#0c1730] text-center text-[10px] font-black uppercase transition hover:z-10 hover:scale-[2] hover:bg-[#ffb703] hover:text-[#0c1730]" style={{left:`${50+48*Math.cos(index*1.26)}%`,top:`${50+48*Math.sin(index*1.26)}%`}}>{cityName(city,cn)}<span className="absolute h-px w-[40vmin] origin-left bg-current opacity-25"/></Link>)}</div>
    <div className="pointer-events-none absolute inset-0 grid place-items-center text-center"><div><h1 className="text-[clamp(4rem,11vw,9rem)] leading-[.75] font-black tracking-[-.08em]">{title}</h1><p className="mx-auto mt-5 max-w-md font-bold">{instruction}</p></div></div>
  </section>
}

function ContinuousSprawl({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#d8d2c5] text-[#28231d]">
    <div className="absolute inset-0 grid grid-cols-6 grid-rows-5">{Array.from({length:30},(_,index)=>{const city=cities[index%cities.length];return <Link key={index} href={cityLink(city)} className="group relative overflow-hidden border border-current"><Image src={cityImage(city)} alt="" fill className="object-cover grayscale opacity-30 group-hover:opacity-80"/><span className="absolute inset-0 grid place-items-center text-xs font-black uppercase group-hover:bg-[#e55232] group-hover:text-white">{cityName(city,cn)}</span></Link>})}</div>
    <div className="pointer-events-none absolute inset-0 grid place-items-center"><div className="max-w-3xl bg-[#d8d2c5]/95 p-8 text-center"><h1 className="text-[clamp(4rem,11vw,9rem)] leading-[.74] font-black tracking-[-.09em]">{title}</h1><p className="mt-4 font-black">{instruction}</p><p className="mt-3 text-[10px] tracking-[.2em]">{cn?'没有城外。没有空白。':'NO OUTSIDE. NO BLANK SPACE.'}</p></div></div>
  </section>
}

function HiddenLayers({ cities, cn, title, instruction }: CategorySceneProps) {
  return <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-[#20261f] text-[#d4dec8]">
    <header className="relative z-10 p-7"><h1 className="text-[clamp(4rem,12vw,10rem)] leading-[.72] font-black tracking-[-.09em]">{title}</h1><p className="mt-5 max-w-lg font-bold">{instruction}</p></header>
    <div className="absolute inset-0 flex items-end justify-center">{cities.map((city,index)=><Link key={city.name} href={cityLink(city)} className="group relative h-[62%] flex-1 overflow-hidden border-x border-current bg-[#20261f] transition hover:h-[88%] hover:flex-[3]"><div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-1/2 rounded-full bg-[#d4dec8] transition duration-700 group-hover:h-[80vmin] group-hover:w-[80vmin]"/><Image src={cityImage(city)} alt="" fill className="object-cover opacity-0 transition duration-700 group-hover:opacity-60"/><span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-black uppercase [writing-mode:vertical-rl] group-hover:[writing-mode:horizontal-tb]">{cityName(city,cn)}</span></Link>)}</div>
  </section>
}

export const categoryScenes: Record<string, ComponentType<CategorySceneProps>> = {
  memory: MemoryArchive,
  desire: DesireTrap,
  signs: SignSystem,
  thin: ThinSuspension,
  trading: TradingFloor,
  eyes: EyesMirror,
  names: NamesField,
  dead: DeadTheatre,
  sky: SkyChart,
  continuous: ContinuousSprawl,
  hidden: HiddenLayers,
}
