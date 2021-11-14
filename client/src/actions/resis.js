import * as api from '../api';

// Action Creators
export const getResis = () => async (dispatch) => {
    try {
        const { data } = await api.fetchResis();
        dispatch({
            actionType: 'FETCH_ALL',
            payload: data}
        );
    } catch (error) {
        console.log(error.message);
    }
    

}