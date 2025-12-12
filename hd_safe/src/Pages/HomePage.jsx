import HeroSection from '../Components/HeroSection'
import WhatWeDo from './WhatWeDo'
import FAQSection from '../Components/Faq'
import StrengthsSection from './StrengthsSection'
import Testimonials from '../Components/Testimonials'
import AboutCompany from '../Components/AboutCompany'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <AboutCompany/>
    <WhatWeDo/>
    <StrengthsSection/>
    <Testimonials/>
    <FAQSection/>
    </>
  )
}

export default HomePage
