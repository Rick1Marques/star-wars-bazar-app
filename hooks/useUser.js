import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useUser() {
  const { data: mainUser, isLoading } = useSWR("/api/users/login", fetcher);

  return { mainUser };
}
