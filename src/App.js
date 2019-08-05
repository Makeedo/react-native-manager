import React, { Component } from 'react';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';
import LoginForm from './components/LoginForm';

class App extends Component {


    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }

    componentWillMount(){
        let config = {
            apiKey: 'AIzaSyAVyOnVKQfrMtALYZGai2UVKrqBWEbzYpU',
            authDomain: 'manager-abefd.firebaseapp.com',
            databaseURL: 'https://manager-abefd.firebaseio.com',
            projectId: 'manager-abefd',
            storageBucket: 'manager-abefd.appspot.com',
            messagingSenderId: '301729837689'
        };
        firebase.initializeApp(config);
    }
}

export default App;