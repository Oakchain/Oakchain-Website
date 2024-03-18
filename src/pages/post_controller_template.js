import { useMutation, useQueryClient } from "react-query";

import { toast } from "react-toastify";
import Axios from "../constants/api_management/MyHttpHelper";
const usePostManager = (endpoint, queryKey, isAuth = true) => {
  const queryClient = useQueryClient();
  const postController = async (details) => {
    try {
      const response = await Axios.post(endpoint, details);
      if (!response || !response.data) {
        throw new Error('Invalid response received');
      }
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };
  

  const mutation = useMutation(postController, {
    onSuccess: async (data) => {
      toast.success(data.message);
      const updateQueryKeys = [queryKey];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Post error:", error);
    },
  });

  const postCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      console.error("Post error:", error);
    }
  };

  return {
    postCaller,
    mutation, // Return mutation directly
  };
};

export default usePostManager;
