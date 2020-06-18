import React from 'react';
import './index.css';
import {connect} from 'react-redux';
import deletePostMenuFunction from '../../store/actions/deletePostMenuAction';
import sendDeletePostFunction from '../../store/actions/sendDeletePostAction';


function FeedDeletePost(props) {   

    const closeDeletePopUp = () => {
        props.dispatch(deletePostMenuFunction());
    }    

    const sendDeletePostHandler = (e) => {
        e.preventDefault();
        const post_id = props.FeedReducer.postFullPopUpID;
        props.dispatch(sendDeletePostFunction(post_id,props));
          }  
      
         return( 
            <div className="delete_pop_up">
                <div className="delete_pop_up_container">
                    <div className="delete_image">
                        <img src={require('../../assets/images/trash.png')} id="deletepostpic" alt="delete post" />
                    </div>
                    <div className="delete_text">
                        <p>Are you sure you want to do this?</p>
                    </div>
                    <div className="delete_buttons">
                        <button id="cancel_delete" onClick={() => closeDeletePopUp()}>NO</button>
                        <button id="confirm_delete" onClick={(e) => sendDeletePostHandler(e)}>YES</button>
                    </div>
                </div>
            </div>
            )
    }

const mapStateToProps = state => {
    return {
 ...state,
      };
    };   

export default connect(mapStateToProps)(FeedDeletePost);       