import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import useLocalStorage from "use-local-storage";

export default function useUser() {
  const [mainUserId, setMainUserId] = useLocalStorage("userId", "");
  const [mainTheme, setMainTheme] = useLocalStorage("userTheme", "green");

  function login(id) {
    setMainUserId(id);
  }

  function theme(color) {
    setMainTheme(color);
  }

  const { data: mainUser, isLoading } = useSWR(
    `/api/users/${mainUserId}`,
    fetcher
  );
  if (!mainUser || isLoading) {
    return <h1>Loading</h1>;
  }

  return { mainUser, login, mainTheme, theme };
}
