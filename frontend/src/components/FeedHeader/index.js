import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './index.css';
import HeaderMenu from '../HeaderMenu';
import UpdatePostPageFunction from "../../store/actions/updatePostPageAction";
import FriendsMenu from "../FriendsMenu";


function FeedHeader(props) {
     const PostPageHandler = () => {
            const newFeedState = "POST_ALL";
            props.dispatch(UpdatePostPageFunction(newFeedState));
        }

        return(
            <div className="header_container">
                <div className="header_left">
                    <div className="header_motion">
                        <img src={require('../../assets/images/logo.png')} alt="Motion logo" />
                        <p>Motion</p>
                    </div>
                    <div className="posts_friends">
                    <div className="headerflex" id="postflex">
                    <img src={require('../../assets/images/posts_logo.png')} id="posts" alt="posts logo" onClick={(e)=>PostPageHandler()}/>
                    <Link to="/">Posts</Link>
                    </div>
                    <div className="headerflex" id="friendflex">
                    <img src={require('../../assets/images/friends_logo.jpg')} alt="friends logo" />
                    <Link to="/friends">Find Friends</Link>
                    </div>
                    </div>
                </div>
                <div className="header_right">
                <FriendsMenu/>
                <img src={require('../../assets/images/users/jennifer.png')} alt="profile pic" />
                <HeaderMenu/>
                </div>
            </div>
            )
}

const mapStateToProps = state => {
    return {
        ...state,
      };
    };

export default connect(mapStateToProps)(FeedHeader);

