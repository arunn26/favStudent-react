import { useLocation } from "react-router-dom";
function Fav(props)
{
    const data = useLocation()
    const favList = data.state.favArr
    // console.log(favList)
    
    return(
        <div>
            <h1>Favourite</h1>
            {favList.map((item, index) => (
                <h1 key={index}> {item}
                </h1>
                ))}
        </div>        
    )
}

export default Fav