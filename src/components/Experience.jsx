import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteExperience } from '../redux/experience/experience.actions';

import "./Experience.css";

const Experience = () => {
  const {experience} = useSelector(state => state.experience);
  const dispatch = useDispatch();
  
  return (
    <div>
        <div className="experience card">
        <h1>Experience</h1>
          {experience.map((item, index) => {
            return (
              <div key={index}>

               
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <div>
 
                  <Link to={`/editexperience/${index}`}><button>EDIT</button></Link>
                  <button onClick={()=> {dispatch(deleteExperience(item))}}>DELETE</button>
                </div>
              </div>
              
            );
          })}
        </div>
      </div>
  )
}

export default Experience