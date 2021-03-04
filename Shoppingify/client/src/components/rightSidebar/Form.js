import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem, setCurrentItem } from "../../actions/items";
import { setLoading } from "../../actions/modes";

const Form = ({
  setDescMode,
  setDefaultMode,
  setAddItemMode,
  addItem,
  setLoading,
  items,
}) => {
  const [item, setItem] = useState({
    name: "",
    note: "",
    image: "",
    category: "Fruits and vegetables",
  });

  const { name, note, image } = item;

  const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addItem(item);
    await setLoading(false);
    setAddItemMode(false);
    setDescMode(true);
  };

  return (
    <form
      onSubmit={(e) => onFormSubmit(e)}
      className="bg-gray-100 min-h-full p-4 flex flex-col justify-between"
    >
      <div>
        <h1>Add a new item</h1>
        <div className="my-6">
          <label className="block mb-1 text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="w-full h-12 px-3 text-cgGray-standard text-sm placeholder-gray-600 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter a name"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="my-6">
          <label className="block mb-1 text-sm" htmlFor="note">
            Note (optional)
          </label>
          <textarea
            className="w-full h-40 px-3 text-cgGray-standard text-sm placeholder-gray-600 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter a note"
            name="note"
            value={note}
            id="note"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="my-6">
          <label className="block mb-1 text-sm" htmlFor="image">
            Image (optional)
          </label>
          <input
            className="w-full h-12 px-3 text-cgGray-standard text-sm placeholder-gray-600 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter a url"
            id="image"
            name="image"
            value={image}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="relative inline-block w-full text-gray-700 my-6">
          <select
            className="w-full h-12 pl-3 pr-6 text-sm placeholder-cGray-standard border rounded-lg appearance-none focus:shadow-outline"
            name="category"
            defaultValue={"Fruits and vegetables"}
            onChange={(e) => onChange(e)}
            // @todo add placeholder 'Enter a category'
          >
            <option value={"Fruits and vegetables"}>
              Fruits and vegetables
            </option>
            <option value={"Meat and Fish"}>Meat and Fish</option>
            <option value={"Beverages"}>Beverages</option>
            <option value={"Pets"}>Pets</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="sm:flex sm:justify-center mt-6">
        <div
          onClick={() => {
            setAddItemMode(false);
            setDefaultMode(true);
          }}
          className="sm:w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4"
        >
          <p className="font-semibold text-xs">Cancel</p>
        </div>

        <button
          type="submit"
          className="ml-4 sm:w-24 bg-cYellow-main hover:bg-yellow-600 rounded text-white p-2 py-3 sm:pl-4 sm:pr-4"
        >
          <p className="font-semibold text-xs">Save</p>
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.modes.loading,
});

export default connect(mapStateToProps, {
  addItem,
  setLoading,
  setCurrentItem,
})(Form);
