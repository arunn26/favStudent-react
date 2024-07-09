import { useContext, useState } from "react";
import { ArrContext } from "./ArrContextProvider";
import Fav from "../Fav"

function Display() {
    const { activityArr } = useContext(ArrContext)
    const [favArr, setFavArr] = useState([])

    function updateList(item) {
        // const newFavArr = [...favArr, item];
        // setFavArr(newFavArr);
        setFavArr([...favArr, item])
        console.log(item);
    }

    return (
        <>
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
            <Fav favArr={favArr} />
        </>
    )
}

export default Display