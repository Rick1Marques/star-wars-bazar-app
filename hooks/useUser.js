import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";

export default function useUser() {
  const [mainUserId, setMainUserId] = useLocalStorage("userId", "");

  function login(id) {
    setMainUserId(id);
  }
  console.log();
  const { data: mainUser, isLoading } = useSWR(
    `/api/users/${mainUserId}`,
    fetcher
  );
  return { mainUser, login };
}
