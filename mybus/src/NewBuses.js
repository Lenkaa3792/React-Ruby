import React from "react";
import image2 from"./images/bus.jpg"
import { Form,FormGroup } from "reactstrap";
import { useState } from "react";

export default function NewBuses ({onAddBus})
{ 
  const[formData,setFormData]=useState({insurance:"",phone:"",vehicle_registration:""});
    // const [insurance,setInsurance] = useState("");
    // const [phone,setPhone] = useState("");
    // const [vehicle_registration,setVehicle_Registration] = useState("");


    function handleChange(event){
      setFormData({...formData,[event.target.name]: event.target.value})
    }
    
    function handleSubmit(event) {
        console.log(event)
      event.preventDefault();
      const busFormData = { insurance: formData.insurance, phone: formData.phone, vehicle_registration: formData.vehicle_registration };

      console.log( 'my',formData);

      

      fetch("https://phase3data.herokuapp.com/buses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(busFormData ),
      })
        .then((response) => response.json())
        .then((data) => {

          onAddBus(data);
          setFormData({...formData, insurance: "", phone:"", vehicle_registration:""})
          // setInsurance("");
          // setPhone("");
          // setVehicle_Registration();
        });
    }
    return(
    <div className="contact">
      



     <h3 className="h3">Create a new bus</h3>
     <FormGroup>
     <form onSubmit={handleSubmit}>
  <label for="referrer" >insured
        <select name="insurance" onChange={handleChange}>
          <option value="">(select)</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </label>
      <label for="phone">phone: <input type="number" name="phone" required onChange={handleChange} /></label>
      <label for="vehicle_registration">vehicle registration <input type="text" name="vehicle_registration" required  onChange={handleChange}/></label>
    <input type="submit" value="Submit"  />
  </form>
     </FormGroup>
 

   
    
  </div>
)
 
}