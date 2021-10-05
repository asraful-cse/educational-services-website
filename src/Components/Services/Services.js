import React, { useEffect, useState } from 'react';
import MoreServices from '../MoreServices/MoreServices';
const Services = () => {
  const [mores, setMores] = useState([]);
  useEffect(() => {
    fetch('./servicesData.JSON')
      .then(res => res.json())
      .then(data => setMores(data))
  }, [])
  return (
    <div className="container">
      <div class="  row row-cols-1 row-cols-md-3 g-3" style={{ margin: '0px 0px 50px 0px' }}>
        {
          mores.map(more => <MoreServices key={more.key} more={more} ></MoreServices>)
        }
      </div>
    </div>
  );
};

export default Services;