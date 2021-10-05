import * as React from "react";

const useUser = () => {
  const [user, setUserState] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Inializarlo con el valor en localStorage
    if (typeof localStorage !== "undefined") {
      setUserState(JSON.parse(localStorage.getItem("user") ?? ""));
    }
    setLoading(false);
  }, []);

  const setUser = (newUser: any) => {
    // Setear el usuario en estado
    setUserState(newUser);
    // Setear el usuario en localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ username: newUser?.username })
    );
  };

  return { user, loading, setUser };
};

export default useUser;
