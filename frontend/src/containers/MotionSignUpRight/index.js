import React from 'react';
import './index.css';
import SignUpHeader from '../../components/SignUpHeader';
import SignUpText from '../../components/SignUpText';
import SignUpEmail from '../../components/SignUpEmail';

class MotionSignUpRight extends React.Component{
    render(){
        return (
            <div className="motion_sign_up_right">
                <SignUpHeader />
                <SignUpText />
                <SignUpEmail /> 
                <p className="dots">&#9679; &#9675; &#9675;</p>
            </div>
        )    
}
}

export default MotionSignUpRight;
