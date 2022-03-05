import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, renewAccessToken } from "./api/authAPI";
import {
  getLoginAction,
  getSaveProfileAction,
  getSaveTokenActionAccess,
} from "./redux/actions";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import VerifyOTP from "./components/verify-otp";
import PartnerDispute from "./pages/PartnerDispute";

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="help" element={<Help />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="verify-otp" element={<VerifyOTP />} />
      <Route path="partner-dispute" element={<PartnerDispute />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
