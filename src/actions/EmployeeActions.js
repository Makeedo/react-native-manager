import * as types from './types';

export const employeeChanged = ({ prop, value }) => {
    return {
        type: types.EMPLOYEE_CHANGED,
        payload: { prop, value }
    }
};