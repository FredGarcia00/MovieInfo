import React from 'react'

export default function TrendingList({data}) {
    console.log(data);
    const pic =  `https://image.tmdb.org/t/p/w200/${data.poster_path}`;
    return (
        <div className="imageCard">
            <div className="image-item"><img alt='' src={pic}/></div>
            <div style={{paddingBottom:'5px',color:'#000'}}>{data.title}</div>
            <div style={{fontSize:'14px',color:'rgba(0,0,0,0.6)'}}> {data.release_date ? data.release_date : data.first_air_date}</div>
        </div>
    )
}
