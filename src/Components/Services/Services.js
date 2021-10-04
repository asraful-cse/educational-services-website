import React, { useEffect, useState } from 'react';
import MoreServices from '../MoreServices/MoreServices';

const Services = () => {
const [mores, setMores] = useState([]);
useEffect(()=>{
fetch('./MoreServicesData.JSON')
.then(res => res.json())
.then(data => setMores(data))
},[])
    return (
        <div class=" container row row-cols-1 row-cols-md-3 g-4">
              {
                mores.map(more => <MoreServices key={more.key} more={more} ></MoreServices>)  
              }  
        </div>
    );
};

export default Services;