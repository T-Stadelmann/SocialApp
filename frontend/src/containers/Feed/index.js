import React from 'react';
import {connect} from 'react-redux';
import FeedHeader from '../../components/FeedHeader';
import './index.css';
import FeedSearchBar from '../../components/FeedSearchBar';
import FeedBody from '../../components/FeedBody';
import FeedBodyFiltered from '../../components/FeedBodyFiltered';

function Feed(props) {    

    const switchView = (props) => {
        switch(props.FeedReducer.currentFeedState) 
        {
          case "POST_ALL":   return  <FeedBody/>;

          case "POST_LIKE":   return   <FeedBodyFiltered />;
          case "POST_FRIEND":   return <FeedBodyFiltered />;
          case "POST_FOLLOW":   return <FeedBodyFiltered />;
          default:      return   <FeedBody />;
        }
      }

        return(
            <main className="feed" id="feed_body">
                <FeedHeader/>
                <FeedSearchBar/>
                { switchView(props) }
             </main>
            )
        }
        
const mapStateToProps = state => {
                return {
                  ...state,        
                  };
                };   
            
export default connect(mapStateToProps)(Feed);