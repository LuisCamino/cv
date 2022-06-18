import {CV } from '../../cv/cv';
import * as actions from './languages.actions';

const { languages } = CV;

const INITIAL_STATE = {
    languages: languages,
}

const languagesReducer = (state = INITIAL_STATE, action) => {
    const {languages} = state;
        switch(action.type) {
            case actions.ADD_LANGUAGE:
                return {...state, languages: [...languages, action.payload]};
            case actions.DELETE_LANGUAGE:
                const languagesFiltered = languages.filter(educ => educ !== action.payload);    //filtramos el array cogiendo los datos que no coindiden
                return {...state, languages: [...languagesFiltered]};       //seteamos el nuevo array recogido sin el objeto a borrar
            case actions.EDIT_LANGUAGE:
                const {id, editLanguage} = action.payload;           //recuperamos nuestros datos del payload
                languages[id] = editLanguage;                        //cambiamos los datos para ese id(en este caso es el index del array)
                return state
            default:
                return state;
          }
        };

export default languagesReducer;