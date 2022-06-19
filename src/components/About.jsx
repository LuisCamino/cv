import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAbout } from '../redux/about/about.actions';



const About = () => {

    const {about} = useSelector(state => state.about);
    const dispatch = useDispatch();
    
    return (
      <div>
          <div className="about card">
          <h1>About me</h1>
            {about.map((item, index) => {
              return (
                <div key={index}>                    
                  <p>{item.info}</p>
                  <div>
                  
                    <Link to={`/editAbout/${index}`}><button>EDIT</button></Link>
                    <button onClick={()=> {dispatch(deleteAbout(item))}}>DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
  }

export default About