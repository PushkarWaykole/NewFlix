import React,{useState} from 'react'
import Navbar from './Navbar';
import './style.css';
import Movies from './moviesApi';
import MovieCard from './MovieCard';
import Footer from './Footer';


function Newflix() {

    const [MenuData, setMenuData] = useState(Movies);

    const filterItem=(category)=>{

        const updatedList=Movies.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);

    }
    return (
        <>
        <Navbar filterItem={filterItem}/>
        <MovieCard MenuData={MenuData}/>
        <Footer/>
        </>
        
    )
}

export default Newflix;
