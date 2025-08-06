import MaxContainer from '@/components/common/MaxWidth'
import DesktopHeader from '@/components/DesktopHeader'

import Image from 'next/image'
import React from 'react'
import { Arrow } from '@/components/common/icons'
import Work from '@/components/Work'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Security from '@/components/Security'
import Communities from '@/components/Communities'
import Pricing from '@/components/Pricing'
import Transform from '@/components/Transform'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const page = () => {
  return (
   <MaxContainer>
    <Header/>
   <Hero />
   <Work />
   <Trust/>
   <Security/>
   <Communities />
   <Pricing />
   <Transform/>
   <Footer/>
   
   </MaxContainer>
  )
}

export default page
