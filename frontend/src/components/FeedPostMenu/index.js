import React,{useState} from 'react';
import {connect} from 'react-redux';

import './index.css';
import feedPostMenuFunction from '../../store/actions/feedPostMenuAction/';
import editPostMenuFunction from '../../store/actions/editPostMenuAction';
import deletePostMenuFunction from '../../store/actions/deletePostMenuAction';

function FeedPostMenu(props){
    const [showPostMenu,setPostMenu] = useState(false); 
    const [editPost,setEditPost] = useState(false);
    const [deletePost,setDeletePost] = useState(false);

    const showPostMenuHandler = (props) => {    
        setPostMenu(!showPostMenu);
        props.dispatch(feedPostMenuFunction(props));
        }
        
    const editPostHandler = (props) => { 
        setEditPost(!editPost);
        props.dispatch(editPostMenuFunction(props));
        }   
    
    const deletePostHandler = (props) => { 
        setDeletePost(!deletePost);
        props.dispatch(deletePostMenuFunction(props));
        }       
  
    return (
      <div className="feed_post_menu_container">
        <button onClick={()=>showPostMenuHandler(props)}></button>
        {
          showPostMenu
            ? (
              <div className="feed_post_menu">
                <button id="edit_post" onClick={() => {editPostHandler(props); showPostMenuHandler(props)}}><img src={require('../../assets/images/edit.png')} id="editpost" alt="editpost" />Edit</button>
                <button id="delete_post" onClick={() => {deletePostHandler(props); showPostMenuHandler(props)}}><img src={require('../../assets/images/trash.png')} id="deletepost" alt="deletepost" />Delete</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
     );
    }
    const mapStateToProps = state => {
        return {
     ...state,
          };
        };   
    
    export default connect(mapStateToProps)(FeedPostMenu);       