import { lazy, Suspense } from 'react'
import HeroSection from '../Components/HeroSection'
import { CircularProgress } from '@mui/material'

// Lazy-loaded components
const AboutCompany = lazy(() => import('../Components/AboutCompany'))
const WhatWeDo = lazy(() => import('./WhatWeDo'))
const StrengthsSection = lazy(() => import('./StrengthsSection'))
const Testimonials = lazy(() => import('../Components/Testimonials'))
const FAQSection = lazy(() => import('../Components/Faq'))
const HomePage = () => {
  return (
    <>
      {/* Load immediately (above the fold) */}
      <HeroSection />

      {/* Lazy load rest */}
      <Suspense fallback={<CircularProgress size={30} color="secondary"  /> }>
        <AboutCompany />
        <WhatWeDo />
        <StrengthsSection />
        <Testimonials />
        <FAQSection />
      </Suspense>
    </>
  )
}

export default HomePage
