import React from 'react'
import '../SocialButtons/index.css'

const SocialButtons = () => {
    return(
    <div className="social_buttons">
        <a href="https://twitter.com/?lang=en">                
            <img src={require('../../assets/images/twitterbutton.png')} alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/">
            <img src={require('../../assets/images/facebookbutton.png')} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
            <img src={require('../../assets/images/instagrambutton.png')} alt="Instagram" />
        </a>
    </div>
            )
    }
    
export default SocialButtons;