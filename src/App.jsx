import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Pricing      from './components/Pricing'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import FAQ          from './components/FAQ'
import DemoPage     from './components/DemoPage'
import LocalSeoPage from './components/LocalSeoPage'

const isDemo = new URLSearchParams(window.location.search).has('demo')

function getTimeTheme(date = new Date()) {
  const hour = date.getHours()
  if (hour >= 6 && hour < 11) return 'morning'
  if (hour >= 11 && hour < 17) return 'day'
  if (hour >= 17 && hour < 22) return 'evening'
  return 'night'
}

function HomePage({ onSelectPlan, selectedPlan }) {
  return (
    <main>
      <Hero />
      <Pricing onSelectPlan={onSelectPlan} />
      <FAQ />
      <Contact selectedPlan={selectedPlan} />
    </main>
  )
}

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('')
  const [themeMode, setThemeMode] = useState(() => (
    window.localStorage.getItem('snakebyte-theme-mode') || 'auto'
  ))
  const [timeTheme, setTimeTheme] = useState(() => getTimeTheme())
  const activeTheme = useMemo(
    () => (themeMode === 'auto' ? timeTheme : themeMode),
    [themeMode, timeTheme],
  )

  useEffect(() => {
    const updateTimeTheme = () => setTimeTheme(getTimeTheme())
    updateTimeTheme()
    const interval = window.setInterval(updateTimeTheme, 60 * 1000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme
    document.documentElement.dataset.themeMode = themeMode
    window.localStorage.setItem('snakebyte-theme-mode', themeMode)
  }, [activeTheme, themeMode])

  if (isDemo) return <DemoPage />

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-950 text-white">
        <Navbar themeMode={themeMode} activeTheme={activeTheme} onThemeChange={setThemeMode} />
        <Routes>
          <Route path="/" element={
            <HomePage onSelectPlan={setSelectedPlan} selectedPlan={selectedPlan} />
          } />
          <Route path="/nettisivut-kuopio" element={<LocalSeoPage city="kuopio" />} />
          <Route path="/nettisivut-siilinjarvi" element={<LocalSeoPage city="siilinjarvi" />} />
          <Route path="/nettisivut-maaninka" element={<LocalSeoPage city="maaninka" />} />
          <Route path="/nettisivut-pohjois-savo" element={<LocalSeoPage city="pohjois-savo" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
