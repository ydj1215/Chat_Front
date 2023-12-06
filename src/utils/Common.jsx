import moment from "moment";
import "moment/locale/ko"; // 한글 로컬라이제이션
moment.locale("ko"); // 한글 설정 적용

export const SERVER_DOMAIN = "http://localhost:8080";
export const WEB_SOCKET_URL = "ws://localhost:8080/ws/chat";

// 타임 스탬프를 받아와 해당 타임 스탬프로부터 현재 시간까지의 경과 시간을 "몇 분 전", "1시간 전" 과 같은 형태로 반환하는 메서드
export const timeFromNow = (timestamp) => {
  return moment(timestamp).fromNow();
};

// 날짜 문자열을 받아와서 포맷팅해주는 메서드
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adds leading 0 if needed
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
};
