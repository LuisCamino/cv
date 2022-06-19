import React, { useState } from 'react'
import  {useDispatch} from 'react-redux';
import { addHabilities } from '../redux/habilities/habilities.actions';
import { useNavigate } from "react-router-dom";


const INITIAL_FORM = {
    skill: '',
    sklvl: '',
}


const NewHabilities = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(addHabilities(form))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})


    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>ADD YOUR SKILLS</h1>
        <label>
            <span>skill</span>
            <input type="text" name="skill" onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>level</span>
            <input type="text" name="sklvl" onChange={handleChange}/>
        </label>
        <br/>
        <button>add skill</button>
    </form>
  )
}

export default NewHabilities;