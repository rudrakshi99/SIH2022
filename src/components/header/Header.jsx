import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import {getLogoutAction} from '../../redux/actions'
import Cookies from "js-cookie";

//images
import userIcon from "../../img/user_icon.svg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenState = useSelector((state) => state.tokenReducer);
  const authState = useSelector((state) => state.authReducer);

  const [show, setShow] = useState(false);

  return (
    <div className="h-16">
      <div className="flex justify-center content-center items-around">
        <div className="flex-1">
          <div className="flex items-center justify-center lg:ml-20">
            <img
              onClick={() => navigate("/")}
              src={logo}
              className="logoWeb"
              alt=""
            />
            <h3 className="text-md font-bold opacity-[.70]">
              Krishi <br /> Sadhan
            </h3>
          </div>
        </div>
        <div className="flex-2 w-5/12">
          <ul className="flex mt-4 justify-around items-center">
            <li
              onClick={() => navigate("/")}
              className="text-lg cursor-pointer font-semibold text-darkgreen lg:ml-7 mr-7"
            >
              Home
            </li>
            <li className="text-lg cursor-pointer font-semibold text-darkgreen mr-7">
              Dashboard
            </li>
            <li className="text-lg cursor-pointer font-semibold text-darkgreen mr-7">
              Our Services
            </li>
            <li
              onClick={() => navigate("/help")}
              className="text-lg cursor-pointer font-semibold text-darkgreen mr-7"
            >
              Help
            </li>
          </ul>
        </div>
        {!Cookies.get("refresh-token") ? (
          <div className="flex-1 flex justify-evenly items-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 px-8 rounded"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 px-8 rounded"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div
            onMouseOver={(prev) => setShow(true)}
            onMouseLeave={(prev) => setShow(false)}
            className="my-auto"
          >
            <div className="bg-gray-200 relative rounded-full py-1 px-4 my-auto text-gray-700 flex items-center z-40 hover:bg-gray-300 mr-5 cursor-pointer">
              <img
                className="rounded-full w-8 h-8 mr-3"
                src={userIcon}
                alt="profile_pic"
              />
              <p className="text-lg font-semibold">
                {"Hi, " + authState.user.data.first_name}
              </p>
              {/* <p className="text-lg font-semibold">{"Hi, Gajendra"}</p> */}
            </div>
            {show && (
              <div
                onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className="absolute bg-white rounded-2xl z-40 border-2 border-slate-400 p-1"
              >
                <p
                  onClick={() => navigate("/update-profile")}
                  className="px-5 text-gray-600 py-2 bg-white cursor-pointer border-solid border-b border-slate-400 hover:bg-gray-200"
                >
                  Profile
                </p>
                <p
                  onClick={() => {
                    Cookies.remove("access-token");
                    Cookies.remove("refresh-token");
                    Cookies.remove('uuid');
                    dispatch(getLogoutAction());
                    navigate("/login");
                  }}
                  className="px-5 text-gray-600 py-2 bg-white cursor-pointer border-solid  border-slate-400 hover:bg-gray-200"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
