import React from 'react';
import SignInHeader from '../../components/SignInHeader/index.js';
import SignInText from '../../components/SignInText/index.js';
import SignInUserPass from '../../components/SignInUserPass/index.js';

class MotionHomeRight extends React.Component{
    render(){
        return (
            <div className="motion_home_right">
                <SignInHeader/>
                <SignInText />
                <SignInUserPass />
            </div>
        )    
}
}

export default MotionHomeRight;
