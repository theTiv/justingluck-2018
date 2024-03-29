import React, { Component } from 'react';

// import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// Higher Order Function
const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component { // Anonymous class (Class Factory)

        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                // console.log(error);
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                // console.log(error);
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null}) 
        }

        render() {
            return (
                <Aux>
                    {/* <Modal show={this.state.error} 
                           modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal> */}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;