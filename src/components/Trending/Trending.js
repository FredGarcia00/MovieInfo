import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Key } from '../api/Key'
import TrendingList from './TrendingList';
import './TrendingList.css';

const Trending = () => {
    const [trendingData, setTrendingData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${Key}`)
        .then(res => setTrendingData(res.data.results));
    },[]);

    // console.log(trendingData);
   const trend = trendingData.map((data) => {
        return <div key={data.id}><TrendingList data={data}/></div>
    });
     return (
         <div className="Trending-container"> 
         <div className="Trending-title">Trending</div>
        {trend}
         
     </div>
     );
    
};

export default Trending
