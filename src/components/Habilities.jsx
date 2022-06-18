import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHabilities } from '../redux/habilities/habilities.actions';

import "./Languages.css";

const Habilities = () => {

    const {habilities} = useSelector(state => state.habilities);
    const dispatch = useDispatch();
    
    return (
      <div>
          <div className="habilities card">
          <h2>Language</h2>
            {habilities.map((item, index) => {
              return (
                <div key={index}>
                
                    
                  <p>skill {item.skill}</p>
                  <p>skill level: {item.sklvl}</p>

                  <div>
                    {console.log("index", index)}
                    <Link to={`/editHabilities/${index}`}><button>Modificar</button></Link>
                    <button onClick={()=> {dispatch(deleteHabilities(item))}}>Eliminar</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
  }

export default Habilities;