import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import DemoPage from './components/DemoPage'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import ServicePage from './pages/ServicePage'
import GuideHinta from './pages/GuideHinta'

const isDemo = new URLSearchParams(window.location.search).has('demo')

function getTimeTheme(date = new Date()) {
  const hour = date.getHours()
  if (hour >= 6 && hour < 11) return 'morning'
  if (hour >= 11 && hour < 17) return 'day'
  if (hour >= 17 && hour < 22) return 'evening'
  return 'night'
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return null
}

function Site() {
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
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar themeMode={themeMode} activeTheme={activeTheme} onThemeChange={setThemeMode} />
      <ScrollToHash />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />}
          />
          <Route
            path="/nettisivut-yritykselle"
            element={<ServicePage path="/nettisivut-yritykselle" selectedPlan={selectedPlan} />}
          />
          <Route
            path="/landing-page"
            element={<ServicePage path="/landing-page" selectedPlan={selectedPlan} />}
          />
          <Route path="/kotisivut-pienyritykselle" element={<Navigate to="/nettisivut-yritykselle" replace />} />
          <Route path="/landing-page-yritykselle" element={<Navigate to="/landing-page" replace />} />
          <Route
            path="/nettisivujen-uudistus"
            element={<ServicePage path="/nettisivujen-uudistus" selectedPlan={selectedPlan} />}
          />
          <Route
            path="/hinnasto"
            element={<PricingPage selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />}
          />
          <Route
            path="/opas/nettisivut-yritykselle-hinta"
            element={<GuideHinta selectedPlan={selectedPlan} />}
          />
          <Route
            path="*"
            element={<Home selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  )
}
