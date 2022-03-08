import React, { useState } from "react";
//Functions
import { useSelector } from "react-redux";
import { updateProfile } from "../../api/authAPI";

const UpdateForm = ({ onChange }) => {
  const authState = useSelector((state) => state.authReducer);
  const tokenState = useSelector((state) => state.tokenReducer);
  const user = authState.user.data;
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    address: user.address,
    state: user.state,
    city: user.city,
    pin_code: user.pin_code,
    profile_picture: "",
  });

  function getBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const data = await updateProfile({
      formData: formData,
      accessToken: tokenState.token.accessToken,
    });
    if (data.success) {
      setMessage(data.message);
      onChange((prev) => !prev);
    }
    console.log(data);
  };

  return (
    <div className="z-40 w-full h-screen left-0 absolute top-0 bg-[#68ac5d] p-9">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onChange((prev) => !prev)}
          className="bg-white ml-auto rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="text-center bg-white my-9 rounded-xl p-9">
        <h1 className="text-2xl font-semibold">Edit your Information Here</h1>
        <form onSubmit={handleUpdateProfile}>
          <div className="shadow rounded-lg p-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className=" focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="name" className="bg-white text-gray-600 px-1">
                      First name *
                    </label>
                  </p>
                </div>
                <p>
                  <input
                    id="name"
                    autocomplete="false"
                    tabindex="0"
                    type="text"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    className="py-3 px-1 text-gray-900 outline-none block h-full w-full"
                  />
                </p>
              </div>
              <div className=" focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label
                      for="lastname"
                      className="bg-white text-gray-600 px-1"
                    >
                      Last name *
                    </label>
                  </p>
                </div>
                <p>
                  <input
                    id="lastname"
                    autocomplete="false"
                    tabindex="0"
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                    className="py-3 px-1 outline-none block h-full w-full"
                  />
                </p>
              </div>
              <div className=" focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label
                      for="username"
                      className="bg-white text-gray-600 px-1"
                    >
                      Email *
                    </label>
                  </p>
                </div>
                <p>
                  <input
                    id="username"
                    autocomplete="false"
                    tabindex="0"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="py-3 px-1 outline-none block h-full w-full"
                  />
                </p>
              </div>
              <div className="bg-white focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label
                      for="username"
                      className="bg-white text-gray-600 px-1"
                    >
                      Profile Picture *
                    </label>
                  </p>
                </div>
                <p>
                  <input
                    type="file"
                    placeholder="Email"
                    value={formData.profile_picture}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile_picture: getBase64(e.target.files[0]),
                      })
                    }
                    className="py-3 px-1 outline-none block h-full w-full"
                  />
                </p>
              </div>
            </div>
            <p className="text-center text-green-500 text-lg my-5">{message}</p>
            <div className="mt-6 pt-3">
              <button
                type="submit"
                className="rounded text-gray-100 px-9 py-1 bg-[#68ac5d] hover:shadow-inner hover:bg-green-700 transition-all duration-300 text-xl"
              >
                Save
              </button>
              <button
                onClick={onChange((prev) => !prev)}
                className="rounded ml-4 text-gray-100 px-9 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300 text-xl"
              >
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
