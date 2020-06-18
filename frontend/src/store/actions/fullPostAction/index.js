import {showFullPost} from "../../types";

export const fullPostAction = (post) => ({
    type: showFullPost,
    payload: post
});


export const fullPostFunction = (post) => (dispatch) => {
    dispatch(fullPostAction(post));
};

