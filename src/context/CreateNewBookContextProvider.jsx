import React, { useState } from "react";
import createNewBookContext from "./CreateNewBook";

const CreateNewBookProvider = ({ children }) => {
  const [createNewBook, setCreateNewBook] = useState(false);

  return (
    <createNewBookContext.Provider value={[createNewBook, setCreateNewBook]}>
      {children}
    </createNewBookContext.Provider>
  );
};

export default CreateNewBookProvider;
