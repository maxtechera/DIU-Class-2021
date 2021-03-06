import * as React from "react";
import Router from "next/router";
import useUser from "../core/useUser";

// With Apollo useQuery
// const Private = ({ children }: Props) => {
//   // Check if user is loggedin and verify permisson
//   // Handle loading and error states
//   const { data, loading } = useQuery(USER_QUERY);
//   const user = data?.user;

//   React.useEffect(() => {
//     if (!user && !loading) {
//       // If not, rederict homepage
//       Router.push("/");
//     }
//   }, [loading, user]);

//   // If yes, render children
//   if (user) return children;
// };

interface Props {
  children: React.ReactNode;
}

const Private = ({ children }: Props) => {
  // Check if user is loggedin and verify permisson
  // Handle loading and error states
  const { user, loading } = useUser();
  React.useEffect(() => {
    if (!user && !loading) {
      // If not, rederict homepage
      Router.push("/");
    }
  }, [loading, user]);

  // If yes, render children
  if (user) return <>{children}</>;
};

export default Private;
