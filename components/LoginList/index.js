import Flex from "../Layout/Flex";
import UserLoginCard from "../UserLoginCard";

export default function LoginList({ users }) {
  return (
    <Flex direction="column" gap="4rem">
      {users.map((user) => {
        return (
          <UserLoginCard
            key={user._id}
            userId={user._id}
            name={user.name}
            avatar={user.avatar}
          />
        );
      })}
    </Flex>
  );
}
