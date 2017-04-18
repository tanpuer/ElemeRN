/**
 * Created by eengoo on 17/3/14.
 */
import * as types from '../constants/ActionTypes';

export function loadMore(title) {
    //mockData
    return(dispatch,getState)=>{
        dispatch({
            type: types.FRIENDS_IS_LOADING_MORE
        });
        setTimeout(()=>{
            var data = [];
            for(let i=0; i<10; i++){
                data.push(title + Math.floor(Math.random()*100))
            }
            dispatch({
                type: types.FRIENDS_LOADING_FINISHED,
                data:data,
            })
        }, 2000);
    }
}

export function pullToRefresh() {
    
}

export function saveData(data) {
    return(dispatch, getState)=>{
        dispatch({
            type:types.FRIENDS_DATA_CONCAT,
            data:data,
        });
    }
}