import * as api from '../api';

// Action Creators
// because this is going to take time i want to make use of redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
    console.log("🚀 ~ file: post.js ~ line 10 ~ getPosts ~ error", error.message)
    }
}