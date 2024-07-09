import React from "react";
// import { Link } from "react-router-dom";



function Header()
{
    return(
        <div className="flex gap-9 m-3 bg">            
<h1 className="text-3xl no-underline hover:underline" >Students list </h1>
<h1 className="text-3xl no-underline hover:underline" >Favourites </h1>

    {/* <Link to={"/fav"} className="underline">Favourites</Link> */}
        </div>
    )
}

export default Header