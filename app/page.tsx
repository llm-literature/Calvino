import LandingPage from '@/app/components/LandingPage'
import SetLanguage from '@/app/components/SetLanguage'

export default function Home() {
  return (
    <>
      <SetLanguage lang="auto" />
      <LandingPage />
    </>
  )
}
