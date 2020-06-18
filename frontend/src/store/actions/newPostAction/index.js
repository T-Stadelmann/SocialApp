import {newpost} from "../../types";

export const newPostAction = content => ({
    type: newpost,
    payload: content
});


const URL = `server_name/backend/api/social/posts/`;

export const newPostFunction = (data,props) => (dispatch) => {  
    const token = props.SignInReducer.token
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };

    fetch(URL, config);
    const newPost = config.body;
    dispatch(newPostAction(newPost));
};