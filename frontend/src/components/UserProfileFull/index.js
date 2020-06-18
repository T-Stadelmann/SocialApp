import React, {useEffect} from 'react';
import './index.css';
import '../FeedFullPost/index.css'
import {connect} from 'react-redux';
import FeedYourPosts from '../FeedYourPosts';
import {fullPostFunction} from '../../store/actions/fullPostAction';
import {closeFullPostFunction} from '../../store/actions/closeFullPostAction';
import FeedFullPost from '../FeedFullPost';
import getPostFunction from "../../store/actions/getPostsAction";
import getFriendsFunction from "../../store/actions/getFriendsAction";

function UserProfileFull(props) {  

    useEffect(() => {
        props.dispatch(getPostFunction(props));
        props.dispatch(getFriendsFunction(props));
    },[])

        const fullPostHandler = (e,post) => {
        e.preventDefault();
        props.dispatch(fullPostFunction(post));
      }  
    
      const closeFullPostHandler = () => {
        props.dispatch(closeFullPostFunction());
      } 
  

    const userData = props.UserReducer.user;
    const user_following = userData.following;
    const all_users = props.FriendsReducer;
    const all_posts = props.PostsReducer.postitems;
    let user_followers = [];
    let user_friends = [];
    let user_likes = [];
    let user_posts = [];
    if (all_users) {
        for (let i=0; i < all_users.length; i++) {
            if (all_users[i].followers.contains(userData.id)) {
                user_followers.push(all_users[i])
            }
            if (all_users[i].friends.contains(userData.id)) {
                user_friends.push(all_users[i])
            }
        }
    }
     if (all_posts) {
        for (let i=0; i < all_posts.length; i++) {
            if (all_posts[i].likes.includes(userData.id)) {
                user_likes.push(all_users[i])
            }
            if (all_posts[i].author.id == userData.id) {
                user_posts.push(all_posts[i])
            }
        }
        }

    if(userData === undefined){
        return (
            <div>Loading ...</div>
            )
    } else {  
        return (
            <div className="pop_up_profile">
                    <div className="pop_up_profile_inner">
                        <div className="profile_inner_left">
                            <div className="profile_photo">
                            {userData.avatar ? <img src={userData.avatar} alt={userData.avatar}/> :<img src={require('../../assets/images/blank_avatar.png')} alt={"avatar"}/>}    
                                                        </div>
                            <div className="profile_name">
                               <h1>{userData.first_name} {userData.last_name}</h1>    
                                {userData.location ? <p> userData.location </p> : ""}
                            </div>
                            <div className="edit_profile">
                                <button>EDIT PROFILE</button>
                            </div>
                        </div>
                        <div className="profile_inner_right">
                            <div className="inner_right_top">
                                <div className="profile_about">
                                    <div className="profile_about_content">
                                        <p>About</p>
                                        <p>{userData.about_me ? userData.about_me : "Some text about me some text about me some text about me"}</p>
                                    </div>
                                    <div className="profile_email">
                                        <p>Email</p>
                                        <p>{userData.email}</p>
                                    </div>
                                    <div className="profile_phone">
                                        {userData.phone ? <> <p>Phone Number</p> <p>userData.phone</p></> : ""}
                                    </div>
                                </div>
                                <div className="profile_things_liked">
                                    <p>Things I like</p>
                                    <ul>
                                        {  userData.things_user_likes ? userData.things_user_likes.map(like =>         
                                            <li key={like}>{like}</li>
                                        ) :<> <li>Something</li> <li>Sharl</li> <li>Food</li></>
                                            }
                                    </ul>
                                          </div> 
                            </div>
                              <div className="profile_footer">
                                    <div className="profile_footer_container">
                                        {user_posts.length}
                                        <p>Posts</p>
                                    </div>
                                    <div className="profile_footer_container">
                                        {user_likes.length}
                                        <p>Likes</p>
                                    </div>
                                    <div className="profile_footer_container">
                                        {user_friends.length}
                                        <p>Friends</p>
                                    </div>
                                    <div className="profile_footer_container">
                                        {user_followers.length}
                                        <p>Followers</p>
                                     </div>   
                                    <div className="profile_footer_container">
                                        {user_following ? user_following.length : 0}
                                        <p>Following</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                 
                    <div className="pop_up_profile_feed">
                    <FeedYourPosts 
                      props={props}
                      fullPostHandler={fullPostHandler}
                      closeFullPostHandler={closeFullPostHandler}  
                      />
                    <div>
                              {props.FeedReducer.showFullPost ?  
                              <FeedFullPost 
                               closeFullPostHandler={closeFullPostHandler}  
                               fullPostHandler={fullPostHandler}
                               props={props}
                                />  
                                : null  }  
                            </div> 
         
                
                    </div>
                </div>
            )
    }
}
const mapStateToProps = state => {
    return {
        ...state,
        content: state.content,
      };
    };   

export default connect(mapStateToProps)(UserProfileFull);       