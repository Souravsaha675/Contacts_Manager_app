import React, { useReducer } from "react";
import { v4 } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sourav",
        email: "S@g.com",
        phone: "445256213",
        type: "professional",
      },
      {
        id: 2,
        name: "Sourav saha",
        email: "S675@g.com",
        phone: "7001156213",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = (contact) => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
