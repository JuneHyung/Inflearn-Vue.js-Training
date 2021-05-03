import axios from 'axios';
// 1. HTTP Reuest & Response와 관련된 기본설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
    // console.log('뉴왔나?');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    // console.log('애왔나?');
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    // console.log('잡왔나?');
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}


export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList}