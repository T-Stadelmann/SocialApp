import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

import {connect} from 'react-redux';
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import FeedLikeButton from '../FeedLikeButton';
import UpdatePostPageFunction from '../../store/actions/updatePostPageAction'
import getFilteredPostFunction from "../../store/actions/getFilteredPostsAction";

const formatter = buildFormatter(englishStrings)

function FeedFeedFiltered(props) {

     useEffect(() => {
         props.dispatch(getFilteredPostFunction(props));
        },[props.FeedReducer.currentFeedState]);


    const PostPageHandler = (e) => {
        const newFeedState = "POST_ALL";
        props.dispatch(UpdatePostPageFunction(newFeedState));
        
    }
    const filtered_posts = props.PostsReducer.postitems.reverse()
    if(filtered_posts === undefined ){
        return (
            <div>Loading ...</div>
                ) 
        } else if (filtered_posts.length === 0 && props.FeedReducer.currentFeedState === "POST_LIKE") {
            return(
                <div className="posts_like_feed">
                <div className="post_like_container">
                <div className="friend_empty">
                    <p>You haven't liked any posts yet..</p>
                    <p>Want to find some more content?</p>
                    <button id="go_like_stuff" onClick={(e)=>PostPageHandler(e)}>Find Posts</button>
                </div>
                </div>
            </div>
            )
        }
        else if (filtered_posts.length === 0 && props.FeedReducer.currentFeedState === "POST_FRIEND") {
            return(
                <div className="posts_like_feed">
                    <div className="post_like_container">
                    <div className="friend_empty">
                        <p>It looks like none of your friends have posted yet..</p>
                        <p>Want to connect with more people?</p>
                        <button id="go_get_friends"><Link to="/friends">Find Friends</Link></button>
                    </div>
                    </div>
                </div>
            )
        }
      else if (filtered_posts.length === 0 && props.FeedReducer.currentFeedState === "POST_FOLLOW") {
            return(
                    <div className="posts_like_feed">
                    <div className="post_like_container">
                    <div className="friend_empty">
                        <p>It looks like no one you're following has posted yet..</p>
                        <p>Want to connect with more people?</p>
                        <button id="go_get_followers"><Link to="/friends">Find Friends</Link></button>
                    </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="posts_like_feed">
                    <div className="post_like_container">
                    {filtered_posts.map(post =>
                        <div className="post_container" id={post.id} key={post.id} >
                            <div className="post_header">
                                {post.author.avatar ? <img src={post.author.avatar} alt={post.author.avatar}/> :<img src={require('../../assets/images/blank_avatar.png')} alt={"avatar"}/>}
                                <div className="post_name"> 
                                    {post.author.first_name} {post.author.last_name}
                                    <TimeAgo date={post.posted_date} formatter={formatter} />
                                </div>
                            </div>
                            <div className="post_content" onClick={(e) => props.fullPostHandler(e,post)}>
                                {post.text_content}
                                </div>

                                <div className="post_images" onClick={(e) => props.fullPostHandler(e,post)}>
                                    {post.images[0] ?  <img src={post.images[0].image} alt={post.images[0].image}/> : <div></div> } 
                                    {post.images[1] ?  <img src={post.images[1].image} alt={post.images[1].image}/> : <div></div> } 
                                    {post.images[2] ?  <img src={post.images[2].image} alt={post.images[2].image}/> : <div></div> } 
                                    {post.images[3] ?  <img src={post.images[3].image} alt={post.images[3].image}/> : <div></div> }             
                            </div>
                            <div className="post_footer">
                                <FeedLikeButton 
                                props={props}
                                post={post}
                                />
                            </div>
                        </div>)}
                </div>
                </div>
            )}   
    }


const mapStateToProps = state => {
    return {
        ...state,
      };
    };   

export default connect(mapStateToProps)(FeedFeedFiltered);

