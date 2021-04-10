import React from "react";
import { useSelector } from "react-redux";
const Complexe = () => {
  const owner = useSelector((state) => state.ownerReducer.owner);
  console.log(owner);
  return (
    <div>
      <h1>{owner.phone}</h1>
      <h1>{owner.identifiant}</h1>
      <h1>{owner.gov}</h1>
      <h1>{owner.adress}</h1>
    </div>
  );
};

export default Complexe;
