import React, {useState} from 'react';
import './index.css';
import {verifyFunction} from "../../store/actions/verifyAction";
import { connect } from 'react-redux';

function VerifyForm(props) {
  const [verify_token, setValidationCode] = useState('');
  const [email, setEmail] = useState(props.SignInReducer.email);
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [password_repeat, setPasswordRepeat] = useState('');

  const verifyHandler = (e,props) => {
      e.preventDefault();
      const data = {
        verify_token,
        email,
        username,
        first_name,
        last_name,
        password,
        password_repeat,
      };
      props.dispatch(verifyFunction(data,props));
    }
  return (
<>
  <div className="verify_form">
  <h1>Verification</h1>
  <div className="verify_flex">
    <form onSubmit={verifyHandler} id="verification_form" name="verification_form">
      <input
          name='code'
          onChange={(e) => setValidationCode(e.currentTarget.value)}
          value={verify_token}
          placeholder='Verify Code'
          type='text'
      />
        <input
            name='email'
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            placeholder={email}
            type='text'
        />
        <input
            name='username'
            onChange={(e) => setUsername(e.currentTarget.value)}
            value={username}
            placeholder='Username'
            type='text'
        />
        <input
            name='first_name'
            onChange={(e) => setFirstName(e.currentTarget.value)}
            value={first_name}
            placeholder='First Name'
            type='text'
        />
        <input
            name='last_name'
            onChange={(e) => setLastName(e.currentTarget.value)}
            value={last_name}
            placeholder='Last Name'
            type='text'
        />
        <input
            name='password'
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            placeholder='Password'
            type='password'
        />
        <input
            name='password_repeat'
            onChange={(e) => setPasswordRepeat(e.currentTarget.value)}
            value={password_repeat}
            placeholder='Password Repeat'
            type='password'
        />
    </form>
    </div>
    </div>
    <div className="verify_button">
        <button id="verify_button" onClick={(e) => {verifyHandler(e,props)}}>COMPLETE</button>
    </div>
</>
  );
}
const mapStateToProps = state => {
  return {
      ...state,
    };
  };   

export default connect(mapStateToProps)(VerifyForm);
