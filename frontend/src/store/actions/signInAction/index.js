import {login} from "../../types";

export const signInAction = (token) => (
    {
    type: login,
    payload: token,
});

const URL = `server_name/backend/api/auth/token/`;

export const signInFunction = (data) => (dispatch) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };

        fetch(URL, config)
        .then(res => res.json())
        .then(data => {
            const {access} = data;
            dispatch(signInAction(access));
            localStorage.setItem('token', access);
        });
};