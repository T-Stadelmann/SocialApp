import React, {useEffect}  from 'react';
import {connect,} from 'react-redux';
import './index.css';
import getUserFunction from '../../store/actions/getUserAction';

function UserProfileBody(props) {    
  
  useEffect(() => {
     props.dispatch(getUserFunction(props));
    }, []);
  
  const user = props.UserReducer.user;
  if(user === undefined){
    return (
        <div>Loading ...</div>
        )
  } else {  
      return(
          <div className="user_profile_body_container">
              <div className="user_background"> 
              </div>
              <div className="user_profile_body">
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

export default connect(mapStateToProps)(UserProfileBody);       
