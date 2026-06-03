import React from 'react'

import HeroSection from './home/HeroSection'
import DigiNiwasPrpperty from './home/DigiNiwasProperty'
import NiwasAIFinds from './home/NiwasAiFind'
import DiginiwasWorks from './home/DigiNiwasWorks'

import FutureEcosystem from './home/FutureEcosystem'

const Home = () => {

  return (
    <div>
       
        <HeroSection />
        <DigiNiwasPrpperty/>

        <NiwasAIFinds />
        <DiginiwasWorks />
   
        <FutureEcosystem /> 

    </div>
  )
}

export default Home