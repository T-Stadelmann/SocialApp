import React,{useState}  from 'react';
import {connect} from 'react-redux';
import './index.css';
import FeedNewPost from '../FeedNewPost';
import {newPostPopUpFunction} from "../../store/actions/newPostPopUpAction";
import {closePostPopUpFunction} from "../../store/actions/closePostPopUpAction";
import {fullPostFunction} from '../../store/actions/fullPostAction';
import {closeFullPostFunction} from '../../store/actions/closeFullPostAction';
import FeedFeed from '../FeedFeed';
import FeedYourPosts from '../FeedYourPosts'; 
import FeedFullPost from '../FeedFullPost';

function FeedBody(props) {    
    const [content, setContent] = useState(' '); 

    const newPostPopUpHandler = (e,content) => {
        e.preventDefault();
        const data = {
            content,
        };
        props.dispatch(newPostPopUpFunction(data));
      } 

    const closePopUpHandler = () => {
        props.dispatch(closePostPopUpFunction());
      } 
   
    const fullPostHandler = (e,post) => {
        e.preventDefault();
        props.dispatch(fullPostFunction(post));
      }  
    
      const closeFullPostHandler = () => {
        props.dispatch(closeFullPostFunction());
      } 

       const greeting =  "What's on your mind, " + props.UserReducer.user.first_name;
      return(
            <div className="feed_body_container">
                <div className="feed_body">
                    <div className="feed_body_left">
                        <div className="feed_new_post">
                            <img src={require('../../assets/images/users/jennifer.png')} alt="profile pic" />
                            <form className="feed_new_post_form" onSubmit={newPostPopUpHandler}>
                            <textarea name='new_post' placeholder={greeting} type='text' onChange={(e) => {setContent(e.currentTarget.value)}} ></textarea>
                            <button><img src={require('../../assets/images/send_posts.png')} alt="send" onClick={(e)=>newPostPopUpHandler(e,content)}/>
                            </button>
                            </form>
                            <div>
                              {props.showNewPostPopUp ?  
                              <FeedNewPost 
                                closePopUp={closePopUpHandler}  
                                props={props}
                                />  
                                : null  }  
                            </div>  
                            <div>
                              {props.showFullPost ?  
                              <FeedFullPost 
                               closeFullPostHandler={closeFullPostHandler}  
                               fullPostHandler={fullPostHandler}
                               props={props}
                                />  
                                : null  }  
                            </div> 
                        </div>
                      <FeedYourPosts 
                      props={props}
                      fullPostHandler={fullPostHandler}
                      closeFullPostHandler={closeFullPostHandler}  
                      />
                    </div>
                    <div className="feed_body_right">
                      <FeedFeed 
                      props={props}
                      fullPostHandler={fullPostHandler}
                      />
                    </div>
                </div>
            </div>
            )
    } 
    
const mapStateToProps = state => {
    return {
      ...state,
        showNewPostPopUp: state.FeedReducer.showNewPostPopUp,
        content: state.FeedReducer.content,
        showFullPost: state.FeedReducer.showFullPost,

      };
    };   

export default connect(mapStateToProps)(FeedBody);       
