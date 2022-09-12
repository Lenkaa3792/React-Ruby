import React from "react";
import image2 from"./images/bus.jpg"
import { Form,FormGroup } from "reactstrap";
import { useState } from "react";

export default function Delete ()
{
    const [insurance] = useState("");
    const [phone] = useState("");
    const [vehicle_registration] = useState("");
    function handleSubmit(event) {
        console.log(event)
      event.preventDefault();
      const formData = { insurance: insurance, phone: phone, vehicle_registration: vehicle_registration };

      console.log( 'my',formData);
      fetch("http://localhost:9292/buses", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        params: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        //   setName("");
        //   setWorkNumber("");
        });
    }
    return(
    <div className="contact">
     <h3 className="h3">delete a known bus</h3>
     <FormGroup>
     <form onSubmit={handleSubmit}>
  <label for="referrer">insured
        <select name="insurance">
          <option value="">(select)</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </label>
      <label for="phone">phone: <input type="number" name="phone" required /></label>
      <label for="vehicle_registration">vehicle registration <input type="text" name="vehicle_registration" required /></label>
    <input type="submit" value="Delete"  />
  </form>
     </FormGroup>
 

   
    
  </div>
)
 
}