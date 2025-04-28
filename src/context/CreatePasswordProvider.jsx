import React, { useState } from "react";
import passwordContext from "./CreatePasswordContext";

const PasswordProvider = ({children}) => {
    const [createPassword, setCreatePassword] = useState(false);
    
    return(
        <passwordContext.Provider value={{createPassword, setCreatePassword}}>
            {children}
        </passwordContext.Provider>
    )
}

export default PasswordProvider;