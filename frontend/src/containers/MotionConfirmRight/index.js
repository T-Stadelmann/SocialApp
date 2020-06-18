import React from 'react';
import './index.css';
import ConfirmText from '../../components/ConfirmText';
import ConfirmButton from '../../components/ConfirmButton';


class MotionConfirmRight extends React.Component{
    render(){
        return (
            <div className="motion_confirm_right">
                <ConfirmText />
                <ConfirmButton />
                <p className="dots">&#9675; &#9679; &#9675;</p>
            </div>
        )    
}
}
 
export default MotionConfirmRight;
