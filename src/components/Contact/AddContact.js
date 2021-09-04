import { useDispatch, useSelector } from "react-redux";
import {
  addContactAction,
  clearFormContactAction,
  setFormContactAction,
  updateContactAction,
} from "../../store/actions/contactActions";

const AddContact = () => {
  const form = useSelector((state) => state.contacts.form);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    form.id !== null
      ? dispatch(updateContactAction(form))
      : dispatch(addContactAction(form));

    dispatch(clearFormContactAction());
  };
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="w-full px-2 lg:w-8/12 lg:space-x-5 flex flex-wrap lg:flex-nowrap items-center justify-center pt-10"
    >
      <input
        type="text"
        placeholder="Имя"
        value={form.name}
        required
        onChange={(e) =>
          dispatch(
            setFormContactAction({
              phone: form.phone,
              name: e.target.value,
            })
          )
        }
        className="px-5 py-3 rounded-lg w-full lg:w-5/12 focus:ring-1 focus:ring-gray-600 duration-500"
      />
      <input
        type="text"
        placeholder="Телефон"
        required
        value={form.phone}
        onChange={(e) =>
          dispatch(
            setFormContactAction({
              name: form.name,
              phone: e.target.value,
            })
          )
        }
        className="px-5 py-3 rounded-lg w-full lg:w-5/12 focus:ring-1 focus:ring-gray-600 duration-500 mt-3 lg:mt-0"
      />
      <button
        type="submit"
        className="bg-indigo-600 lg:w-2/12 text-center py-3 px-5 text-white rounded-lg hover:bg-indigo-800 duration-500  transform focus:scale-95 mt-3 lg:mt-0"
      >
        {form.id !== null ? "Изменить" : "Добавить"}
      </button>
    </form>
  );
};

export default AddContact;
