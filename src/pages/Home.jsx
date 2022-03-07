import React from 'react'
import Ads from '../components/homeComponent/ads/Ads'
import Equipments from '../components/homeComponent/equipments/Equipments'
import Banner from '../components/homeComponent/banner/Banner'
import Services from '../components/homeComponent/services/Services'
import Stats from '../components/homeComponent/stats/Stats'
import Workflow from '../components/homeComponent/workflow/Workflow'
import Support from '../components/homeComponent/support/Support'
// import Faqs from '../components/homeComponent/faqs/Faqs'
// import ContactUs from '../components/homeComponent/contactUs/ContactUs'

const Home = () => {
    return (
        <div style={{ overflow: 'hidden'}}>
            <Banner />
            <Support />
            <Workflow />
            <Ads />
            <Services />
            <Stats />
            <Equipments />
            {/* <Faqs /> */}
            {/* <ContactUs /> */}
        </div>
    )
}

export default Home