//프로덕션 도메인을 사용하는것을 염두, 애플리케이션이 사용할 백엔드 URL을 동적으로 가져오도록 구현.
let backendHost;// 백엔드 서비스 주소

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost"){
  backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;