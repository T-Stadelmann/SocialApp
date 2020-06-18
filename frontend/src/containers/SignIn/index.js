import React from 'react';
import './index.css';
import MotionHomeLeft from '../MotionHomeLeft';
import MotionHomeRight from '../MotionHomeRight';

class SignIn extends React.Component {
  render() {
  return (
     <div className="big_container"> 
      <MotionHomeLeft
      className="motion_home_left"/>
      <MotionHomeRight
      className="motion_home_right" /> 
    </div>
  );
}}

export default SignIn;