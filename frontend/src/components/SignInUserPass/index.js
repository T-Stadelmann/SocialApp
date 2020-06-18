import React,{useState} from 'react';
import { connect } from 'react-redux'
import {signInFunction} from "../../store/actions/signInAction";
import './index.css';

function SignInUserPass(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };

        props.dispatch(signInFunction(data))
    };
    const onKeyPress = (e) => {
        if(e.which === 13) {
          signInHandler(e);
        }
      }

    return (
        <>
         <div className="user">
            <form onSubmit={signInHandler}>
                <input
                    name='email'
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    placeholder='Email'
                    type='text'
                />
                <input
                    name='password'
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                    placeholder='Password'
                    type='password'
                    onKeyPress={(e) => onKeyPress(e)}
                />  
              </form>
            </div>
            <div className="sign_in_button">
            <button id="sign_in_button" onClick={signInHandler} onKeyPress={(e) => onKeyPress(e)} >SIGN IN</button>
            </div>
        </>
    );
    }   
export default connect()(SignInUserPass);
