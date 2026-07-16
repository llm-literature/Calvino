import data from '@/public/works/invisible-cities/data.json'
import CategoryExperience from '@/app/works/invisible-cities/components/CategoryExperience'

export function generateStaticParams() {
  return Array.from(new Set(data.cities.map((city) => city.type))).map((cityType) => ({ cityType }))
}

export default async function CategoryPage({ params }: { params: Promise<{ cityType: string }> }) {
  const { cityType } = await params
  const cities = data.cities.filter((city) => city.type === cityType)
  return <CategoryExperience cities={cities} category={cityType} />
}
