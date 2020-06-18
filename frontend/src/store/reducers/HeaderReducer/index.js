import {showheadermenu,showfriendsmenu} from "../../types";

const initialState = {
    showheadermenu: false,
    showfriendsmneu: false,
};


const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case showheadermenu: {
            return {
             ...state,
             showheadermenu: !state.showheadermenu, 
     }}
        case showfriendsmenu: {
            return {
             ...state,
             showfriendsmneu: !state.showfriendsmneu,
     }}

        default: {
            return state
        }
    } 
}
export default HeaderReducer;