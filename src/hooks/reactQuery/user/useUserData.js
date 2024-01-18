import { useQuery } from "react-query";
import { useAxios } from "../../axios/useAxios";
import { ApiCollection } from "../../../config/envConfig";

export const useUserData = (
  /**
   * @param onSuccess: void
   * Callback function to be executed on success
   */
  onSuccess,

  /**
   * @param onError: void
   * Callback function to be executed on error
   * */
  onError
) => {
  const axios = useAxios();

  const urlKey = ApiCollection.user.getUser;

  return useQuery({
    queryKey: [urlKey],
    queryFn: async () => {
      const rpnse = await axios.get(urlKey);
      return rpnse.data.data.user;
    },
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (err) => {
      if (onError) {
        onError(err);
      }
    },
  });
};
