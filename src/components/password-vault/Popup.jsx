import React, { useContext, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import passwordContext from "../../context/CreatePasswordContext";

const Popup = () => {
  const { createPassword, setCreatePassword } = useContext(passwordContext);

  return (
    <>
      {createPassword && (
        <div className="rounded-lg size-96 h-[400px] fixed left-[500px] top-24 bg-[#09090B]/40 backdrop-blur-xl text-white p-4 text-start border-2 border-white/10 py-5 z-50 shadow-lg shadow-white/5">
          <h1 className="text-xl font-semibold pb-1">Add New Password</h1>
          <p className="text-xs font-normal text-white/80">
            Store your credentials securely in the vault
          </p>

          <form action="">
            <div className="flex flex-col gap-2 mt-3">
              {/* App Name */}
              <label htmlFor="appName" className="font-medium text-md">
                App Name
              </label>
              <input
                type="text"
                id="appName"
                placeholder="e.g. Gmail, Twitter"
                className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2"
              />

              {/* Username/Email */}
              <label htmlFor="username" className="font-medium text-md">
                Username / Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username or email"
                className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2"
              />

              {/* Password */}
              <label htmlFor="password" className="font-medium text-md">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2"
              />

              {/* Save Button */}
              <button className="w-full h-10 rounded-lg p-2 bg-white hover:bg-white/90 text-black mt-3">
                Save Password
              </button>
            </div>
          </form>

          {/* Close button */}
          <div
            className="absolute right-3 top-3"
            onClick={() => {
              setCreatePassword(false);
            }}
          >
            <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
