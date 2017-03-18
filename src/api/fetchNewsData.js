/**
 * Created by eengoo on 17/3/18.
 */
const NEWS_URL_PREFIX = "https://api.tianapi.com/";
const APIKEY = "2f06bb40a927c523bb8953bda5dc8384";

export function getNews(api,num=10) {
    const url = `${NEWS_URL_PREFIX}${api}/?key=${APIKEY}&num=${num}`;
    return fetch(url).then(checkStatus).then(checkResult)
}

var checkStatus  = function (response) {
    if (response.status>=200 && response.status<300){
        return response.json();
    }else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

var checkResult = function (result) {
    if (result.code === 200){
        return result.newslist;
    }else {
        throw new Error(JSON.stringify(result));
    }
};