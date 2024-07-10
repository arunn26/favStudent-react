import { useContext, useState } from "react";
import { ArrContext } from "./ArrContextProvider";
// import Fav from "../Fav"
import { useNavigate } from "react-router-dom"


function Display() {
    const { activityArr } = useContext(ArrContext)
    const [favArr, setFavArr] = useState([])

    const navigate = useNavigate()

    function handleStudent()
    {
        navigate("/")
    }  

    function handleFavourite()
    {
        navigate("/fav", { state: { favArr } })
    }  

    function updateList(item) {
        // const newFavArr = [...favArr, item];
        // setFavArr(newFavArr);
        setFavArr([...favArr, item])
        console.log(item);
    }

    return (
        <>
        <div className="flex gap-9 m-3 bg">            
<h1 className="text-3xl no-underline hover:underline" onClick={handleStudent}>Students list </h1>
<h1 className="text-3xl no-underline hover:underline" onClick={handleFavourite} >Favourites </h1>

        </div>
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

export default Display