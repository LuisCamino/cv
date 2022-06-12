

import {useState} from 'react';
import Drawcv from './Drawcv';


 const  Info = (props) => {

    const [form, setForm] = useState('');

    

    const handleChange = (ev) => {
      console.log(ev.target.name);
      console.log(ev.target.value); 
      const {name, value} = ev.target;       //nombre del campo que modifico y valor del campo que modifico
      setForm({...form, [name]: value});     //form[name]=value ---> valor anterior {name: pepe, phone: 600600600, email: XXXX} => email_ 'pepe@pepe.es
  }  
  const {name, phone, email} = form;

  props.func(name+phone+email);
  return (
      <>
    <form>
  
        <label>
            <span>Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
        </label>
        <label>
            <span>Phone</span>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} />
        </label>
        <label>
            <span>Email</span>
            <input type="text" name="email" value={form.email}  onChange={handleChange} />
        </label>
        <button>Send</button>   
        
</form>

    <label>{form.name}</label>
   

    <Drawcv send={name}/>
</>
  )
}

export default Info;