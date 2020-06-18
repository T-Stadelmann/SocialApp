import React,{useState} from 'react';
import './index.css';
import {connect} from 'react-redux';
import TimeAgo from 'react-timeago';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import LikePostFunction from '../../store/actions/LikePostAction';
import FeedPostMenu from '../FeedPostMenu';
import editPostMenuFunction from '../../store/actions/editPostMenuAction';
import sendEditPostFunction from '../../store/actions/sendEditPostAction';
import FeedDeletePost from '../FeedDeletePost';

const formatter = buildFormatter(englishStrings)

function FeedFullPost(props) {  
    const [liked_count, setLikes] = useState(props.FeedReducer.postFullPopUp.liked_count);
    const [logged_in_user_liked, setUserLiked] = useState(props.FeedReducer.postFullPopUp.logged_in_user_liked);
    const [editPost,setEditPost] = useState(false);
    const [text_content, setContent] = useState(props.FeedReducer.postFullPopUp.text_content);

    const LikePostHandler = (e) => {       
        const post_id = e.target.id;
        props.dispatch(LikePostFunction(props,post_id));
        if (logged_in_user_liked === true) {
            setLikes(liked_count - 1);
            setUserLiked(!logged_in_user_liked);
        } else {
            setLikes(liked_count + 1);
            setUserLiked(!logged_in_user_liked);
        }
        } 

    const editPostHandler = () => { 
        setEditPost(!editPost);
        props.dispatch(editPostMenuFunction(props));
        }       
    
    const sendEditPostHandler = (e,props,text_content) => {
         e.preventDefault();
         const data = {
            images: [],
            text_content: text_content,

        }
        const post_id = props.FeedReducer.postFullPopUpID;;
        props.dispatch(sendEditPostFunction(post_id,props,data));
          }  

     
    const post_id = props.FeedReducer.postFullPopUpID;
    const postArr = props.PostsReducer.postitems.reverse();
    const current_user_id = props.UserReducer.user.id.toString()
    const fullPost = postArr.filter(function (post){
    return post.id === post_id
                })
        if(fullPost === undefined){
            return (
                <div>Loading ...</div>
                    )
        } else {
            let author_id = fullPost[0].author.id.toString();
            const is_author = author_id === current_user_id ? true : false
             return (
                <div className="pop_up_full_post">
                    <div className="pop_up_full_post_close">
                        <button onClick={(e) => props.closeFullPostHandler(e,props)}>X</button>                         
                        <div className="pop_up_full_inner">
                        { props.FeedReducer.deletePostMenu ? 
                              <FeedDeletePost props={props}/> : 
                            <>    
                            {fullPost[0].images[0] ?  
                                <>
                                <div className="pop_up_full_container">
                                   <div className="pop_up_full_left">
                                    <img src={fullPost[0].images[0].image} alt={fullPost[0].images[0].image}/>
                                    </div> 
                                    <div className="pop_up_full_right">
                                        <div className="pop_up_full_header">
                                            <div className="pop_up_full_header_left">
                                                {fullPost[0].author.avatar ? <img src={fullPost[0].user.avatar} alt={fullPost[0].user.avatar}/> :<img src={require('../../assets/images/blank_avatar.png')} alt={"avatar"}/>}
                                                <div className="post_pop_up_name"> 
                                                    {fullPost[0].author.first_name} {fullPost[0].author.last_name}
                                                    <TimeAgo date={fullPost[0].posted_date} formatter={formatter} />
                                                </div>
                                            </div>
                                            <div className="post_header_dots">  
                                            { is_author === true ?
                                                <FeedPostMenu props={props}
                                                />
                                                :
                                                <img src={require('../../assets/images/dots.png')} alt="three dots" id="dots" />
                                            }
                                            </div>
                                    </div>
                                    <div className="pop_up_post_full_content">
                                    { props.FeedReducer.editPostMenu ? 
                                      <>
                                      <textarea name='new_post' type='text' defaultValue={text_content} onChange={(e) => {setContent(e.currentTarget.value)}}></textarea>
                                        <div className="post_edit_buttons">
                                        <button type="submit" id="submit_edit_post" onClick={(e) => {sendEditPostHandler(e,props,text_content);editPostHandler()}}>Submit</button>
                                        <button type="submit" id="cancel_edit_post" onClick={() => editPostHandler()}>Cancel</button>
                                        </div>
                                        </>
                                        : text_content}
                                        </div>
                                        <div className="pop_up_full_footer_top">
                                            <p>{liked_count} {liked_count ===1 ? "like" : "likes"}</p>
                                        </div>
                                        <div className="pop_up_full_footer_bottom">
                                            <img src={require('../../assets/images/like.png')} alt="like" id={fullPost[0].id} onClick={(e)=>LikePostHandler(e)}/>
                                            <p>Like</p>
                                            <img src={require('../../assets/images/share.png')} alt="share"/>   
                                            <p>Share</p>
                                        </div>         
                                    </div>
                                    </div>
                                    </>
                                    :
                                    <>
                                        <div className="pop_up_full_container">
                                            <div className="hide_me">
                                            </div>                            
                                        <div className="pop_up_full_right_no_img">
                                            <div className="pop_up_full_header">
                                                <div className="pop_up_full_header_left">
                                                    {fullPost[0].author.avatar ? <img src={fullPost[0].author.avatar} alt={fullPost[0].author.avatar}/> :<img src={require('../../assets/images/blank_avatar.png')} alt={"avatar"}/>}
                                                    <div className="post_pop_up_name"> 
                                                        {fullPost[0].author.first_name} {fullPost[0].author.last_name}
                                                        <TimeAgo date={fullPost[0].posted_date} formatter={formatter} />
                                                    </div>
                                                </div>
                                                <div className="post_header_dots">   
                                                { fullPost[0].is_from_logged_in_user ?  
                                            <FeedPostMenu props={props}/>
                                                :
                                                <img src={require('../../assets/images/send_button.png')} alt="three dots" id="dots" />
                                            }
                                                </div>
                                            </div>
                                        <div className="pop_up_post_full_content">
                                        { props.FeedReducer.editPostMenu ? 
                                      <>
                                      <textarea name='new_post' type='text' defaultValue={text_content} onChange={(e) => {setContent(e.currentTarget.value)}}></textarea>
                                        <div className="post_edit_buttons">
                                        <button type="submit" id="submit_edit_post" onClick={(e) => {sendEditPostHandler(e,props,text_content);editPostHandler()}}>Submit</button>
                                        <button type="submit" id="cancel_edit_post" onClick={() => editPostHandler()}>Cancel</button>
                                        </div>
                                        </>
                                        : text_content}
                                        </div>
                                        <div className="pop_up_full_footer_top">
                                            <p>{liked_count} {liked_count ===1 ? "like" : "likes"}</p>
                                        </div>
                                        <div className="pop_up_full_footer_bottom">
                                            <img src={require('../../assets/images/like.png')} alt="like" id={fullPost[0].id} onClick={(e)=>LikePostHandler(e)}/>
                                            <p>Like</p>
                                            <img src={require('../../assets/images/share.png')} alt="share"/>   
                                            <p>Share</p>
                                        </div>         
                                    </div>
                                </div>
                                </>
                              }
                              </>
        }
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

export default connect(mapStateToProps)(FeedFullPost);       