import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './index.css';
import showHeaderMenuFunction from '../../store/actions/showHeaderMenuAction';
//import viewProfileFunction from '../../store/actions/viewProfileAction';
import signOutFunction from '../../store/actions/signOutAction';

function HeaderMenu(props){
    const [showHeaderMenu,setHeaderMenu] = useState(false); 
   
    const showHeaderMenuHandler = (props) => {    
        setHeaderMenu(!showHeaderMenu);
        props.dispatch(showHeaderMenuFunction(props));
        }
        
    const signOutHandler = (props) => { 
      props.dispatch(signOutFunction(props));
        }       
  
    return (
      <div className="header_menu_container">
        <button onClick={()=>showHeaderMenuHandler(props)}></button>
        { showHeaderMenu ? 
              <div className="header_menu">
              <button id="view_profile" onClick={() => {showHeaderMenuHandler(props)}}><Link to="/profile"><img src={require('../../assets/images/profile.png')} alt="profile" id="profile"/>Profile</Link></button>
                <button id="sign_out" onClick={() => {signOutHandler(props); showHeaderMenuHandler(props)}}><Link to="/signin"> <img src={require('../../assets/images/logout.png')} alt="logout" id="logout"/>Logout</Link></button>
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
    
    export default connect(mapStateToProps)(HeaderMenu);       