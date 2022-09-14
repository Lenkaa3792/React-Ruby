import React from "react";
import { useState, useEffect } from "react";
import BusItem from "./BusItem";
import NewBuses from "./NewBuses";
const BusList = () => {
  const [buses, setBuses] = useState("");
  function handleAddBus(newbus) {
    setBuses([...buses, newbus]);
  }
  useEffect(() => {
    fetch("https://phase3data.herokuapp.com/buses")
      .then((res) => res.json())
      .then((buses) => setBuses(buses));
   
  }, []);
  const busList = buses?.map((bus) => {
    return (
        <BusItem key={bus.id} bus={bus} />
    ) 
  });
  return (
    <div>
      {busList}
      <NewBuses buses={buses} onAddBus={handleAddBus} />
    </div>
  );
};

export default BusList;
