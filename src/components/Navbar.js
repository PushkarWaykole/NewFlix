import React from 'react'
import "./style.css";


function Navbar({filterItem}) {
    return (
        <div>
            <div className="navbar">
                <button className="navbar_items" onClick={()=>{filterItem('action')}}>Action</button>
                <button className="navbar_items" onClick={()=>{filterItem('adventure')}}>Adventure</button>
                <button className="navbar_items" onClick={()=>{filterItem('romance')}}>Romance</button>
                <button className="navbar_items" onClick={()=>{filterItem('comedy')}}>Comedy</button>
            </div>
        </div>
    )
}

export default Navbar;
