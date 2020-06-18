import {likepost} from "../../types";

export const LikePostAction = () => ({
    type: likepost
});

const LikePostFunction = (props,post_id) => (dispatch) => {
    const URL = "server_name/backend/api/social/posts/toggle-like/" + post_id + "/";
    const token = props.props.SignInReducer.token;
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }); 

    const config = {
        method: 'POST',
        headers,
    };

    fetch(URL, config);
    dispatch(LikePostAction());

};
export default LikePostFunction;