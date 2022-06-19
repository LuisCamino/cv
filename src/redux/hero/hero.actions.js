export const EDIT_HERO = 'EDIT_HERO';

export const editHero = (editHero, id) => dispatch =>{
    dispatch({
    type: EDIT_HERO,
    payload: {editHero, id}
    })
}