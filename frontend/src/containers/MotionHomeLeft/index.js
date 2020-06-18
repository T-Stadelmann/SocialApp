import React from 'react';
import MotionLogo from '../../components/MotionLogo';
import MotionText from '../../components/MotionText';
import MotionSubText from '../../components/MotionSubText';
import AppStoreButtons from '../../components/AppStoreButtons';
import SocialButtons from '../../components/SocialButtons';
import Copyright from '../../components/Copyright';

class MotionHomeLeft extends React.Component{
    render(){
        return(
            <div className="motion_home_left">
            <MotionLogo/>
            <MotionText />
            <MotionSubText />
            <AppStoreButtons />
            <SocialButtons />
            <Copyright />
            </div>
            )
    }
}
export default MotionHomeLeft;