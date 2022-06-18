export const ADD_HABILITIES = 'ADD_HABILITIES';
export const DELETE_HABILITIES = 'DELETE_HABILITIES';
export const EDIT_HABILITIES = 'EDIT_HABILITIES';

export const addHabilities = (newHabilities) => dispatch => {
    dispatch({
        type:ADD_HABILITIES,
        payload: newHabilities
    })
};

export const deleteHabilities = (habilitiesToDelete) => dispatch => {
    dispatch({
        type: DELETE_HABILITIES,
        payload: habilitiesToDelete,
    })
};

export const editHabilities = (editHabilities, id) => dispatch => {
    dispatch({
        type:EDIT_HABILITIES,
        payload: {editHabilities, id}
    })
};