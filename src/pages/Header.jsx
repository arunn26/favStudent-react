import React from "react";
import { useNavigate } from "react-router-dom"





function Header()
{  

    const navigate = useNavigate()

    function handleStudent()
    {
        navigate("/")
    }  

    function handleFavourite()
    {
        navigate("/fav")
    }  
    return(
        <div className="flex gap-9 m-3 bg">            
<h1 className="text-3xl no-underline hover:underline" onClick={handleStudent}>Students list </h1>
<h1 className="text-3xl no-underline hover:underline" onClick={handleFavourite}  >Favourites </h1>

        </div>
    )
}

export default Header