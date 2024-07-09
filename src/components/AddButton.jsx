import { useContext } from "react"
import { useState } from "react"

import { ArrContext } from "./ArrContextProvider"

function AddButton()
{
    const[evalue, setEvalue] = useState("")
    const {activityArr, setActivityArr} = useContext(ArrContext)
    // const [activityArr, setActivityArr] = useState(["Student-1", "Student-2", "Student-3", "Student-4", "Student-5"])


    function handleChange(evt)
    {
        setEvalue(evt.target.value)
    }

    function updateArr()
    {
        setActivityArr([...activityArr, evalue])
       
    }

    return(
        <div className="flex">
        <input value={evalue} onChange={handleChange} className="shadow appearance-none border border-blue-800 rounded w-2/6 m-3 py-2 px-2  text-gray-700  leading-tight focus:outline-none"></input>
        <button  onClick={updateArr} className="bg-blue-500 hover:bg-blue-700 text-white font-bold  border border-blue-700 rounded p-2 my-3 ">Add</button>
        </div>
    )
}

export default AddButton