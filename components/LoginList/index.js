import Flex from "../Layout/Flex";
import UserLoginCard from "../UserLoginCard";

export default function LoginList({ users }) {
  return (
    <Flex direction="row" flexWrap="wrap" justifyContent="center" gap="2rem">
      {users.map((user) => {
        return (
          <UserLoginCard
            key={user._id}
            userId={user._id}
            name={user.name}
            avatar={user.avatar}
            width={140}
            height={140}
          />
        );
      })}
    </Flex>
  );
}
