import {deletepopup} from "../../types";

export const deletePostMenuAction = () => ({
    type: deletepopup,
});


const deletePostMenuFunction = () => (dispatch) => {
    dispatch(deletePostMenuAction());
};

export default deletePostMenuFunction