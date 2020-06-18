import React from 'react';
import FeedHeader from '../../components/FeedHeader';
import FriendsBody from '../../components/FriendsBody';
import './index.css';


class Friends extends React.Component{
    render(){
        return(
            <main id="friend_body" className="friend">
                <FeedHeader/>
                <FriendsBody/>
            </main>
            )
    }
}
export default Friends;
