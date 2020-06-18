import {getfeed} from "../../types";

export const getFilteredPostsAction = content => ({
    type: getfeed,
    payload: content
});

let URL = ""

const getFilteredPostsFunction = (props) => (dispatch) => {

    if (props.FeedReducer.currentFeedState === "POST_LIKE") {
        URL = `server_name/backend/api/social/posts/likes/`;
    } else if (props.FeedReducer.currentFeedState === "POST_FRIEND") {
        URL = `server_name/backend/api/social/posts/friends/`;
    } else if (props.FeedReducer.currentFeedState === "POST_FOLLOW") {
        URL = `server_name/backend/api/social/posts/following/`;
    }

    const token = props.SignInReducer.token
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: 'GET',
        headers
    };

    fetch(URL, config)
    .then(res => res.json())
    .then(data => {
        const postsList = data;
        dispatch(getFilteredPostsAction(postsList));
    })
};
export default getFilteredPostsFunction;