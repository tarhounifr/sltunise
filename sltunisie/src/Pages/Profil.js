import React from "react";
import { useSelector } from "react-redux";
const Profil = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <h1>{user.phone}</h1>
    </div>
  );
};

export default Profil;
