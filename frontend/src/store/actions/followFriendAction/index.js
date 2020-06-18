import {followfriend} from "../../types";

export const followFriendAction = () => ({
    type: followfriend,
});

const followFriendFunction = (props) => (dispatch) => {  
    const URL = "server_name/backend/api/social/followers/toggle-follow/" + props.friend.id + "/";

    const token = props.props.SignInReducer.token;
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: 'POST',
        headers,
        body: {user_id:props.friend.id, username:props.friend.username, things_user_likes:props.friend.things_user_likes}
    };

    fetch(URL, config)
    dispatch(followFriendAction());
    
};
export default followFriendFunction;