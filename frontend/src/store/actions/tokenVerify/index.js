import {verifytoken} from "../../types";

export const verifyTokenAction = content => ({
    type: verifytoken,
    payload: content
});


const URL = `server_name/backend/api/auth/token/verify/`;


function verifyTokenFunction(props){
    const token = props.SignInReducer.token
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    })
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify({"token": token})

    };
 
    fetch(URL, config) .then(res => res.json())
    .then(data => {
        const content = data;
        if (content.code === "token_not_valid") {
            localStorage.removeItem('token');
            props.history.push('/signin');
        } else {
            props.history.push('/');
        }
    })
}
export default verifyTokenFunction;