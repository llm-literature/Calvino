import { getCityTheme } from '@/lib/themes'
import { ChronicleLayout } from '@/app/works/invisible-cities/components/layouts/ChronicleLayout'
import { EtherealLayout } from '@/app/works/invisible-cities/components/layouts/EtherealLayout'
import { BazaarLayout } from '@/app/works/invisible-cities/components/layouts/BazaarLayout'
import { LabyrinthLayout } from '@/app/works/invisible-cities/components/layouts/LabyrinthLayout'
import { cosBase } from '@/app/works/invisible-cities/components/Util'
import Diomira from '@/app/works/invisible-cities/components/cities/Diomira'
import Isidora from '@/app/works/invisible-cities/components/cities/Isidora'
import Dorothea from '@/app/works/invisible-cities/components/cities/Dorothea'
import Zaira from '@/app/works/invisible-cities/components/cities/Zaira'
import Anastasia from '@/app/works/invisible-cities/components/cities/Anastasia'
import Tamara from '@/app/works/invisible-cities/components/cities/Tamara'
import Zora from '@/app/works/invisible-cities/components/cities/Zora'
import Despina from '@/app/works/invisible-cities/components/cities/Despina'
import Zirma from '@/app/works/invisible-cities/components/cities/Zirma'
import Isaura from '@/app/works/invisible-cities/components/cities/Isaura'
import Maurilia from '@/app/works/invisible-cities/components/cities/Maurilia'
import Fedora from '@/app/works/invisible-cities/components/cities/Fedora'
import Zoe from '@/app/works/invisible-cities/components/cities/Zoe'
import Zenodia from '@/app/works/invisible-cities/components/cities/Zenodia'
import Euphemia from '@/app/works/invisible-cities/components/cities/Euphemia'
import Zobeide from '@/app/works/invisible-cities/components/cities/Zobeide'
import Hypatia from '@/app/works/invisible-cities/components/cities/Hypatia'
import Armilla from '@/app/works/invisible-cities/components/cities/Armilla'
import Chloe from '@/app/works/invisible-cities/components/cities/Chloe'
import Valdrada from '@/app/works/invisible-cities/components/cities/Valdrada'
import Olivia from '@/app/works/invisible-cities/components/cities/Olivia'
import Sophronia from '@/app/works/invisible-cities/components/cities/Sophronia'
import Eutropia from '@/app/works/invisible-cities/components/cities/Eutropia'
import Zemrude from '@/app/works/invisible-cities/components/cities/Zemrude'
import Aglaura from '@/app/works/invisible-cities/components/cities/Aglaura'
import Octavia from '@/app/works/invisible-cities/components/cities/Octavia'
import Ersilia from '@/app/works/invisible-cities/components/cities/Ersilia'
import Baucis from '@/app/works/invisible-cities/components/cities/Baucis'
import Leandra from '@/app/works/invisible-cities/components/cities/Leandra'
import Melania from '@/app/works/invisible-cities/components/cities/Melania'
import Esmeralda from '@/app/works/invisible-cities/components/cities/Esmeralda'
import Phyllis from '@/app/works/invisible-cities/components/cities/Phyllis'
import Pyrrha from '@/app/works/invisible-cities/components/cities/Pyrrha'
import Adelma from '@/app/works/invisible-cities/components/cities/Adelma'
import Eudoxia from '@/app/works/invisible-cities/components/cities/Eudoxia'
import Moriana from '@/app/works/invisible-cities/components/cities/Moriana'
import Clarice from '@/app/works/invisible-cities/components/cities/Clarice'
import Eusapia from '@/app/works/invisible-cities/components/cities/Eusapia'
import Beersheba from '@/app/works/invisible-cities/components/cities/Beersheba'
import Leonia from '@/app/works/invisible-cities/components/cities/Leonia'
import Irene from '@/app/works/invisible-cities/components/cities/Irene'
import Argia from '@/app/works/invisible-cities/components/cities/Argia'
import Thekla from '@/app/works/invisible-cities/components/cities/Thekla'
import Trude from '@/app/works/invisible-cities/components/cities/Trude'
import Olinda from '@/app/works/invisible-cities/components/cities/Olinda'
import Laudomia from '@/app/works/invisible-cities/components/cities/Laudomia'
import Perinthia from '@/app/works/invisible-cities/components/cities/Perinthia'
import Procopia from '@/app/works/invisible-cities/components/cities/Procopia'
import Raissa from '@/app/works/invisible-cities/components/cities/Raissa'
import Andria from '@/app/works/invisible-cities/components/cities/Andria'
import Cecilia from '@/app/works/invisible-cities/components/cities/Cecilia'
import Marozia from '@/app/works/invisible-cities/components/cities/Marozia'
import Penthesilea from '@/app/works/invisible-cities/components/cities/Penthesilea'
import Theodora from '@/app/works/invisible-cities/components/cities/Theodora'
import Berenice from '@/app/works/invisible-cities/components/cities/Berenice'
import { City } from '@/lib/types'
import CityViewerWrapper from '@/app/works/invisible-cities/components/CityViewerWrapper'

