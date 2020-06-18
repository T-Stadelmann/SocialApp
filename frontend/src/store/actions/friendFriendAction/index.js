import {friendfriend} from "../../types";

export const friendFriendAction = () => ({
    type: friendfriend,
});

const friendFriendFunction = (props) => (dispatch) => {
    const URL = "server_name/backend/api/social/friends/request/" + props.friend.id + "/";

    const token = props.props.SignInReducer.token;
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: 'POST',
        headers,
    };

    fetch(URL, config)
    dispatch(friendFriendAction());
    
};
export default friendFriendFunction;