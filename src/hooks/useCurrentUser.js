import { useQuery } from "@tanstack/react-query";
import authService from "../services/auth.service";

export default function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: authService.me,
  });
}
