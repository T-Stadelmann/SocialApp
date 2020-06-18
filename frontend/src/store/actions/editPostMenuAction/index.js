import {editPostMenu} from "../../types";

export const editPostMenuAction = () => ({
    type: editPostMenu,
});


const editPostMenuFunction = () => (dispatch) => {
    dispatch(editPostMenuAction());
};

export default editPostMenuFunction