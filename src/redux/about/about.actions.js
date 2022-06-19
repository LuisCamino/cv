export const ADD_ABOUT = 'ADD_ABOUT';
export const DELETE_ABOUT = 'DELETE_ABOUT';
export const EDIT_ABOUT = 'EDIT_ABOUT';

export const addAbout = (NewAbout) => dispatch => {
    dispatch({
        type: ADD_ABOUT,
        payload: NewAbout
    })
};

export const deleteAbout = (aboutToDelete) => dispatch => {
    dispatch({
        type: DELETE_ABOUT,
        payload: aboutToDelete
    })
};

export const editAbout = (editAbout, id) => dispatch =>{
    dispatch({
    type: EDIT_ABOUT,
    payload: {editAbout, id}
    })
}