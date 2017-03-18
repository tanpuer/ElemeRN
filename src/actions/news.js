/**
 * Created by eengoo on 17/3/14.
 */
import * as types from '../constants/ActionTypes';

export function showOrHideNewsModal(show) {
    return (dispatch, getState)=>{
        dispatch({
            type: types.SHOW_OR_HIDE_NEWS_MODAL,
            showModal: show,
        });
    }
}

export function handleChannels(tabs, otherTabs) {
    return (dispatch, getState)=>{
        dispatch({
            type:types.HANDLE_CHANNEL,
            tabs:tabs,
            otherTabs:otherTabs,
        });
    }
}


