import { createContext, useContext, useState } from "react";
import { ArrContext } from "./ArrContextProvider";
// import Fav from "../Fav"
import { useNavigate } from "react-router-dom"

const NavigationContext = createContext()

function Display(data) {
    const { activityArr } = useContext(ArrContext)
    const [favArr, setFavArr] = useState([])

    const navigate = useNavigate()

    const handleStudent = () => navigate("/");
    const handleFavourite = () => navigate("/fav", { state: { favArr } });

    // function handleStudent()
    // {
    //     navigate("/")
    // }  

    // function handleFavourite()
    // {
    //     navigate("/fav", { state: { favArr } })
    // }  

    function updateList(item) {
        setFavArr([...favArr, item])
        console.log(item);
    }

    return (
        <>
            <NavigationContext.Provider value={{ handleStudent, handleFavourite }}>
                {data.children}
            </NavigationContext.Provider>
            {/* <Header handleStudent={handleStudent} handleFavourite={handleFavourite} /> */}
            <div>
                {
                    activityArr.map(function (item, index) {
                        // console.log("Key:", index)
                        return (
                            <div key={index} className="flex">

                                <p className="justify-center mx-6 my-4">{index + 1}.{item}</p>
                                <button onClick={() => updateList(item)} className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold  border border-blue-700 rounded px-2 my-3 ">Add</button>
                            </div>
                        )
                    }
                    )
                }
            </div>
            {/* <Fav favArr={favArr} /> */}
        </>
    )
}

export { NavigationContext }
export default Display;
