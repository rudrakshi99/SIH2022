import "./App.css";
import Home from "./pages/Home";
import SupportEngine from "./components/ChatSupport/SupportEngine/index";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, renewAccessToken } from "./api/authAPI";
import {
  getLoginAction,
  getSaveProfileAction,
  getSaveTokenActionAccess,
} from "./redux/actions";
import { Routes, Route } from "react-router-dom";
import SupportAdmin from "./components/ChatSupport/SupportAdmin/index";

//Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Header from "./components/header/Header";
import PreHeader from "./components/preheader/PreHeader";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/addProduct/AddProduct";
import VerifyOTP from "./components/verify-otp";
import Product from "./pages/product/Product";
import PartnerDispute from "./pages/PartnerDispute";
import CancellationForm from "./components/cancellationForm";

function App() {
  const authState = useSelector((state) => state.authReducer);
  const tokenState = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedIn = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        const data = await renewAccessToken();
        dispatch(getSaveTokenActionAccess(data.accessToken));
      }
    }
    loggedIn();
  }, [authState.isLoggedIn]);
  

  // useEffect(async () => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (isLoggedIn) {
  //     const data = await renewAccessToken();
  //     dispatch(getSaveTokenActionAccess(data.accessToken));
  //   }
  // }, [authState.isLoggedIn]);

  useEffect(() => {
    const tokenSt = async () => {
         if (tokenState) {
          dispatch(getLoginAction());
          const data = await getProfile(tokenState);
          dispatch(getSaveProfileAction(data.user));
        }
    }
    tokenSt();
  }, [tokenState]);
  

  // useEffect(async () => {
  //   if (tokenState) {
  //     dispatch(getLoginAction());
  //     const data = await getProfile(tokenState);
  //     dispatch(getSaveProfileAction(data.user));
  //   }
  // }, [tokenState]);

  return (
    <>
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
        <Route path="product/:id" element={<Product />} />
        <Route path="partner-dispute" element={<PartnerDispute />} />
        <Route path="support" element={<SupportAdmin />} />
        <Route path="cancellation-form" element={<CancellationForm />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
      <SupportEngine />
    </>
  );
}

export default App;
