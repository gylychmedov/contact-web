import {
  ADD_CONTACT,
  CLEAR_FORM,
  DELETE_CONTACT,
  SET_FORM,
  UPDATE_CONTACT,
  SET_FORM_UPDATE_CONTACT,
} from "../constants/contactConstants";

export const addContactAction = (data) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};

export const updateContactAction = (data) => {
  return {
    type: UPDATE_CONTACT,
    payload: data,
  };
};

export const setFormUpdateContactAction = (data) => {
  return {
    type: SET_FORM_UPDATE_CONTACT,
    payload: data,
  };
};

export const deleteContactAction = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const setFormContactAction = (data) => {
  return {
    type: SET_FORM,
    payload: data,
  };
};

export const clearFormContactAction = () => {
  return {
    type: CLEAR_FORM,
  };
};
