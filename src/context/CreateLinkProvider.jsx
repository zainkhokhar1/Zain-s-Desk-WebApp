
import React, { useState } from "react";
import linkContext from "./CreateContext";

const LinkProvider = ({children})=>{
    
    const [createLink, setCreateLink] = useState(false);
    return(
        <linkContext.Provider value={{createLink, setCreateLink}}>
            {children}
        </linkContext.Provider>
    )
}

export default LinkProvider;