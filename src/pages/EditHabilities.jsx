import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editHabilities } from '../redux/habilities/habilities.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditHabilities = () => {
    const {id} = useParams();   
    
    const {habilities} = useSelector(state => state.habilities);
    const habilitiesToUpdate = habilities[id];



    const [form, setForm] = useState(habilitiesToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editHabilities(form,id))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
        
    }
    
    
  return (
    <form onSubmit={handleSubmit}>

        <label>
            <span>language</span>
            <input type="text" name="skill" value={form.skill} onChange={handleChange}/>
        </label>
        <label>
            <span>sklvl</span>
            <input type="text" name="sklvl" value={form.sklvl} onChange={handleChange}/>
        </label>
        
        <button>update skill</button>
    </form>
  )
}

export default EditHabilities;