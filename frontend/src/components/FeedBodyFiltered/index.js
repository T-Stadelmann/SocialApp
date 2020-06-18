import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import {fullPostFunction} from '../../store/actions/fullPostAction';
import {closeFullPostFunction} from '../../store/actions/closeFullPostAction';
import FeedFeedFiltered from '../FeedFeedFiltered';
import FeedFullPost from '../FeedFullPost';

function FeedBodyFiltered(props) {
 
  const fullPostHandler = (e,post) => {
      e.preventDefault();
      props.dispatch(fullPostFunction(post));
    }  
  
    const closeFullPostHandler = () => {
      props.dispatch(closeFullPostFunction());
    } 

  return(
    <div className="feed_body_container">
      <div className="feed_body">
        <div>
          {props.showFullPost ?  
            <FeedFullPost 
            closeFullPostHandler={closeFullPostHandler}  
            fullPostHandler={fullPostHandler}
            props={props}
            />  
            : null  }  
          </div> 

            <FeedFeedFiltered
            props={props}
            fullPostHandler={fullPostHandler}
            />

        </div>
    </div>

        )
    }
    
const mapStateToProps = state => {
    return {
      ...state,

      };
    };   

export default connect(mapStateToProps)(FeedBodyFiltered);
