export type WorkStatus = 'available' | 'forthcoming'

export interface CalvinoWork {
  slug: string
  href?: string
  title: { cn: string; en: string }
  originalTitle: string
  year: string
  number: string
  status: WorkStatus
  image?: string
}

export const works: CalvinoWork[] = [
  {
    slug: 'invisible-cities',
    href: '/works/invisible-cities',
    title: { cn: '看不见的城市', en: 'Invisible Cities' },
    originalTitle: 'Le città invisibili',
    year: '1972',
    number: '01',
    status: 'available',
    image: '/works/invisible-cities/eyes/valdrada.png',
  },
  {
    slug: 'mr-palomar',
    title: { cn: '帕洛马尔先生', en: 'Mr Palomar' },
    originalTitle: 'Palomar',
    year: '1983',
    number: '02',
    status: 'forthcoming',
  },
]
