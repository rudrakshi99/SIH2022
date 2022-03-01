import React from 'react'
import Ads from '../components/ads/Ads'
import Equipments from '../components/equipments/Equipments'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import PreHeader from '../components/preheader/PreHeader'
import Services from '../components/services/Services'
import Stats from '../components/stats/Stats'
import Workflow from '../components/workflow/Workflow'

const Home = () => {
    return (
        <div>
            <PreHeader />
            <Header />
            <Banner />
            <Ads />
            <Workflow />
            <Services />
            <Stats />
            <Equipments />
            <Footer />
        </div>
    )
}

export default Home