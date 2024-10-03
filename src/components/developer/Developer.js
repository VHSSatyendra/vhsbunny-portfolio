import React from "react";
import Card from "../common/Card";
import { Database } from "../../db/Database";

function Developer() {
  
  return (
    // Grid Layout
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 mt-12  md:grid-cols-3 ">
      {Database.map((item, index) => (
      <Card imageSrc={item.imgSource} name={item.name} desc={item.description} git={item.gitLink} live={item.liveLink}/>
      ))}
    </div>
  );
}

export default Developer;
