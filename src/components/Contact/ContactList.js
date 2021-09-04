import { useSelector, useDispatch } from "react-redux";
import { CgTrashEmpty } from "react-icons/cg";
import { BiPencil } from "react-icons/bi";
import {
  deleteContactAction,
  setFormUpdateContactAction,
} from "../../store/actions/contactActions";
import { motion } from "framer-motion";
import { slideBottom } from "../Animate/Animations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  return (
    <main className="flex space-y-2 items-center flex-col w-full pt-10 px-2">
      {contacts.contacts.length === 0 && "Нет контакт"}
      {contacts.contacts.length > 0 &&
        contacts.contacts.map((contact, key) => {
          return (
            <motion.aside
              variants={slideBottom}
              initial="hide"
              animate="show"
              key={key}
              className={`bg-opacity-50 rounded-xl w-full lg:w-8/12 px-5 py-3 flex items-center justify-between ${
                contacts.form.id == contact.id ? "bg-green-200" : "bg-white"
              }`}
            >
              <div className="flex flex-col w-full truncate">
                <span className="text-xl font-medium text-gray-800">
                  {contacts.form.id == contact.id
                    ? contacts.form.name
                    : contact.name}
                </span>
                <span className="text-sm mt-2 text-gray-700">
                  {contacts.form.id == contact.id
                    ? contacts.form.phone
                    : contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  onClick={() => dispatch(setFormUpdateContactAction(contact))}
                  className="bg-green-200 hover:bg-green-300 duration-500 cursor-pointer text-green-600 w-10 h-10 flex items-center justify-center rounded-lg"
                >
                  <BiPencil />
                </div>
                <div
                  onClick={() => dispatch(deleteContactAction(contact.id))}
                  className="bg-red-200 hover:bg-red-300 duration-500 cursor-pointer text-red-600 w-10 h-10 flex items-center justify-center rounded-lg"
                >
                  <CgTrashEmpty />
                </div>
              </div>
            </motion.aside>
          );
        })}
    </main>
  );
};

export default ContactList;
