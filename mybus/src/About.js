import React from "react";
import image1 from "./images/bus.jpg"
import image2 from "./images/bus2.jpeg"


export default function About(){
    return (
        <div className="div1">
            <div className="image1"><img src={image1} alt="bus one" className="imageclass" /></div>
        
          <div className="p4">
          <p className="p3"> Coast Bus company has established itself as a leader in the travel industry. The luxury bus is one of the best picks if you want to travel to Mombasa. They operate in Kenya, Uganda, Tanzania, and Rwanda.Travelling from any part of Kenya to Mombasa can be hectic and long. However, you can arrive to the city via the various bus companies that are available.</p>

          </div>
         <div className="image2">
            <img src={image2}  className='imageclass2'/>

         </div>

        </div>
    )
}