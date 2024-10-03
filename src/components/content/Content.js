import React, { useEffect, useState } from 'react'
import Artist from '../artist/Artist';
import Developer from '../developer/Developer';
import Designer from '../designer/Designer';

function Content() {
  const [selectedTab, setSelectedTab] = useState('artist');

  useEffect = (() => ( renderContent ),[]);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'artist':
        return <Artist/>;
      case 'developer':
        return <Developer/>;
      case 'designer':
        return <Designer/>;
      default:
        return null;
    }
  };


  return (
    <div className='max-w-2xl  mx-auto mt-10  '>
        <div className="flex justify-around space-x-4 md:space-x-6">
        {/* <button className='w-4/12 py-4 drop-shadow-md rounded-xl text-sm bg-primary-color text-text-color md:text-lg md:font-medium md:px-0 md:w-4/12 md:py-3 ease-in-out duration-500 hover:bg-but-hov-color' onClick={() => handleTabClick('artist')}>Artist</button> */}
        {/* <button className='w-4/12 py-4 drop-shadow-md rounded-xl text-sm bg-primary-color text-text-color md:text-lg md:font-medium md:px-0 md:w-4/12 md:py-3 ease-in-out duration-500 hover:bg-but-hov-color' onClick={() => handleTabClick('designer')}>Designer</button> */}
        <button className='w-4/12 py-4 drop-shadow-md rounded-xl text-sm bg-primary-color text-text-color md:text-lg md:font-medium md:px-0 md:w-4/12 md:py-3 ease-in-out duration-500 hover:bg-but-hov-color' onClick={() => handleTabClick('developer')}>Developer</button>
        </div>
    </div>
  )
}

export default Content