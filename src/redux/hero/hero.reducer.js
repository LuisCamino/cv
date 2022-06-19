import {CV } from '../../cv/cv';
import * as actions from './hero.actions';

const { hero } = CV;

const INITIAL_STATE = {
    hero: hero,
}

const heroReducer = (state = INITIAL_STATE, action) => {
    const {hero} = state;
        switch(action.type) {
            case actions.EDIT_HERO:
                const {id, editHero} = action.payload;           //recuperamos nuestros datos del payload
                hero[id] = editHero;                        //cambiamos los datos para ese id(en este caso es el index del array)
                return state
            default:
                return state;
          }
        };

export default heroReducer;