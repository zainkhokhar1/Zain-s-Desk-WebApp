import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const PasswordTable = () => {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (index) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const dummyData = [
    {
      app: "Facebook",
      email: "zaink@gmail.com",
      date: "12-4-2023",
      actions: "...",
      password: '12345'
    },
    {
      app: "Instagram",
      email: "johndoe@instagram.com",
      date: "15-5-2023",
      actions: "...",
      password: '12345'
    },
    {
      app: "Twitter",
      email: "alice@twitter.com",
      date: "20-3-2023",
      actions: "...",
      password: '12345'
    },
    {
      app: "LinkedIn",
      email: "bob@linkedin.com",
      date: "1-1-2023",
      actions: "...",
      password: '12345'
    },
  ];

  return (
    <div className="w-12/12 px-2">
      <table className="w-full">
        <thead className="grid grid-cols-5 justify-between items-center w-full">
          <td className=''>App</td>
          <td>Email</td>
          <td>Password</td>
          <td>Date</td>
          <td>Actions</td>
        </thead>
        <div className="h-px w-12/12 bg-white/10 mt-2"></div>
        <tbody className="grid grid-cols-5 pt-1 justify-between items-center w-full">
          {dummyData.map((data, index) => {
          return  <>
              <td key={index} className="col-span-1 py-3 text-wrap break-all line-clamp-2">
                <tr>{data.app}</tr>
              </td>
              <td className="col-span-1 pr-6 relative -ml-4 py-3 text-wrap break-all line-clamp-2">
                <tr>{data.email}</tr>
              </td>
              <td className='col-span-1 py-3 text-wrap break-all line-clamp-2'>
                <tr className='flex items-center gap-2'>
                  {visiblePasswords[index] ? data.password : '••••••'}
                  <button 
                    onClick={() => togglePasswordVisibility(index)}
                    className="hover:bg-white/10 p-1 rounded-full"
                  >
                    {visiblePasswords[index] ? 
                      <IoEyeOffOutline className="text-white/70" /> : 
                      <IoEyeOutline className="text-white/70" />
                    }
                  </button>
                </tr>
              </td>
              <td className="col-span-1 py-3 text-wrap break-all line-clamp-2">
                <tr>{data.date}</tr>
              </td> 
              <td className='col-span-1 py-3 text-wrap break-all line-clamp-2'>
                <tr className="w-fit text-center px-3 pb-2 hover:bg-white/10 rounded-full bg-white/5  h-fit text-wrap break-all line-clamp-2 cursor-pointer duration-200">{data.actions}</tr>
              </td>
            </>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PasswordTable;
