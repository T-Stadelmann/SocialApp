import {userdata} from "../../types";

const initialState = {
    user: '',
};


const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case userdata: {
            return {
                ...state,
                user: action.payload,
    }}
      default: {
            return state
        }
    }
    
}
export default UserReducer;