import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const ConfirmButton = () => {
  return (
    <div className="confirm_button">
        <button id="confirm_button"><Link to="/verify">CONTINUE</Link></button>
    </div>
  );
}

export default ConfirmButton;
