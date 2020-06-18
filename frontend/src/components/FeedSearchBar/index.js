import React, { useState } from 'react';
import {connect} from 'react-redux';

import './index.css';
import UpdatePostPageFunction from '../../store/actions/updatePostPageAction';

function FeedSearchBar(props) {
    
        const PostPageHandler = (e) => {
            const newFeedState = e.target.id;
            props.dispatch(UpdatePostPageFunction(newFeedState));
         
        }

        return(
            <div className="feed_search_container">
                <div className="search_left">
                   <img src={require('../../assets/images/search_icon.png')} id="search_icon" alt="search icon" />
                   <form>
                    <input name='search_posts' placeholder='Search posts...' type='text'/>
                </form>
                </div>
                <div className="search_right">
                    <p id="POST_ALL" onClick={(e)=>PostPageHandler(e)}>All</p>
                    <p id="POST_LIKE" onClick={(e)=>PostPageHandler(e)}>Liked</p>
                    <p id="POST_FRIEND" onClick={(e)=>PostPageHandler(e)}>Friends</p>
                    <p id="POST_FOLLOW" onClick={(e)=>PostPageHandler(e)}>Follow</p>
                </div>
            </div>
            )
}

const mapStateToProps = state => {
    return {
      ...state,

      };
    };   

export default connect(mapStateToProps)(FeedSearchBar);       
