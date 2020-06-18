import React from 'react';
import './index.css';


const ConfirmText = () => {
  return (
    <div className="confirm_text">
        <h1>Congratulations!</h1>
        <img src={require("../../assets/images/sign_up_confirmation.png")} alt="confirm"/>
        <p>We've sent a confirmation code to your email</p>
        <p>email address</p>
    </div>
  )
}

export default ConfirmText;