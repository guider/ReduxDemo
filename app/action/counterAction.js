'use strict';

import * as types from './actionType';

export function decrement(){
    return {
        type: types.DECREMENT
    };
}

export function increment(){
    return {
        type : types.INCREMENT
    };
}