import React from 'react'
import "./style.css";
function MovieCard({MenuData}) {
    return (
        <>
        <div className="main-container">
        {MenuData.map((curElem)=>{
            //Destructuring the data
            const {id,category,name,image}=curElem;
            return(
                <div className="card-container" key={id}>
                <div className="card-body">
                    <div className="id">{id}</div><br/>
                    <div className="title">{name}</div>
                    <div className="category">{category}</div>
                    <div className="description">Description</div>

                </div>
                <img src={image} alt="Image" className="card-image" />
                <a href="https://www.netflix.com/in/" target="_blank" className="watch-now">Watch now</a>

            </div>
            )
        })}
            
        </div>
        </>
    )
}

export default MovieCard;
