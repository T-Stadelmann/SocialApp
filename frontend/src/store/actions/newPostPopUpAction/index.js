import {showNewPostPopUp} from "../../types";

export const newPostPopUpAction = (content) => ({
    type: showNewPostPopUp,
    payload: content
});


export const newPostPopUpFunction = (data) => (dispatch) => {
    dispatch(newPostPopUpAction(data));
};

