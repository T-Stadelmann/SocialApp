import React, {useEffect} from 'react';
import {connect} from 'react-redux';

export default function HOCVerify(WrappedComponent) {
    function VerifyComponent(props) {
        useEffect(() => {
            redirectUser(props);
        }, [props.error && props.verify]);

        const redirectUser = () => {
            if (props.verify===true) {
                props.history.push('/signin')
            }
        };

        return <WrappedComponent {...props}/>
    }

    function mapStateToProps(state) {
        return {
            ...state,
            verify: state.SignInReducer.verify,
            error: state.SignInReducer.error
        }
    }

    return connect(mapStateToProps)(VerifyComponent)
}; 