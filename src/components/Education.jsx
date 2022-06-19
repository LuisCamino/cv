import React from 'react'
import "./Education.scss";
import { useSelector, useDispatch } from 'react-redux';
import { deleteEducation } from '../redux/education/education.actions';
import { Link } from 'react-router-dom';

const Education = () => {
  const {education} = useSelector(state => state.education);
  const dispatch = useDispatch();
  
    return (
      <div>
        <div className="education card">
        <h1>Education</h1>
          {education.map((item, index) => {
            return (
              <div key={index}>
                <p className="name"> {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <div>
                  <Link to={`/editEducation/${index}`}><button>EDIT</button></Link>
                  <button onClick={()=> {dispatch(deleteEducation(item))}}>DELETE</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default Education