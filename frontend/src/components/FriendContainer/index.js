import React,{useState} from 'react';
import './index.css';
import {connect} from 'react-redux';
import followFriendFunction from '../../store/actions/followFriendAction';
import friendFriendFunction from '../../store/actions/friendFriendAction';

function FriendContainer(props) {
    const current_user_following = props.UserReducer.user.following;
    const current_user_friends = props.UserReducer.user.friends;
    const [is_following,setFollowing] = useState(current_user_following.includes(props.friend.id));
    const [is_friends,setFriends] = useState(current_user_friends.includes(props.friend.id));
   
    const FollowFriendHandler = (e) => {     
        e.preventDefault();  
        props.dispatch(followFriendFunction(props));
            setFollowing(!is_following);
    }


    const FriendFriendHandler = (e) => {
        e.preventDefault();
        props.dispatch(friendFriendFunction(props));
            setFriends("SENT");
    }

    const is_user_friends = () => {
        switch(is_friends){
            case true:
                return <button className="already_friend_button"><img src={require('../../assets/images/check.png')} alt="check" id="check"/>FRIEND</button>
            case false:
                return <button class_name="not_friend_button" onClick={(e)=>FriendFriendHandler(e)}>ADD FRIEND</button>
            case "SENT":
                return <button class_name="sent_friend_button">SENT</button>
        }
    }

    return (
        <div className="friend_container" id={props.friend.id} key={props.friend.id}>
            <div className="friend_photo">
                {props.friend.avatar ? <img src={props.friend.avatar} alt={"avatar"}/> : 
                <img id="blank_avatar" src={require('../../assets/images/blank_avatar.png')} alt={"avatar"}/> }
            </div>
            <div className="friend_name">
                <h1>{props.friend.first_name} {props.friend.last_name} </h1>
                <p>{props.friend.location}</p>
            </div>
            <div className="friend_buttons">
                { is_following ?
                <button className="already_follow_button" onClick={(e)=>FollowFriendHandler(e)}>FOLLOWING</button>
                :
                <button className="not_friend_button" onClick={(e)=>FollowFriendHandler(e)}>FOLLOW</button>
                }

                { is_user_friends() }

            </div>
            <div className="friend_text">
                <p>{props.friend.about_me}</p>
            </div>
            <div className="friend_interests">
                <ul>
                    {props.friend.things_user_likes.map(like =>         
                        <li key={like}>{like}</li>
                            )}
                </ul>
            </div>                    
        </div>
            )
}

const mapStateToProps = state => {
    return {
        ...state,
      };
    };   

export default connect(mapStateToProps)(FriendContainer);       

