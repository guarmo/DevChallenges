import React from "react";
import { connect } from "react-redux";
import { getHistoryLists, addHistoryList } from "../../actions/historyList";
import {
  deleteShoppingList,
  getShoppingList,
} from "../../actions/shoppingList";
import { setEditMode } from "../../actions/modes";

const Modal = ({
  showModal,
  setShowModal,
  addHistoryList,
  setEditMode,
  shoppingList,
  deleteShoppingList,
  getShoppingList,
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">
                    Are you sure that you want to cancel this list?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => {
                      setShowModal(false);
                      setEditMode(false);
                    }}
                  >
                    <p className="font-semibold text-xs">Cancel</p>
                  </button>

                  <button
                    className="ml-4 w-24 bg-cRed-main hover:bg-red-600 rounded text-white p-2 py-3 pl-4 pr-4"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={async () => {
                      // Add to history list
                      await addHistoryList({
                        ...shoppingList,
                        cancelled: true,
                      });
                      // Delete from shopping list
                      await deleteShoppingList(shoppingList._id);
                      await getShoppingList();
                      alert("List cancelled!");
                      setShowModal(false);
                      setEditMode(false);
                    }}
                  >
                    <p className="font-semibold text-xs">Yes</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList,
  modes: state.modes,
});

export default connect(mapStateToProps, {
  getHistoryLists,
  addHistoryList,
  deleteShoppingList,
  getShoppingList,
  setEditMode,
})(Modal);
