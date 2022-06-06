import React, { useState, useEffect } from "react";
import Equipments from "../components/homeComponent/equipments/Equipments";
import Banner from "../components/homeComponent/banner/Banner";
import Services from "../components/homeComponent/services/Services";
import Stats from "../components/homeComponent/stats/Stats";
import Workflow from "../components/homeComponent/workflow/Workflow";
import Support from "../components/homeComponent/support/Support";
// import Faqs from '../components/homeComponent/faqs/Faqs'
// import ContactUs from '../components/homeComponent/contactUs/ContactUs'

const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  console.log(latitude, longitude);

  return (
    <div style={{ overflow: "hidden" }}>
      <Banner />
      <Support />
      <Workflow />
      <Services />
      <Stats />
      <Equipments />
      {/* <Faqs /> */}
      {/* <ContactUs /> */}
    </div>
  );
};

export default Home;
