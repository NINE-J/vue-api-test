// axios 전역 설정 관리 시 서버 재시작 필요
import axios from "axios";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 로직
    console.log("request info at interceptors:", config);

    return config;
  },
  function (err) {
    // 오류를 리턴 해주기 전에 수행할 로직
    console.log(err);

    return Promise.reject(err);
  }
);

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (response) {
    // 응답 이후 수행할 로직
    console.log("response info at interceptors:", response);

    return response;
  },
  function (err) {
    // 오류를 리턴 해주기 전에 수행할 로직
    return Promise.reject(err);
  }
);

export default axios;
