import axios from "axios";
import { SERVER_DOMAIN } from "../utils/Common";

export const MovieAxiosApi = {
  // 영화 목록 조회
  movieList: async () => {
    return await axios.get(SERVER_DOMAIN + "/movies/list");
  },

  // 영화 페이지 수 조회
  moviePage: async (page, size) => {
    return await axios.get(
      SERVER_DOMAIN + `/movies/list/count?page=${page}&size=${size}`
    );
  },
  // 영화 페이지네이션 조회
  moviePageList: async (page, size) => {
    return await axios.get(
      SERVER_DOMAIN + `/movies/list/page?page=${page}&size=${size}`
    );
  },
};
