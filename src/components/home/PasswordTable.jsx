import React from "react";

const PasswordTable = () => {
  const dummyData = [
    {
      app: "Facebook",
      email: "zaink@gmail.com",
      date: "12-4-2023",
      actions: "...",
    },
    {
      app: "Instagram",
      email: "johndoe@instagram.com",
      date: "15-5-2023",
      actions: "...",
    },
    {
      app: "Twitter",
      email: "alice@twitter.com",
      date: "20-3-2023",
      actions: "...",
    },
    {
      app: "LinkedIn",
      email: "bob@linkedin.com",
      date: "1-1-2023",
      actions: "...",
    },
  ];
  return (
    <div className="w-12/12 px-2">
      <table className="w-full">
        <thead className="grid grid-cols-4 justify-between items-center w-full">
          <td className=''>App</td>
          <td>Email</td>
          <td>Date</td>
          <td>Actions</td>
        </thead>
        <div className="h-px w-12/12 bg-white/10 mt-2"></div>
        <tbody className="grid grid-cols-4 pt-1 justify-between items-center w-full">
          {dummyData.map((data, index) => {
          return  <>
              <td key={index} className="col-span-1 py-3 text-wrap break-all line-clamp-2">
                <tr>{data.app}</tr>
              </td>
              <td className="col-span-1 py-3 text-wrap break-all line-clamp-2">
                <tr>{data.email}</tr>
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
