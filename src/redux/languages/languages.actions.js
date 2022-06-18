export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const DELETE_LANGUAGE = 'DELETE_LANGUAGE';
export const EDIT_LANGUAGE = 'EDIT_LANGUAGE';

export const addLanguage = (newLanguage) => dispatch => {
    dispatch({
        type: ADD_LANGUAGE,
        payload: newLanguage
    })
};

export const deleteLanguage = (languageToDelete) => dispatch => {
    dispatch({
        type: DELETE_LANGUAGE,
        payload: languageToDelete
    })
};

export const editLanguage = (editLanguage, id) => dispatch =>{
    dispatch({
    type: EDIT_LANGUAGE,
    payload: {editLanguage, id}
    })
}