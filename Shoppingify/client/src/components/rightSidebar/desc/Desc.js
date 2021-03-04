import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../actions/items";
import { addItemToShoppingList } from "../../../actions/shoppingList";
import { setLoading } from "../../../actions/modes";
import { saveShoppingList } from "../../../actions/shoppingList";

const Desc = ({
  setDescMode,
  setDefaultMode,
  deleteItem,
  loading,
  items: { currentItem },
  addItemToShoppingList,
}) => {
  return (
    <div className="p-4 flex flex-col justify-between min-h-full overflow-scroll">
      {!currentItem || currentItem.length === 0 || loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <div className="flex items-center text-sm text-cYellow-main">
              <span className="material-icons text-sm">keyboard_backspace</span>
              <button
                onClick={() => {
                  setDescMode(false);
                  setDefaultMode(true);
                }}
              >
                back
              </button>
            </div>

            <img
              style={{ maxHeight: "13rem" }}
              className="w-full h-auto rounded-xl my-8"
              src={currentItem[0].image}
              alt=""
            />

            <div className="my-8">
              <span className="text-xs text-cGray-standard">name</span>
              <h1 className="sm:text-base text-xs">{currentItem[0].name}</h1>
            </div>

            <div className="my-8">
              <span className="text-xs text-cGray-standard">category</span>
              <h1 className="sm:text-base text-xs">
                {currentItem[0].category}
              </h1>
            </div>

            <div className="my-8">
              <span className="text-xs text-cGray-standard">note</span>
              <h1 className="sm:text-base text-xs">{currentItem[0].note}</h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center mt-6">
            <button
              onClick={async () => {
                await deleteItem(currentItem[0]._id);
                setDescMode(false);
                setDefaultMode(true);
              }}
              className="sm:w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4"
            >
              <p className="font-semibold text-xs">delete</p>
            </button>

            <button
              onClick={async () => {
                await addItemToShoppingList(currentItem[0]);
                setDescMode(false);
                setDefaultMode(true);
              }}
              className="sm:ml-4 sm:w-24 text-xs bg-cYellow-main hover:bg-yellow-600 rounded text-white p-2 py-3 pl-4 pr-4"
            >
              <p className="font-semibold text-xs">Add</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.modes.loading,
  shoppingList: state.shoppingList,
});

export default connect(mapStateToProps, {
  deleteItem,
  setLoading,
  addItemToShoppingList,
  saveShoppingList,
})(Desc);
