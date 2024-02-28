import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState({
    _id: "65ddcf8d42208a1f73d7e3ba",
    username: "Justyna",
    password: "password2",
    email: "justyna@justyna.com",
    isAdmin: false,
    __v: 0,
  });

  // "users": [
  //   {
  //   "_id": "65ddcf8d42208a1f73d7e3b9",
  //   "username": "MattB",
  //   "password": "password",
  //   "email": "mattb@matt.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65ddcf8d42208a1f73d7e3ba",
  //   "username": "Justyna",
  //   "password": "password2",
  //   "email": "justyna@justyna.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65ddcf8d42208a1f73d7e3bb",
  //   "username": "Lala",
  //   "password": "password3",
  //   "email": "lala@lala.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65ddcf8d42208a1f73d7e3bc",
  //   "username": "Jack",
  //   "password": "password4",
  //   "email": "jack@jack.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65ddcf8d42208a1f73d7e3bd",
  //   "username": "Stavros",
  //   "password": "password5",
  //   "email": "stavros@stavros.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de51d97ba6584a665c48e5",
  //   "username": "Jenny",
  //   "password": "password10",
  //   "email": "Jenny@fromtheblock.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de52707ba6584a665c4902",
  //   "username": "Theo",
  //   "password": "password55",
  //   "email": "theo@theleo.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de645f7ba6584a665c5260",
  //   "username": "Scooby",
  //   "password": "password100",
  //   "email": "scooby@doo.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de68807ba6584a665c54ab",
  //   "username": "Paris",
  //   "password": "password896",
  //   "email": "paris@hilton.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de6b247ba6584a665c54ae",
  //   "username": "Zoom",
  //   "password": "password1242",
  //   "email": "zoom@user.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de6b9d7ba6584a665c54b0",
  //   "username": "Zoom2",
  //   "password": "password124266",
  //   "email": "zoom2@user.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de6c237ba6584a665c54b2",
  //   "username": "nick",
  //   "password": "password567",
  //   "email": "nick@cannon.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de74c8362221e8a01764b5",
  //   "username": "Koala",
  //   "password": "cuddles2",
  //   "email": "koala@bear.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de752f362221e8a01764b9",
  //   "username": "Peppa",
  //   "password": "oinkoink",
  //   "email": "peppa@thepig.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de75c3362221e8a01764bc",
  //   "username": "monstera",
  //   "password": "pass123word",
  //   "email": "monstera@theplant.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de7642362221e8a01764be",
  //   "username": "Clara",
  //   "password": "password987654",
  //   "email": "clara@voyant.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de76e0362221e8a01764c0",
  //   "username": "Henry",
  //   "password": "scoopscoop2",
  //   "email": "henry@hoover.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de7711362221e8a01764c2",
  //   "username": "Henrietta",
  //   "password": "cleanup123!",
  //   "email": "henrietta@hoover.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de7775362221e8a01764c4",
  //   "username": "Vanilla",
  //   "password": "password5555",
  //   "email": "vanilla@icecream.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de77a0362221e8a01764c6",
  //   "username": "Chocolate",
  //   "password": "pasword8888",
  //   "email": "chocolate@icecream.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   },
  //   {
  //   "_id": "65de79aa362221e8a0176523",
  //   "username": "Gummy",
  //   "password": "haribo222",
  //   "email": "gummy@bear.com",
  //   "isAdmin": false,
  //   "__v": 0
  //   }
  //   ]

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
