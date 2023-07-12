import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
//   onLogin:(email,password)=>{}
});

// export const AuthContextProvider=(props)=>{
//     const [isLoggedIn,setIsLoggedIn]=useState(false);
    

    


// }


export default AuthContext;
