import React from "react";
import { useContext } from 'react';
import { NavigationContext } from './Display';



function Header(props) {

    const { handleStudent, handleFavourite } = useContext(NavigationContext);

    return (
        <div className="flex gap-9 m-3">
            <h1 className="text-3xl no-underline hover:underline" onClick={handleStudent}>
                Students list
            </h1>
            <h1 className="text-3xl no-underline hover:underline" onClick={handleFavourite}>
                Favourites
            </h1>
        </div>
    );
}

export default Header;
