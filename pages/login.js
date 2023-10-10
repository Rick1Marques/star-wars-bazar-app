import useSWR from "swr";
import LoginList from "@/components/LoginList";

export default function LoginPage() {
  const { data: users, isLoading } = useSWR(`/api/users`);
  if (!users || isLoading) {
    return <h1>Loading...</h1>;
  }
  return <LoginList users={users} />;
}
