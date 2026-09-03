import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Education from '@/components/education'
import ContactPage from '@/features/contact/pages/contact-page'
import Footer from '@/components/footer'
import { SectionDivider, Toaster } from '@/components/ui'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <ContactPage />
      </main>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  )
}
