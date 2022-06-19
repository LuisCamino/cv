import React, { useState } from 'react'
import  {useDispatch} from 'react-redux';
import { addAbout } from '../redux/about/about.actions';
import { useNavigate } from "react-router-dom";


const INITIAL_FORM = {
    info: '',
   
}

const NewAbout = () => {
    
    const [form, setForm] = useState(INITIAL_FORM);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(addAbout(form))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})


    }
    
  return (
    <form onSubmit={handleSubmit}>
    <h1>ADD YOUR INFO</h1>
        <label>
            <span>info</span>
            <input type="text" name="info" onChange={handleChange}/>
        </label>
        <button>add info</button>
    </form>
    
  )
  
}

export default NewAbout