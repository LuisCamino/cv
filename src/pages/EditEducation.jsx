import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editEducation } from '../redux/education/education.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditEducation = () => {
    const {id} = useParams();   
    
    const {education} = useSelector(state => state.education);
    const educationToUpdate = education[id];
    console.log("education to update", educationToUpdate)


    const [form, setForm] = useState(educationToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editEducation(form,id))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <h1>editing "{form.name}"</h1>
        <label>
            <span>name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>date</span>
            <input type="text" name="date" value={form.date} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>where</span>
            <input type="text" name="where" value={form.where} onChange={handleChange}/>
        </label>
        <br/>
        <button>update education</button>
    </form>
  )
}

export default EditEducation