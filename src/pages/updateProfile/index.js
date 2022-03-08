import React, { useState, useEffect } from "react";
import Sticky from "react-sticky-el";

//Components
// import InputField from "../../components/input/InputField";
import UpdateForm from "./UpdateForm";
//images
import userIcon from "../../img/user_icon.svg";
//Functions
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!Cookies.get('access-token')) {
        navigate('/');
    }
  }, []);
  const authState = useSelector((state) => state.authReducer);
  const user = authState.user.data;
  console.log(user);
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <Sticky>{edit && <UpdateForm onChange={setEdit} />}</Sticky>
      <div className="p-9">
        <div className="p-9 shadow-lg rounded-2xl bg-[#68AC5D]">
          <h1 className="text-4xl text-white font-bold">Profile</h1>
          <p className="text-xl text-white font-semibold my-4">
            View and Edit your profile.
          </p>

          <div className="h-full">
            <div className="border-b-2 block md:bg-[#68ac5d] flex">
              <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold block">
                    Admin Profile
                  </span>
                  <button
                    onClick={() => {
                      setEdit(true);
                    }}
                    className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
                <div className="w-full p-8 mx-2 flex justify-center">
                  <img
                    id="showImage"
                    className="max-w-xs w-64 items-center border"
                    src={user.profile_image ? user.profile_image : userIcon}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <div className="rounded  shadow p-6">
                  <div className="grid grid-cols-2 auto-cols-auto gap-4">
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        First Name
                      </label>
                      <div className="bg-gray-200 flex">
                        <p className=" px-9 p-2 text-left">{user.first_name}</p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Last Name
                      </label>
                      <div className="flex bg-gray-200">
                        <p className=" px-9 p-2">{user.last_name}</p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Email
                      </label>
                      <div className="bg-gray-200 flex">
                        <p className=" px-9 p-2">{user.email}</p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Address
                      </label>
                      <div className="bg-gray-200 flex">
                        <p className=" px-9 p-2 text-[#4f4f4f]">
                          {user.address === ""
                            ? "No Address added yet"
                            : user.address}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        City
                      </label>
                      <div className="bg-gray-200 flex">
                        <p className=" px-9 p-2">
                          {user.city === "" ? "No City added yet" : user.city}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        State
                      </label>
                      <div className="bg-gray-200 flex">
                        <p className=" px-9 p-2">
                          {user.state === "" ? "No State added yet" : user.city}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Pincode
                      </label>
                      <div className="bg-gray-200 flex">
                        <p className=" px-9 p-2">{user.pin_code}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
