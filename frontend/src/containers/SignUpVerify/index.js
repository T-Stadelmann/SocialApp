import React from 'react';
import './index.css';
import MotionHomeLeft from '../MotionHomeLeft';
import MotionVerifyRight from '../MotionVerifyRight';

class SignUpVerify extends React.Component {
  render() {
  return (
     <div className="big_container"> 
      <MotionHomeLeft
      className="motion_home_left"/>
      <MotionVerifyRight
      className="motion_verify_right" /> 
    </div>
  );
}}

export default SignUpVerify;