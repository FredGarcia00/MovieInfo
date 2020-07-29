import React from 'react';


 const TitleList = (props) => {
     console.log(props.backdrop_path); 
    const titles = props.title.map((t) => {
         return (
             <div key={t.id} className="Container">
                  {t.title} 
                  <div>release date:{t.release_date}</div>
                   <div style={{borderBottom:'1px solid blue'}}>
                   {t.overview}
                   </div>
                  </div>
         )
    });

   return <div>{titles}</div>
};

export default TitleList;
