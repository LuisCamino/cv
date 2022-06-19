import React, { useState } from 'react'
import  {useDispatch} from 'react-redux';
import { addLanguage } from '../redux/languages/languages.actions';
import { useNavigate } from "react-router-dom";


const INITIAL_FORM = {
    language: '',
    wrlevel: '',
    splevel: '',
}


const NewLanguages = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(addLanguage(form))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
        

    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>ADD YOUR LANGUAGE</h1>
        <label>
            <span>language</span>
            <input type="text" name="language" onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>written</span>
            <input type="text" name="wrlevel" onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>spoken</span>
            <input type="text" name="splevel" onChange={handleChange}/>
        </label>
        <br/>
        <button>add language</button>
    </form>
  )
}

export default NewLanguages