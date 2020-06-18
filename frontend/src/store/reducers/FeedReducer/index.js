import {showNewPostPopUp,closePostPopUp,newpost,showFullPost,closeFullPost,showPostMenu,editPostMenu,deletepopup,sendedit,senddelete, updatefeedstate} from "../../types";

const initialState = {
    showNewPostPopUp: false,
    image: null,
    content: '',
    share: null,
    showFullPost: false,
    postFullPopUp: null,
    postFullPopUpID: null,
    showPostMenu: false,
    editPostMenu: false,
    deletePostMenu: false,
    currentFeedState: 'POST_ALL',
};


const FeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case showNewPostPopUp: {
         return {
             ...state,
             showNewPostPopUp: !state.showNewPostPopUp, 
             content: action.payload,
     }}
          case closePostPopUp: {
            return {
            ...state,
            showNewPostPopUp: !state.showNewPostPopUp, 
    }}
        case newpost: {
            return {
            ...state,
            showNewPostPopUp: !state.showNewPostPopUp
    }}
    case closeFullPost: {
        return {
        ...state,
        showFullPost: !state.showFullPost, 
        postFullPopUp: null,
        postFullPopUpID: null,

}}
    case showFullPost: {
        return {
        ...state,
        postFullPopUp: action.payload,
        postFullPopUpID: action.payload.id,
        showFullPost: !state.showFullPost
}}

    case showPostMenu: {
        return {
        ...state,
        showPostMenu: !state.showPostMenu
        }}

    case editPostMenu: {
        return {
        ...state,
        editPostMenu: !state.editPostMenu,
        }}

    case deletepopup: {
        return {
            ...state,
            deletePostMenu: !state.deletePostMenu,
            }}        

    case sendedit: {
        return {
            editPostMenu: !state.editPostMenu,
            ...state,
            content: action.payload.content,
        }} 

    case senddelete: {
        return {
            ...state,
            deletePostMenu: !state.deletePostMenu,
        }}

    case updatefeedstate: {
        return {
            ...state,
            currentFeedState: action.payload,
        }
    }
            default: {
        return state
        }
    }
    
}
export default FeedReducer;