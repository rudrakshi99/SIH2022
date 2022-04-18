import "./App.css";
import Home from "./pages/Home";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./api/profileAPI";
import {
  getLoginAction,
  getSaveProfileAction,
  getSaveTokenAction
} from "./redux/actions";
// import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import SupportAdmin from "./components/ChatSupport/SupportAdmin/index";
import SupportEngine from "./components/ChatSupport/SupportEngine/index";
import Cookies from "js-cookie";

//Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Header from "./components/header/Header";
import FAQ from "./pages/FAQ";
import PreHeader from "./components/preheader/PreHeader";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/addProduct/AddProduct";
import VerifyOTP from "./components/verify-otp";
import Product from "./pages/product/Product";
import PartnerDispute from "./pages/PartnerDispute";
import CancellationForm from "./components/cancellationForm";
import ContactUs from "./pages/ContactUs/ContactUs";
import Chat from "./pages/chat/Chat";
import BookingRequest from "./pages/bookingRequest/BookingRequest";
import CancellationPolicy from "./pages/cancellationPage/CancellationPolicy";
import UpdateProfile from "./pages/updateProfile/index";
import BookingHistory from "./pages/bookingHistory";
import Feedback from "./pages/feedback/Feedback";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import EquipmentReport from "./pages/EquipmentReport";

function App() {
  const authState = useSelector((state) => state.authReducer);
  const tokenState = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const access = Cookies.get("access-token");
    const refresh = Cookies.get("refresh-token");
    dispatch(
      getSaveTokenAction({
        accessToken: access,
        refreshToken: refresh
      })
    );
  }, [tokenState.token.accessToken]);

  useEffect(async () => {
    const access = Cookies.get("access-token");
    if (access) {
      const uuid = Cookies.get("uuid");
      dispatch(getLoginAction());
      const data = await getProfile({
        uuid: uuid,
        accessToken: access
      });
      console.log(data);
      dispatch(getSaveProfileAction(data));
    }
  }, []);

  return (
    <>
      {/*       
      <p id="transcript">Transcript: {transcript}</p>

      <button onClick={SpeechRecognition.startListening}>Start</button> */}
      <PreHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        <Route path="help" element={<Help />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="update-profile" element={<UpdateProfile />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="bookingRequest/:id" element={<BookingRequest />} />
        <Route path="chat" element={<Chat />} />
        <Route path="booking-history" element={<BookingHistory />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="partner-dispute" element={<PartnerDispute />} />
        <Route path="support" element={<SupportAdmin />} />
        <Route path="policy" element={<CancellationPolicy />} />
        <Route path="equipment-report/:id" element={<EquipmentReport />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      <Footer />
      <SupportEngine />
    </>
  );
}

export default App;
