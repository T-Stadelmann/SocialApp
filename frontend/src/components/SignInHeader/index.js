import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SignInHeader = () => {
  return (
    <div className="sign_up_header">
        <p>Don't have an account?</p>
        <button id="sign_up_button"><Link to="/signup">SIGN UP</Link></button>
    </div>
  );
}

export default SignInHeader;
