import React from 'react';
import './index.css';
import MotionHomeLeft from '../../containers/MotionHomeLeft';
import MotionSignUpRight from '../../containers/MotionSignUpRight';

class SignUp extends React.Component {
  render() {
  return (
     <div className="big_container"> 
      <MotionHomeLeft
      className="motion_home_left"/>
      <MotionSignUpRight
      className="motion_sign_up_right" /> 
    </div>
  );
}}

export default SignUp;