import data from '@/public/works/invisible-cities/data.json'

export async function generateStaticParams() {
  const params = data.cities.map((city) => ({
    cityType: city.type,
    cityName: city.name,
  }))
  return params
}

function getCityData(cityType: string, cityName: string) {
  const index = data.cities.findIndex(
    (c) =>
      c.type.toLowerCase() === cityType.toLowerCase() &&
      c.name.toLowerCase() === cityName.toLowerCase()
  )

  if (index === -1) return null

  const city = data.cities[index]
  const prevCity = index > 0 ? data.cities[index - 1] : null
  const nextCity = index < data.cities.length - 1 ? data.cities[index + 1] : null

  return {
    city,
    prevCity,
    nextCity,
  }
}

const SpecificCityComponents: Record<string, React.ComponentType<{ city: City }>> = {
  diomira: Diomira,
  isidora: Isidora,
  dorothea: Dorothea,
  zaira: Zaira,
  anastasia: Anastasia,
  tamara: Tamara,
  zora: Zora,
  despina: Despina,
  zirma: Zirma,
  isaura: Isaura,
  maurilia: Maurilia,
  fedora: Fedora,
  zoe: Zoe,
  zenodia: Zenodia,
  euphemia: Euphemia,
  zobeide: Zobeide,
  hypatia: Hypatia,
  armilla: Armilla,
  chloe: Chloe,
  valdrada: Valdrada,
  olivia: Olivia,
  sophronia: Sophronia,
  eutropia: Eutropia,
  zemrude: Zemrude,
  aglaura: Aglaura,
  octavia: Octavia,
  ersilia: Ersilia,
  baucis: Baucis,
  leandra: Leandra,
  melania: Melania,
  esmeralda: Esmeralda,
  phyllis: Phyllis,
  pyrrha: Pyrrha,
  adelma: Adelma,
  eudoxia: Eudoxia,
  moriana: Moriana,
  clarice: Clarice,
  eusapia: Eusapia,
  beersheba: Beersheba,
  leonia: Leonia,
  irene: Irene,
  argia: Argia,
  thekla: Thekla,
  trude: Trude,
  olinda: Olinda,
  laudomia: Laudomia,
  perinthia: Perinthia,
  procopia: Procopia,
  raissa: Raissa,
  andria: Andria,
  cecilia: Cecilia,
  marozia: Marozia,
  penthesilea: Penthesilea,
  theodora: Theodora,
  berenice: Berenice,
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ cityType: string; cityName: string }>
}) {
  const { cityType, cityName } = await params
  const cityData = getCityData(cityType, cityName)

  if (!cityData) return <div>未找到该城市</div>

  const { city, prevCity, nextCity } = cityData

  const href: string = `${cityName}.png`
  const imagePath = `/works/invisible-cities/${cityType}/${href}`
  const imageUrl = `${cosBase}${imagePath}`

  // Check for specific city component first
  const SpecificComponent = SpecificCityComponents[cityName.toLowerCase()]
  if (SpecificComponent) {
    return (
      <CityViewerWrapper city={city} imageUrl={imageUrl}>
        <SpecificComponent city={city} />
      </CityViewerWrapper>
    )
  }

  const theme = getCityTheme(cityType)

  const LayoutComponents = {
    chronicle: ChronicleLayout,
    ethereal: EtherealLayout,
    bazaar: BazaarLayout,
    labyrinth: LabyrinthLayout,
  }

  const SelectedLayout = LayoutComponents[theme.archetype] || ChronicleLayout

  return (
    <CityViewerWrapper city={city} imageUrl={imageUrl}>
      <SelectedLayout
        city={city}
        prevCity={prevCity}
        nextCity={nextCity}
        description={city.cnDescription}
        imageUrl={imageUrl}
        theme={theme}
      />
    </CityViewerWrapper>
  )
}
