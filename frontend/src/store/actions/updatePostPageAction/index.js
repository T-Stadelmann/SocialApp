import {updatefeedstate} from "../../types";

export const UpdatePostPageAction = (newFeedState) => ({
    type: updatefeedstate,
    payload: newFeedState,
});


const UpdatePostPageFunction = (newFeedState) => (dispatch) => {
    dispatch(UpdatePostPageAction(newFeedState));
};

export default UpdatePostPageFunction