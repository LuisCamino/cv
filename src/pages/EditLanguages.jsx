import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editLanguage } from '../redux/languages/languages.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditLanguages = () => {
    const {id} = useParams();   
    
    const {languages} = useSelector(state => state.languages);
    const languagesToUpdate = languages[id];
    console.log("lang to update",languagesToUpdate)


    const [form, setForm] = useState(languagesToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editLanguage(form,id))
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
            <input type="text" name="language" value={form.language} onChange={handleChange}/>
        </label>
        <label>
            <span>written</span>
            <input type="text" name="wrlevel" value={form.wrlevel} onChange={handleChange}/>
        </label>
        <label>
            <span>spoken</span>
            <input type="text" name="splevel" value={form.splevel} onChange={handleChange}/>
        </label>
        <button>update language</button>
    </form>
  )
}

export default EditLanguages