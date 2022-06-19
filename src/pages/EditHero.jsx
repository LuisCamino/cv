import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editHero } from '../redux/hero/hero.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditHero = () => {
    const {id} = useParams();   
    
    const {hero} = useSelector(state => state.hero);
    const heroToUpdate = hero[id];
    console.log("lang to update",heroToUpdate)


    const [form, setForm] = useState(heroToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editHero(form,id))
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
            <span>adress</span>
            <input type="text" name="adress" value={form.adress} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>city</span>
            <input type="text" name="city" value={form.city} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>city</span>
            <input type="text" name="city" value={form.city} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>birth date</span>
            <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>phone</span>
            <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>image</span>
            <input type="text" name="image" value={form.image} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            <span>gitHub</span>
            <input type="text" name="gitHub" value={form.gitHub} onChange={handleChange}/>
        </label>
        <br/>
        <button>update profile</button>
    </form>
  )
}

export default EditHero