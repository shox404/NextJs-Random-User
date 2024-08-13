import { User } from "../types";

type NewUser = Omit<User, "displayPhoto">;

export const applyImage = (user: NewUser) => {
  return {
    ...user,
    displayPhoto: `https://avatar.iran.liara.run/public/${
      user.gender === "male" ? "boy" : "girl"
    }`,
  };
};
