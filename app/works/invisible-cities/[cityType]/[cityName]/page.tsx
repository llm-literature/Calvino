import data from '@/public/works/invisible-cities/data.json'
import CityExperience from '@/app/works/invisible-cities/components/CityExperience'

export function generateStaticParams() {
  return data.cities.map((city) => ({ cityType: city.type, cityName: city.name }))
}

function getCityData(cityType: string, cityName: string) {
  const index = data.cities.findIndex(
    (city) =>
      city.type.toLowerCase() === cityType.toLowerCase() &&
      city.name.toLowerCase() === cityName.toLowerCase()
  )
  if (index === -1) return null
  return {
    city: data.cities[index],
    prevCity: index > 0 ? data.cities[index - 1] : null,
    nextCity: index < data.cities.length - 1 ? data.cities[index + 1] : null,
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ cityType: string; cityName: string }>
}) {
  const { cityType, cityName } = await params
  const cityData = getCityData(cityType, cityName)
  if (!cityData) return <div>City not found</div>

  return (
    <CityExperience
      {...cityData}
      imageUrl={`/works/invisible-cities/${cityType}/${cityName}.png`}
    />
  )
}
