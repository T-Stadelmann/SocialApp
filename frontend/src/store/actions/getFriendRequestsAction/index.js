import {getfriendrequests} from "../../types";

export const getFriendRequestsAction = content => ({
    type: getfriendrequests,
    payload: content
});


const URL = `server_name/backend/api/social/friends/requests/`;

const getFriendRequestsFunction = (props) => (dispatch) => {
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
        dispatch(getFriendRequestsAction(content));
    })

};
export default getFriendRequestsFunction;