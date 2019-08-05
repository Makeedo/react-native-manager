import * as types from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    }
};


export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_USER_PENDING })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(reason => loginUserFail(dispatch, reason));
            })

    };
};

const loginUserSuccess = (dispatch, user) => {
    Actions.main();
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch, reason) => {
    dispatch({
        type: types.LOGIN_USER_FAIL,
        payload: reason.message
    });
};