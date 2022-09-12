import React from "react";
import image1 from "./images/bus.jpg"
import image2 from "./images/bus2.jpeg"



export default function About(){
    return (
        <>
        <div className="div1">
            <div className="image1"><img src={image1} alt="bus one" className="imageclass" /></div>
        
          <div className="p4">
          <p className="p3"> Coast Bus company has established itself as a leader in the travel industry.<br></br> The luxury bus is one of the best picks if you want to travel to Mombasa. They operate in Kenya, Uganda, Tanzania, and Rwanda.Travelling from any part of Kenya to Mombasa can be hectic and long. However, you can arrive to the city via the various bus companies that are available.</p>

          </div>
         

        </div>
        {/* <div className="div2">
        <div className="p5">
            <h4>
            Company Profile
            </h4>
            <p>Through 30 years of public transport operations, we are constantly improving the standard and quality of our services and buses.<br></br> Our buses are of highest quality possible with passengers comfort and safety as main consideration.<br></br>
            They are also environmental friendly which meet the Singapore emission standards. With our commitment towards excellence has marked improvement in all aspect of our services.</p>
        </div>
        <div className="image2">
        <img src={image2}  className='imageclass2'/>

         </div>
        </div> */}
        <div className="div2">
            <div className="p5">
                <p>Through 30 years of public transport operations, we are constantly improving the standard and quality of our services and buses. Our buses are of highest quality possible with passengers comfort and safety as main consideration. They are also environmental friendly which meet the Singapore emission standards. With our commitment towards excellence has marked improvement in all aspect of our services.</p>
            </div>
        </div>
        
     </>
    )
}