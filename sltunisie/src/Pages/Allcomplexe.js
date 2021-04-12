import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import ContactComplexe from "./ContactCopmlexe/ContactComplexe";
import Spinner from "../Component/Spinner/Spinner";
import "./Allcomplexe.css";

const Allcomplexe = () => {
  const contact = useSelector((state) => state.contactReducer.contactList);
  const load = useSelector((state) => state.contactReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className="bodyallcomplexe">
      {load ? (
        <Spinner />
      ) : (
        contact.map((el) => <ContactComplexe contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default Allcomplexe;
