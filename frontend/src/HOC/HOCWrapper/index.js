import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import verifyTokenFunction from '../../store/actions/tokenVerify/'

export default function HOCWrapper(WrappedComponent) {
    function AuthComponent(props) {
        useEffect(() => {
            redirectUser()
        }, [props.token]);

        const redirectUser = () => {
            if (!props.token) { 
                props.history.push('/signin')
            } else {
                verifyTokenFunction(props);
                }
        };

        return <WrappedComponent {...props}/>
    }
    

    function mapStateToProps(state) {
        return {
            ...state,
            token: state.SignInReducer.token
        }
    }

    return connect(mapStateToProps)(AuthComponent)
}; 