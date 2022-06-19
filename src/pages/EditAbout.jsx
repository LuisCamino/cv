import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editAbout } from '../redux/about/about.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditAbout = () => {
    const {id} = useParams();   
    
    const {about} = useSelector(state => state.about);
    const languagesToUpdate = about[id];



    const [form, setForm] = useState(languagesToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editAbout(form,id))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
        
    }
    
    
  return (
    <form onSubmit={handleSubmit}>
        <h1>editing "{form.info}"</h1>
        <label>
            <span>info</span>
            <input type="text" name="info" value={form.info} onChange={handleChange}/>
        </label>
        <br/>
        
        <button>update info</button>
    </form>
  )
}

export default EditAbout