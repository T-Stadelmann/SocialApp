import {getfriends,followfriend,friendfriend} from "../../types";

const initialState = {
    friendlist: [],
    
};


const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case getfriends: {
            return {
            ...state,
            friendlist: action.payload
    }}
    case followfriend: {
        return{
            ...state,
        }
    }
    case friendfriend: {
        return{
            ...state,
        }
    }

      default: {
            return state
        }
    }
    
}
export default FriendsReducer;