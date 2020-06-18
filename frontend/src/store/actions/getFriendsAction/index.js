import {getfriends} from "../../types";

export const getFriendsAction = content => ({
    type: getfriends,
    payload: content
});


const URL = `server_name/backend/api/users/`;

const getFriendsFunction = (props) => (dispatch) => {  
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
        const content = data;
        dispatch(getFriendsAction(content));
    })

};
export default getFriendsFunction;