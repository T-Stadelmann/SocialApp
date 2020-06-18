import React,{useState}  from 'react';
import {connect} from 'react-redux';
import './index.css';
import LikePostFunction from '../../store/actions/LikePostAction';

function FeedLikeButton(props) {    
    const [liked_count, setLikes] = useState(props.post.liked_count);
    const [logged_in_user_liked, setUserLiked] = useState(props.post.logged_in_user_liked);

    const LikePostHandler = (e) => {
        const post_id = e.target.id;
        const new_post = props.post;
        props.post.logged_in_user_liked = !new_post.logged_in_user_liked;
        props.dispatch(LikePostFunction(props,post_id));

        if (logged_in_user_liked === true) {
            setLikes(liked_count - 1);
            setUserLiked(false);
            props.post.liked_count = props.post.liked_count - 1;

        } else {
            setLikes(liked_count + 1);
            setUserLiked(true);
            props.post.liked_count = props.post.liked_count + 1;
        }
        }

       return(
           <>
        <div className="post_footer_left">
            <img src={require('../../assets/images/like.png')} alt="like" id={props.post.id} onClick={(e) =>LikePostHandler(e)}/>
            <p>Like</p>
            <img src={require('../../assets/images/share.png')} alt="share"/>   
            <p>Share</p>
        </div>
        <div className="post_footer_right">
            <p>{props.post.liked_count} {props.post.liked_count ===1 ? "like" : "likes"}</p>
         </div>
         </>   
            )
    }
    
const mapStateToProps = state => {
    return {
        ...state,
      };
    };   

export default connect(mapStateToProps)(FeedLikeButton);       