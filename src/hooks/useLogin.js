import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth.service";

export default function useLogin() {
  return useMutation({
    mutationFn: authService.login,
  });
}
