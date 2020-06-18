import {getfeed} from "../../types";

export const getPostsAction = content => ({
    type: getfeed,
    payload: content
});


const URL = `server_name/backend/api/social/posts/`;

const getPostsFunction = (props) => (dispatch) => {  
    const token = props.SignInReducer.token
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: 'GET',
        headers
    };

    fetch(URL, config)
    .then(res => res.json())
    .then(data => {
        const postsList = data;
        dispatch(getPostsAction(postsList));
    })
};
export default getPostsFunction;