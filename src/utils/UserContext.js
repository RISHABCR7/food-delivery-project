import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Rishab Choudahry",
    email: "rishabCoudahry07@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
