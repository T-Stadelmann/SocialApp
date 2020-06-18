import React from 'react';
import './index.css';
import MotionHomeLeft from '../../containers/MotionHomeLeft';
import MotionConfirmRight from '../../containers/MotionConfirmRight';

class SignUpConfirm extends React.Component {
  render() {
  return (
     <div className="big_container"> 
      <MotionHomeLeft
      className="motion_home_left"/>
      <MotionConfirmRight
      className="motion_sign_up_right" /> 
    </div>
  );
}}

export default SignUpConfirm;