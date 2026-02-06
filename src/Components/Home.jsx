import React, { useState } from 'react';
import "../Stylesheets/Home.css";
import Sidebar from './Sidebar';
import Homepage from './Homepage';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <>
      <div className='home'>
        <Sidebar oncategoryChange={setSelectedCategory} />  
        <Homepage category={selectedCategory} />           
      </div>
    </>
  );
}

export default Home;
