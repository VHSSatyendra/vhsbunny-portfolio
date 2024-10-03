import React from 'react';
import one from '../../assets/artist/01.jpg';
import two from '../../assets/artist/02.jpg';
import three from '../../assets/artist/03.jpg';
import four from '../../assets/artist/04.jpg';
import five from '../../assets/artist/05.jpg';

function Designer() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 mt-12  md:grid-cols-4 ">
        <img src={one} alt="work" />
        <img src={two} alt="work" />
        <img src={three} alt="work" />
        <img src={four} alt="work" />
        <img src={five} alt="work" />
    </div>
  )
}


export default Designer