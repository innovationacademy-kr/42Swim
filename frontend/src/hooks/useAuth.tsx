import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await axios({
    method: "get",
    url: url,
    withCredentials: true,
  })
    .then((response) => response.data)
    .catch((err) => {
      if (!err.status) console.log("Unknown Network Error in axios");
      else {
        console.error(err);
        throw err;
      }
    });
  return res;
};

const useAuth = () => {
  const url = `${import.meta.env.VITE_API_HOST}/users/info`;
  const { data, error } = useSWR(url, fetcher);
  // mutate 사용해서 logout 구현하기 파라미터 어떻게 구현할지 생각해보기

  return {
    isLogin: data,
    user: data ? (data.result ? data.user : null) : null,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAuth;
