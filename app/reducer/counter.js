'use strict';


import * as types from '../action/actionType';
const initialState ={count:0};


export default function counter (state = initialState , action = {}){
    switch (action.type){
        case types.INCREMENT:

        //  ...ES6展开语法  取出state 所有属性。
        return{ ...state,count:state.count+1};
        case types.DECREMENT:
        return{ ...state,count:state.count-1};
        default:
        return state;
    }
    
};
