import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      console.log("User created successfully");
      toast.success("User created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
