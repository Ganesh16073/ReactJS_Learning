import React from "react";
import UserContext from "./userContext";

const UserContextProvider=({children})=> // step 3 Create Provider function // children is the data we get
{
    const [user, setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>  {/*step4 import UserContext.Provider for pass Value*/}
        {children} {/* step 5 pass Children in between to acces everyuser */}
        </UserContext.Provider>
        
    )


}
export default UserContextProvider;