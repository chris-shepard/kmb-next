import { TextField, Button } from '@material-ui/core';
import validator from 'validator';
import { useState } from 'react';

function isFormValid({name,phone,email,address}){
  if(validator.isEmail(email) && validator.isMobilePhone(phone) && !validator.isEmpty(name) && !validator.isEmpty(address)) {
    return true
  }
  return false;
}

function FreeQuote() {
  const [form, setForm] = useState({
    name: '',
    phone:'',
    email:'',
    address: '',
    message:''
  })

  function handleChange(event) {
    let label = event.target.id
    let element = document.getElementById(label);
    setForm((prevState) => ({ ...prevState, [label]: element.value }));
    if(isFormValid(form)) {
      //change css for submit button
    }
    
  }

  return (
    <div className="free-quote">
      <h4>Get your Free Quote!</h4>
      <form className="form" id="quoteForm">
        <TextField
          label="Name" type="name" required id="name" onChange={handleChange}/>
          <br></br>
          <TextField
          label="Phone Number" type="tel" required id="phone" onChange={handleChange}/>
          <br></br>
          <TextField
          label="Email" type="email" required id="email" onChange={handleChange}/>
          <br></br>
          <TextField
          label="Address" type="text" required id="address" onChange={handleChange}/>
          <br></br>
          <TextField
          label="What can we do for you?" type="text" id="message" onChange={handleChange}/>
          <br></br>
          <Button type="submit" color="primary" disabled={!isFormValid(form)}>Request Quote</Button>
      </form>

    </div>
  );
}

export default FreeQuote;