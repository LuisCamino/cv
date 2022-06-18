import React, { useState } from 'react'
import  {useDispatch} from 'react-redux';
import { addExperience } from '../redux/experience/experience.actions';
import { useNavigate } from "react-router-dom";


const INITIAL_FORM = {
    name: '',
    date: '',
    where:''
}


const NewExperience = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(addExperience(form))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})


    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>exp name</span>
            <input type="text" name="name" onChange={handleChange}/>
        </label>
        <label>
            <span>date</span>
            <input type="date" name="date" onChange={handleChange}/>
        </label>
        <label>
            <span>place</span>
            <input type="text" name="where" onChange={handleChange}/>
        </label>
      
        <button>add exp</button>
    </form>
  )
}

export default NewExperience;