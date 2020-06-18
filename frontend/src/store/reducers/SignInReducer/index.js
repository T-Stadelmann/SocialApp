import {login, logout, signup, verify,verifyerror} from "../../types";

const initialState = {
    token: null,
    userAuth: null,
    error: false,
    email: null,
    verify: false,
}; 

const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case login: {
            return {
                ...state,
                token: action.payload,
                userAuth: true,
                email: null,            
            }
        }
        case logout: {
            return {
                ...state,
                token: null,
                userAuth: null,
                error: null,
                email: null,
            }
        }
        case signup: {
            return {
                ...state,
                token: null,
                userAuth: null,
                error: null,
                email: action.payload,
            }
        }
        case verify: {
            return{
            ...state, 
            error: false,
            verify: true,

        }
        }
        case verifyerror: {
            return {
                ...state,
                error: true,
                verify: false,                
            }
        }

        default: {
            return state
        }
    }
}
export default SignInReducer;