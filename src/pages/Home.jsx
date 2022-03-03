import React from 'react'
import Ads from '../components/homeComponent/ads/Ads'
import Equipments from '../components/homeComponent/equipments/Equipments'
import Footer from '../components/footer/Footer'
import PreHeader from '../components/preheader/PreHeader'
import Header from '../components/header/Header'
import Banner from '../components/homeComponent/banner/Banner'
import Services from '../components/homeComponent/services/Services'
import Stats from '../components/homeComponent/stats/Stats'
import Workflow from '../components/homeComponent/workflow/Workflow'
import Support from '../components/homeComponent/support/Support'
import ContactUs from '../components/homeComponent/contactUs/ContactUs'
import Faqs from '../components/homeComponent/faqs/Faqs'

const Home = () => {
    return (
        <div style={{ overflow: 'hidden'}}>
            <PreHeader />
            <Header />
            <Banner />
            <Support />
            <Ads />
            <Workflow />
            <Services />
            <Stats />
            <Equipments />
            <Faqs />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home