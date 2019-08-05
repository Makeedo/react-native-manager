import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmloyeesFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
})