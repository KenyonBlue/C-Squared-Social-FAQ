import * as api from '../api';

// Action Creators
// because this is going to take time i want to make use of redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
    console.log("error: ", error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log("🚀 ~ file: post.js ~ line 17 ~ createPost ~ data", data)
        
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { updatedData } = await api.updatePost(id, post);
        console.log("🚀 ~ file: post.js ~ line 17 ~ createPost ~ data", updatedData)
        
        dispatch({type: 'UPDATE', payload: updatedData})
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        await api.likePost(id);
        dispatch({type: 'UPDATE', payload: id})
    } catch (error) {
        console.log(error.message)
    }
}
