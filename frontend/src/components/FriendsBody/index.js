import React, {useEffect}  from 'react';
import {connect,} from 'react-redux';
import './index.css';
import FriendContainer from '../FriendContainer';
import getFriendsFunction from '../../store/actions/getFriendsAction';
import getUserFunction from "../../store/actions/getUserAction";

function FriendsBody(props) {    
  
  useEffect(() => {
      props.dispatch(getUserFunction(props))
      props.dispatch(getFriendsFunction(props));
    }, []);
  
  const friends = props.FriendsReducer.friendlist;
  const current_user = props.UserReducer.user;
  if(friends === undefined || friends.length === 0 || current_user === "") {
    return (
        <div>Loading ...</div>
        )
  } else {  
      return(
          <div className="friends_body_container">
              <div className="friends_body">
              {friends.map(friend =>            
                <FriendContainer
                    props={props}
                    friend={friend}
                    key={friend.id}/>
              )}
              </div>
          </div>
            )
    }
  } 

const mapStateToProps = state => {
    return {
      ...state,
      };
    };   

export default connect(mapStateToProps)(FriendsBody);       
