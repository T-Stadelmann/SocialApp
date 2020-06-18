import {showPostMenu} from "../../types";

export const feedPostMenuAction = () => ({
    type: showPostMenu,
});


const feedPostMenuFunction = () => (dispatch) => {
    dispatch(feedPostMenuAction());
};

export default feedPostMenuFunction