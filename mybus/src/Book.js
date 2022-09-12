import React from "react";
// import {image1} from'./images/interior.jpg';
import {Form,FormGroup,Label} from 'reactstrap';
export default function Book(){
    return(
<div id="book">
 <div id="form">
 <Form >
     <h1>Bus booking form</h1>
  <form action="#">
      <label for="name"> Name:
        <input type="text" name="name" required />
      </label>
      <label for="last-name">Enter Your destination: <input type="text" name="last-name" required /></label>
      <label for="last-name">Start of journey: <input type="text" name="last-name" required /></label>
      <label for="number">Phone number :
        <input type="number" name="phone"  required /></label>
        <input />
      <label for="referrer">book return ?
        <select name="need">
          <option value="">(select)</option>
          <option value="1">yes</option>
          <option value="2">no</option>
        </select>
      </label>
   
    <input type="submit" value="Submit" />
  </form>
 </Form>
 </div>
    
</div>
    )
}