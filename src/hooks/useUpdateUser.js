import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateCategory = async (newData) => {
    const response = await axios.put(
        `https://fake-api-spartan.herokuapp.com/users/${newData.id}`,
      newData
    );
    return await response.data;
  };
  
  export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation(updateCategory, {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {},
    });
  };