import {senddelete} from "../../types";

export const sendDeletePostAction = () => ({
    type: senddelete,
});



const sendDeletePostFunction = (post_id,props) => (dispatch) => {  
    const URL = `server_name/backend/api/social/posts/${post_id}/`;

    const token = props.SignInReducer.token
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: 'DELETE',
        headers,
    };

    fetch(URL, config);
    dispatch(sendDeletePostAction());

};

export default sendDeletePostFunction;