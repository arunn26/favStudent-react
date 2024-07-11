import { createContext, useState } from "react";

const ArrContext = createContext()

function ArrContextProvider(data)
{
    const [activityArr, setActivityArr] = useState(["Student-1", "Student-2", "Student-3", "Student-4", "Student-5"])

    return(
        <ArrContext.Provider value={{activityArr,setActivityArr}}>
            {data.children}
        </ArrContext.Provider>
    )
}

export default ArrContextProvider
export {ArrContext}
