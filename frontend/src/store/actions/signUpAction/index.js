import {signup} from "../../types";

export const signUpAction = email => ({
    type: signup,
    payload: email
});


const URL = `server_name/backend/api/auth/registration/`;

export const signUpFunction = (data) => (dispatch) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };

    fetch(URL, config);
    const email = data.email;
    dispatch(signUpAction(email));
};