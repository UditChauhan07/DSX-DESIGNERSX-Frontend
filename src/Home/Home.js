import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import BannerHero from '../Component/Banner-hero/BannerHero'
import SatisfiedClient from '../Component/SatisfiedClient/SatisfiedClient'
import ClientTestimonial from '../Component/ClientTestimonial/ClientTestimonial'
import CoreServices from '../Component/CoreServices'
import ExpertSolution from '../Component/ExpertSolution'
import StriveToProvide from '../Component/StriveToProvide'
import TechnologyStack from '../Component/technologyStack'
import Clients from '../Component/Clients'
import SecureGuaranty from '../Component/SecureGuaranty'
import TeamDesignerx from '../Component/TeamDesignerx'
import AwardRecognition from '../Component/AwardRecognition'
import Locations from '../Component/Locations'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
      <Header />
      <BannerHero />
      <SatisfiedClient />
      <CoreServices />
      <ExpertSolution />
      <StriveToProvide />
      <TechnologyStack />
      <Clients />
      <ClientTestimonial />
      <SecureGuaranty />
      <TeamDesignerx />
      <AwardRecognition />
      <Locations />
      <Footer />
    </div>
  )
}

export default Home