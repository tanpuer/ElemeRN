/**
 * Created by cw on 2017/3/30.
 */
import * as types from '../constants/ActionTypes';

export function login(id, password) {
    return(dispatch,getState)=>{
        if (id==null || password==null){
            dispatch({
                types:types.LOGIN_NULL
            });
        }else if (id === "chenwei" && password === "123456"){
            //mock
            setTimeout(()=>{
                dispatch({
                    type:types.LOGIN_SUCCESS
                })
            },2000);
        }else {
            setTimeout(()=>{
                dispatch({
                    type:types.LOGIN_FAILED
                })
            },2000);
        }
    }
}