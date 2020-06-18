import {sendedit} from "../../types";

export const sendEditPostAction = (data) => ({
    type: sendedit,
    payload: data, 
});

const sendEditPostFunction = (post_id,props,data) => (dispatch) => {  
    const URL = `server_name/backend/api/social/posts/${post_id}/`;

    const token = props.SignInReducer.token;
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    });

    const config = {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
    };
    fetch(URL, config);
    dispatch(sendEditPostAction(data));
};

export default sendEditPostFunction;