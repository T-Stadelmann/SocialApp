import { combineReducers } from 'redux';
import SignInReducer from './SignInReducer/';
import FeedReducer from './FeedReducer/';
import PostsReducer from './PostsReducer';
import FriendsReducer from './FriendsReducer';
import HeaderReducer from './HeaderReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
SignInReducer,
FeedReducer,
PostsReducer,
FriendsReducer,
HeaderReducer,
UserReducer,
})

export default rootReducer;