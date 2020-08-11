import React from 'react';
import MovieItem from './MovieItem';

const TitleList = ({title}) => {
    const movieInfo = title.map(res => {
    
    return <MovieItem key={res.id} res={res}/>
  
});
return <div className='container'>{movieInfo}</div>
};


export default TitleList;
