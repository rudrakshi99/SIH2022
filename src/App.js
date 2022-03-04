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
import SupportAdmin from './components/ChatSupport/SupportAdmin/index';

//Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import VerifyOTP from "./components/verify-otp";
import Help from "./pages/Help";

function App() {
  const authState = useSelector((state) => state.authReducer);
  const tokenState = useSelector((state) => state.tokenReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      const data = await renewAccessToken();
      dispatch(getSaveTokenActionAccess(data.accessToken));
    }
  }, [authState.isLoggedIn]);

  useEffect(async () => {
    if (tokenState) {
      dispatch(getLoginAction());
      const data = await getProfile(tokenState);
      dispatch(getSaveProfileAction(data.user));
    }
  }, [tokenState]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        <Route path="help" element={<Help />} />
        <Route path="support" element={<SupportAdmin />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <SupportEngine />
    </>
  );
}

export default App;
