import React from 'react'
import '../AppStoreButtons/index.css'

const AppStoreButtons = () => {
        return(
            <div className="app_store_buttons">
          <a href="https://www.apple.com/ios/app-store/">  
          <img src={require('../../assets/images/appstore.png')} alt="App Store" />
          </a>
          <a href="https://play.google.com/store?hl=en">
                <img src={require('../../assets/images/googleplay.png')} alt="Play Store" />
            </a>
            </div>
        )
    }
export default AppStoreButtons; 