import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useUser() {
  const { data: mainUser, isLoading } = useSWR(`/api/users/login`, fetcher);
  return { mainUser };
}

// import useSWR from "swr";
// import fetcher from "@/lib/fetcher";
// import useLocalStorage from "use-local-storage";
// import { useRouter } from "next/router";

// export default function useUser() {
//   const [mainUserId, setMainUserId] = useLocalStorage(null);

//   function login(id) {
//     setMainUserId(id);
//   }
//   console.log();
//   const { data: mainUser, isLoading } = useSWR(
//     `/api/users/${mainUserId}`,
//     fetcher
//   );
//   return { mainUser, login };
// }
