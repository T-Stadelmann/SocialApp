import {showheadermenu} from "../../types";

export const showHeaderMenuAction = () => ({
    type: showheadermenu,
});


const showHeaderMenuFunction = () => (dispatch) => {
    dispatch(showHeaderMenuAction());
};

export default showHeaderMenuFunction