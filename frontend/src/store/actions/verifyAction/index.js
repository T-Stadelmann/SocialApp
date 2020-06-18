import {verify,verifyerror} from "../../types";
import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {getFriendsAction} from "../getFriendsAction";

export const verifyAction = () => ({
    type: verify,
});

export const verifyError = () => ({
    type: verifyerror
})

const URL = `server_name/backend/api/auth/registration/validation/`;
 
export const verifyFunction = (data,props) => (dispatch) => {
    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    };

 fetch(URL, config)
    .then(res => res.json())
    .then(data => {
        const response = data;
        if (response === "Success!") {
            dispatch(verifyAction());
        } else {
            dispatch(verifyError());

        }
    })
    }
