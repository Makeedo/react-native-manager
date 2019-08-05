import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onLoginPress(){
        let {loginUser, email, password} = this.props;
        loginUser({email, password})
    }

    renderError(error) {
        if(error){
            return(
                <CardSection additionalStyles={styles.errorContainerStyle}>
                    <Text style={styles.errorStyle}>
                        {error}
                    </Text>
                </CardSection>
            );
        }
    }

    renderButton(loading) {
        if(loading){
            return(<Spinner/>);
        } else {
            return(
                <Button onPress={this.onLoginPress.bind(this)}>
                    Login
                </Button>
            );
        }


    }

    render(){
        let {email, password, error, loading} = this.props;
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={email}
                        keyboardType="email-address"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                    />
                </CardSection>
                {this.renderError(error)}
                <CardSection>
                    {this.renderButton(loading)}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorContainerStyle:{
        justifyContent: 'center',
        borderBottomWidth: 0,
    },
    errorStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    let { email, password, user, error, loading } = auth;
    return { email, password, user, error, loading };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);