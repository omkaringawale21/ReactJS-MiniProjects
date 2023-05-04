import React from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../Types';

const AlertsReducer = (state, action) => {
    switch(action.type){
        case SET_ALERT:
            return action.payload;
        case REMOVE_ALERT:
            return null;
        default :
            return state;
    }
}

export default AlertsReducer;