import React,{useEffect} from 'react';
import './index.css';
import {connect} from 'react-redux';
import TimeAgo from 'react-timeago';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import FeedLikeButton from '../FeedLikeButton';

 
const formatter = buildFormatter(englishStrings)

function FeedYourPosts(props) {
    useEffect(() => {
        }, []);

    const posts = props.PostsReducer.postitems;
    if(posts === undefined || posts.length === 0 || posts.code === "token_not_valid"){
            return (
                <div> </div>
                )
        } else {
            const yourPosts = posts.filter(post => post.author.id === props.UserReducer.user.id).reverse()
            return (
                <div className="posts">
                    {yourPosts.map(post => 
                        <div className="post_container" id={post.id} key={post.id}>
                            <div className="post_header">
                                {post.author.avatar ? <img src={post.author.avatar} alt={post.author.avatar}/> :<img src={require('../../assets/images/blank_avatar.png')} alt="avatar"/>}
                                <div className="post_name"> 
                                    {post.author.first_name} {post.author.last_name}
                                    <TimeAgo date={post.posted_date} formatter={formatter} />
                                </div>
                            </div>
                            <div className="post_content" onClick={(e) => props.fullPostHandler(e,post)}>
                                {post.text_content}
                                </div>

                                <div className="post_images">
                                    {post.images[0] ?  <img src={post.images[0].image} alt={post.images[0].image}/> : <div></div> } 
                                    {post.images[1] ?  <img src={post.images[1].image} alt={post.images[1].image}/> : <div></div> } 
                                    {post.images[2] ?  <img src={post.images[2].image} alt={post.images[2].image}/> : <div></div> } 
                                    {post.images[3] ?  <img src={post.images[3].image} alt={post.images[3].image}/> : <div></div> }             
                            </div>
                            <div className="post_footer">
                            <div className="post_footer">
                                <FeedLikeButton 
                                props={props}
                                post={post}
                                />
                            </div>                            </div>
                        </div>)}
                </div>
            )}   
    }



const mapStateToProps = state => {
    return {
        ...state,
      };
    };   

export default connect(mapStateToProps)(FeedYourPosts);       

