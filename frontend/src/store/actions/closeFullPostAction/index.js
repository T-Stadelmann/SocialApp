import {closeFullPost} from "../../types";

export const closeFullPostAction = (content) => ({
    type: closeFullPost,
});

export const closeFullPostFunction = (data) => (dispatch) => {
    dispatch(closeFullPostAction(data));
};

