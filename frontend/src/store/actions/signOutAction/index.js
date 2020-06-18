import {logout} from "../../types";

export const signOutAction = token => (
    {
    type: logout,
});

const signOutFunction = () => (dispatch) => {
    dispatch(signOutAction());
    localStorage.removeItem('token');
}
export default signOutFunction 