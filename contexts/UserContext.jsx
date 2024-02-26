import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState({
    _id: "65d8c0b290c54cb03f3bd5e5",
    username: "Justyna",
    password: "password2",
    email: "justyna@justyna.com",
    isAdmin: false,
    __v: 0,
  });

  // {
  //   "_id": "65d8c0b290c54cb03f3bd5e5",
  //   "username": "Justyna",
  //   "password": "password2",
  //   "email": "justyna@justyna.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },

  // {
  //   "_id": "65d8c0b290c54cb03f3bd5e4",
  //   "username": "MattB",
  //   "password": "password",
  //   "email": "mattb@matt.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   }

  // {
  //     _id: "65d8c0b290c54cb03f3bd5e8",
  //     username: "Stavros",
  //     password: "password5",
  //     email: "stavros@stavros.com",
  //     isAdmin: false,
  //     __v: 0,
  //   }

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
