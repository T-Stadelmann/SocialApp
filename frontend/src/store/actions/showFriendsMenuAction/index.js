import {showfriendsmenu} from "../../types";

export const showFriendsMenuAction = () => ({
    type: showfriendsmenu,
});


const showFriendsMenuFunction = () => (dispatch) => {
    dispatch(showFriendsMenuAction());
};

export default showFriendsMenuFunction