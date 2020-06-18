import {closePostPopUp} from "../../types";

export const closePostPopUpAction = (content) => ({
    type: closePostPopUp,
});

export const closePostPopUpFunction = (data) => (dispatch) => {
    dispatch(closePostPopUpAction(data));
};

