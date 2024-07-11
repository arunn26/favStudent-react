import { useLocation } from "react-router-dom";
function Fav(props) {
    const data = useLocation()
    const favList = data.state.favArr
    // console.log(favList)

    return (
<div>
            <p className="text-3xl m-5">Favourite</p>
            {favList.map(function (item, index) {
                return (
                    <div key={index} className="flex">
                        <p className="justify-center mx-6 my-4">{index + 1}. {item}</p>
                        <button className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded px-2 my-3">
                            Delete
                        </button>
                        {/* onClick={() => updateList(item)} */}
                    </div>
                );
            })}
        </div>
    )
}

export default Fav