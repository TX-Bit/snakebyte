import { useEffect, useMemo, useState } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
// import Services     from './components/Services'
// import WhySnakeByte from './components/WhySnakeByte'
import Pricing      from './components/Pricing'
import Process      from './components/Process'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import DemoPage     from './components/DemoPage'

const isDemo = new URLSearchParams(window.location.search).has('demo')

function getTimeTheme(date = new Date()) {
  const hour = date.getHours()

  if (hour >= 6 && hour < 11) return 'morning'
  if (hour >= 11 && hour < 17) return 'day'
  if (hour >= 17 && hour < 22) return 'evening'
  return 'night'
}

export default function App() {
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
      <main>
        <Hero />
        {/* <Services /> */}
        {/* <WhySnakeByte /> */}
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
