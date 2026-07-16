import LandingPage from '@/app/framework/LandingPage'
import SetLanguage from '@/app/framework/SetLanguage'

export default function Home() {
  return (
    <>
      <SetLanguage lang="auto" />
      <LandingPage />
    </>
  )
}
