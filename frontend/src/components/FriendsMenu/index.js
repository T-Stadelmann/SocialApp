import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './index.css';
import showHeaderMenuFunction from '../../store/actions/showHeaderMenuAction';
//import viewProfileFunction from '../../store/actions/viewProfileAction';
import signOutFunction from '../../store/actions/signOutAction';
import showFriendsMenuFunction from "../../store/actions/showFriendsMenuAction";

function FriendsMenu(props){
    const [showFriendsMenu,setFriendsMenu] = useState(false);
   
    const showFriendsMenuHandler = (props) => {
        setFriendsMenu(!showFriendsMenu);
        props.dispatch(showFriendsMenuFunction(props));
        }
        



    return (
      <div className="friends_menu_container">
           <img src={require('../../assets/images/alerts.png')} alt="alerts" id="alerts" onClick={()=>showFriendsMenuHandler(props)}/>
        { showFriendsMenu ?
              <div className="friends_menu">
                  <div className="received_requests">
                  <p>Received Requests</p>
                  </div>
                  <div className="sent_requests">
                  <p>Sent Requests</p>
                  </div>
              </div>
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
    
    export default connect(mapStateToProps)(FriendsMenu);