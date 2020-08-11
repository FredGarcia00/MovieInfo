import React from 'react';
import './MovieItem.css';

export default function MovieItem({res}) {
    const images = `https://image.tmdb.org/t/p/w200/${res.poster_path}`;
    return (
        <div className="poster">
            <div className="image-container">
                <img alt='' src={images}/>
            </div>
            <div style={{paddingBottom:'5px',color:'#000'}}>
                {res.title ? res.title : res.name}
            </div>
            <div style={{fontSize:'14px',color:'rgba(0,0,0,0.6)'}}>
                {res.release_date ? res.release_date : res.first_air_date}
            </div>
        </div>
    )
}
