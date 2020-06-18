import React from 'react';
import './index.css';
import VerifyFrom from '../../components/VerifyForm';

class MotionVerifyRight extends React.Component{
    render(){
        return (
            <div className="motion_verify_right">
                <VerifyFrom />
                <p className="dots">&#9675; &#9675; &#9679;</p>
            </div>
        )    
}
} 
 
export default MotionVerifyRight;
