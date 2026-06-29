import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth.service";

export default function useLogout() {
  return useMutation({
    mutationFn: authService.logout,
  });
}
