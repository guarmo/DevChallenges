import React, { useState } from "react";
import bottle from "../../assets/bottle.svg";
import Modal from "./Modal";
import AddPieceBtn from "../layout/AddPieceBtn";
import "../../app.css";
import cart from "../../assets/cart.svg";
import { connect } from "react-redux";
import { getHistoryLists, addHistoryList } from "../../actions/historyList";
import {
  getShoppingList,
  saveShoppingList,
  deleteShoppingList,
} from "../../actions/shoppingList";

const Default = ({
  // Modes
  loading,
  setAddItemMode,
  setDefaultMode,
  setEditMode,
  editMode,
  // Shopping list
  getShoppingList,
  saveShoppingList,
  deleteShoppingList,
  shoppingList,
  shoppingList: { items },
  // History list
  addHistoryList,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [slName, setSlName] = useState("");

  const categories = [
    "Fruits and vegetables",
    "Meat and Fish",
    "Beverages",
    "Pets",
  ];

  return (
    <div className="bg-cYellow-bg min-h-full">
      <div className="px-2 sm:px-6 h-full">
        {/* Purple section */}
        <div className="bg-cPurple-main flex justify-center mt-4 mb-6 rounded-lg h-1/5">
          <img
            style={{ transform: "translateY(-20px)" }}
            className="hidden sm:block"
            src={bottle}
            alt=""
          />
          <div className="flex flex-col justify-center items-start p-2 sm:p-0 sm:ml-4">
            <h1 className="text-white text-sm sm:text-base">
              Didn't find what you need?
            </h1>
            <button
              onClick={() => {
                setAddItemMode(true);
                setDefaultMode(false);
              }}
              className="bg-white text-xs px-4 py-1 rounded-lg mt-2"
            >
              Add item
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl">{shoppingList.name}</h1>
        </div>

        {/* List */}
        {!items || loading ? (
          <h1>Loading...</h1>
        ) : items.length === 0 ? (
          // Empty cart
          <div className="max-h-full flex flex-col justify-between">
            <h1>No items</h1>
            <img src={cart} alt="" />
          </div>
        ) : (
          categories.map(
            (category, index) =>
              items.filter((item) => item.category == `${category}`).length !==
                0 && (
                <div
                  key={index}
                  style={{ maxHeight: "700px" }}
                  // @todo add overflow-scroll
                  className="max-h-full"
                >
                  <h3 className="text-sm text-cGray-standard">{category}</h3>
                  {/* Shopping list items */}
                  <div>
                    {shoppingList.items &&
                      shoppingList.items.map(
                        (item, index) =>
                          item.category === category &&
                          item.pieces > 0 && (
                            <div
                              key={index}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center my-4"
                            >
                              <h1>{item.name}</h1>
                              <AddPieceBtn pieces={item.pieces} item={item} />
                            </div>
                          )
                      )}
                  </div>
                </div>
              )
          )
        )}
      </div>

      {/* Bottom section */}
      {editMode ? (
        // Edit mode
        <div className="h-32 w-full bg-white flex flex-col justify-center px-4 absolute bottom-0">
          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4"
            >
              <p className="font-semibold text-xs">cancel</p>
            </button>

            <button
              onClick={async () => {
                // Add to history list
                await addHistoryList({
                  ...shoppingList,
                  completed: true,
                });
                // Delete from shopping list
                await deleteShoppingList(shoppingList._id);
                await getShoppingList();
                alert("List completed!");
                setEditMode(false);
              }}
              className="ml-4 w-24 text-xs bg-cBlue-main hover:bg-blue-600 rounded text-white p-2 py-3 pl-4 pr-4"
            >
              <p className="font-semibold text-xs">Complete</p>
            </button>
          </div>
        </div>
      ) : (
        // New inputs
        <div className="h-32 w-full bg-white flex flex-col justify-center px-4 absolute bottom-0">
          <div
            className={`bg-white shadow sm:flex sm:text-sm text-xs border-2 ${
              items && items.length === 0
                ? "border-cGray-standard"
                : "border-cYellow-main"
            } rounded-lg`}
          >
            <input
              className="w-full rounded p-2 px-3 outline-none"
              type="text"
              value={slName}
              onChange={(e) => setSlName(e.target.value)}
              placeholder="Enter a name"
            />
            <button
              onClick={async () => {
                const sl = {
                  ...shoppingList,
                  name: slName !== "" ? slName : "Shopping List",
                };

                const saveSL = async () => {
                  await saveShoppingList(shoppingList._id, sl);
                  await getShoppingList();
                  setSlName("");
                  alert("List saved!");
                };

                items && items.length === 0
                  ? alert("Please add items")
                  : saveSL();
              }}
              className={`w-full sm:w-20 ${
                items && items.length === 0
                  ? "bg-cGray-standard"
                  : "bg-cYellow-main hover:bg-yellow-600"
              } rounded text-white p-2 pl-4 pr-4`}
            >
              <p className="font-semibold text-xs">Save</p>
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList,
  modes: state.modes,
});

export default connect(mapStateToProps, {
  getShoppingList,
  saveShoppingList,
  deleteShoppingList,
  addHistoryList,
  getHistoryLists,
})(Default);
