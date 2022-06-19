import {CV } from '../../cv/cv';
import * as actions from './about.actions';

const { about } = CV;

const INITIAL_STATE = {
    about: about,
}

const aboutReducer = (state = INITIAL_STATE, action) => {
    const {about} = state;
        switch(action.type) {
            case actions.ADD_ABOUT:
                return {...state, about: [...about, action.payload]};
            case actions.DELETE_ABOUT:
                const aboutFiltered = about.filter(abo => abo !== action.payload);    //filtramos el array cogiendo los datos que no coindiden
                return {...state, about: [...aboutFiltered]};       //seteamos el nuevo array recogido sin el objeto a borrar
            case actions.EDIT_ABOUT:
                const {id, editAbout} = action.payload;           //recuperamos nuestros datos del payload
                about[id] = editAbout;                        //cambiamos los datos para ese id(en este caso es el index del array)
                return state
            default:
                return state;
          }
        };

export default aboutReducer;