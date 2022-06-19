import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLanguage } from '../redux/languages/languages.actions';



const Languages = () => {

    const {languages} = useSelector(state => state.languages);
    const dispatch = useDispatch();
    
    return (
      <div>
          <div className="language card">
          <h1>Language</h1>
            {languages.map((item, index) => {
              return (
                <div key={index}>             
                  <p>language: {item.language}</p>
                  <p>written: {item.wrlevel}</p>
                  <p>spoken: {item.splevel}</p>
                  <div>
                    {console.log("index", index)}
                    <Link to={`/editLanguages/${index}`}><button>EDIT</button></Link>
                    <button onClick={()=> {dispatch(deleteLanguage(item))}}>DELETE</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
  }

export default Languages