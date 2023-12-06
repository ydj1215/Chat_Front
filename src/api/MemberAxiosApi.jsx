import axios from "axios";
import { SERVER_DOMAIN } from "../utils/Common";

export const MemberAxiosApi = {
  // 회원 가입 여부 확인
  memberRegCheck: async (email) => {
    console.log("중복 확인 이메일 : ", email);
    return await axios.get(SERVER_DOMAIN + `/member/check?email=${email}`);
  },

  // 회원 가입
  memberReg: async (email, password, name) => {
    // const member = {
    //   email: email,
    //   password: password,
    //   name: name,
    // };
    // 객체 리터럴을 아래와 같이 표현 가능
    const member = { email, password, name }; // 객체 속성 축약
    return await axios.post(SERVER_DOMAIN + "/member/new", member);
  },

  // 회원 전체 조회
  memberGet: async () => {
    return await axios.get(SERVER_DOMAIN + `/member/list`);
  },

  // 회원 상세 조회
  memberGetOne: async (email) => {
    return await axios.get(SERVER_DOMAIN + `/member/detail/${email}`);
  },

  // 회원 조회 페이지네이션
  memberPageList: async (page, size) => {
    return await axios.get(
      SERVER_DOMAIN + `/member/list/page?page=${page}&size=${size}`
    );
  },

  // 총 페이지 수
  memberPageNum: async (page, size) => {
    return await axios.get(
      SERVER_DOMAIN + `/member/list/count?page=${page}&size=${size}`
    );
  },

  // 회원 정보 수정
  memberUpdate: async (email, name, image) => {
    console.log(" 수정할 회원에 대한 새로운 데이터 : ", email, name, image);
    const member = { email, name, image };
    return await axios.put(SERVER_DOMAIN + `/member/modify`, member);
  },

  // 회원 탈퇴
  memberDel: async (email) => {
    const delEmail = { email };
    return await axios.post(SERVER_DOMAIN + "/member/delete", delEmail);
  },

  // 로그인
  memberLogin: async (email, password) => {
    console.log("로그인 이메일 : ", email);
    console.log("로그인 비밀번호 : ", password);
    const loginEmailPassword = { email, password };
    return await axios.post(
      SERVER_DOMAIN + "/member/login",
      loginEmailPassword
    );
  },
};
