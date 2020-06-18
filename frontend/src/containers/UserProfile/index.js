import React from 'react';
import FeedHeader from '../../components/FeedHeader';
import UserProfileBody from '../../components/UserProfileBody';
import UserProfileFull from '../../components/UserProfileFull';
import './index.css';

class UserProfile extends React.Component{
    render(){
        return(
            <main id="user_profile" className="user_profile">
                <FeedHeader/>
                <UserProfileBody/>
                <UserProfileFull/>
            </main>
            )
    }
}
export default UserProfile;