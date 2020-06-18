import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SignUpHeader = () => {
  return (
    <div className="sign_up_header">
        <p>Already have an account?</p>
        <button id="sign_up_button"><Link to="/signin">SIGN IN</Link></button>
    </div>
  );
}

export default SignUpHeader;