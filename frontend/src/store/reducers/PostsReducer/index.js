import {getfeed, likepost} from "../../types";

const initialState = {
    postitems: [],
};


const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case getfeed: {
            return {
            ...state,
            postitems: action.payload,
    }}
        case likepost: {
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
    
}
export default PostsReducer;