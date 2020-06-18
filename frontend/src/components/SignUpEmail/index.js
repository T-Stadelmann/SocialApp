import React,{useState} from 'react';
import './index.css';
import {signUpFunction} from "../../store/actions/signUpAction";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function SignUpEmail(props) {
  const [email, setEmail] = useState('');

  const signUpHandler = (e) => {
      e.preventDefault();
      const data = {
          email,
      };
      props.dispatch(signUpFunction(data))
    }
  return (
<>
  <div className="email">
    <form onSubmit={signUpHandler}>
        <input
            name='email'
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            placeholder='Email'
            type='text'
        />
    </form>
    </div>
        <div className="sign_up_button">
        <button id="sign_in_button" onClick={signUpHandler}><Link to="/confirm">CONTINUE</Link></button>
    </div>
</>
  );
}
export default connect()(SignUpEmail);