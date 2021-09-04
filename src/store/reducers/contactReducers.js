import {
  ADD_CONTACT,
  CLEAR_FORM,
  DELETE_CONTACT,
  SET_FORM,
  UPDATE_CONTACT,
  SET_FORM_UPDATE_CONTACT,
} from "../constants/contactConstants";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Сергей",
      phone: "+795 65 75 85",
    },
  ],
  form: { id: null, name: "", phone: "" },
};

export const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: state.contacts.length + 1,
            name: action.payload.name,
            phone: action.payload.phone,
          },
        ],
      };
    }
    case UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((contact, key) => {
          if (contact.id == action.payload.id) {
            state.contacts[key].name = action.payload.name;
            state.contacts[key].phone = action.payload.phone;
          }
          return contact;
        }),
      };
    }
    case SET_FORM_UPDATE_CONTACT: {
      return {
        ...state,
        form: {
          id: action.payload.id,
          name: action.payload.name,
          phone: action.payload.phone,
        },
      };
    }
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    case SET_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload.name,
          phone: action.payload.phone,
        },
      };
    }
    case CLEAR_FORM: {
      return {
        ...state,
        form: { id: null, name: "", phone: "" },
      };
    }
    default:
      return state;
  }
};
