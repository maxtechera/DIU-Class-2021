import { useQuery } from "@apollo/client";
import USER_QUERY from "./USER_QUERY";

interface User {
  id: string;
  name: string;
  username: string;
}
interface UserQueryData {
  me: User;
}

const useUser = () => {
  const { data, loading, error } = useQuery<UserQueryData>(USER_QUERY);
  const user = data?.me;

  return { user, loading, error };
};

export default useUser;
