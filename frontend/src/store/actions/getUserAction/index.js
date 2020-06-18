import {userdata} from "../../types";

export const getUserAction = (data) => ({
    type: userdata,
    payload: data,
});

const URL = `server_name/backend/api/users/me/`;

const getUserFunction = (props) => (dispatch) => {  
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
        dispatch(getUserAction(data));
    })
};
export default getUserFunction;