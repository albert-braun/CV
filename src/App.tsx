import { useState } from 'react'
import { ContactStrip } from './components/ContactStrip'
import { DiscussModal } from './components/DiscussModal'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Stack } from './components/Stack'

export default function App() {
  const [discussOpen, setDiscussOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-bg">
      <Header onContact={() => setDiscussOpen(true)} />
      <main>
        <Hero onContact={() => setDiscussOpen(true)} />
        <Projects />
        <Stack />
        <Services />
        <Process />
        <ContactStrip onContact={() => setDiscussOpen(true)} />
      </main>
      <Footer />
      <DiscussModal open={discussOpen} onClose={() => setDiscussOpen(false)} />
    </div>
  )
}
