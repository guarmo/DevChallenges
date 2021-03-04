import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  setDescMode,
  setDefaultMode,
  setAddItemMode,
  setLoading,
} from "../../actions/modes";
import {
  getAllItems,
  setCurrentItem,
  filterItems,
  clearFilter,
} from "../../actions/items";

import {
  addItemToShoppingList,
  saveShoppingList,
} from "../../actions/shoppingList";
import {
  getHistoryLists,
  getStats,
  groupByMonth,
} from "../../actions/historyList";

const Items = ({
  // Modes
  setDescMode,
  setDefaultMode,
  setAddItemMode,
  setLoading,
  loading,
  // Items
  getAllItems,
  setCurrentItem,
  filterItems,
  clearFilter,
  items: { defaultItems, filtered },
  // Shopping list
  saveShoppingList,
  shoppingList,
  shoppingList: { items, id },
  addItemToShoppingList,
  // History list
  getHistoryLists,
  groupByMonth,
  historyList: { lists },
  getStats,
}) => {
  // Get default items on load
  useEffect(() => {
    async function getItemsOnLoad() {
      setLoading(true);
      await getHistoryLists();
      await getAllItems();
      await getStats(lists);
      await groupByMonth(lists);
      setLoading(false);
    }

    getItemsOnLoad();
  }, []);

  // Filter event
  const text = useRef("");
  const onSearchChange = () => {
    if (text.current.value !== "") {
      filterItems(text.current.value);
    } else {
      clearFilter();
    }
  };

  // Categories
  const categories = [
    "Fruits and vegetables",
    "Meat and Fish",
    "Beverages",
    "Pets",
  ];

  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 py-4 px-4 sm:px-16 overflow-scroll"
    >
      {/* Header */}
      <header className="sm:flex sm:justify-between sm:items-start mb-4">
        <h1 style={{}} className="text-xl sm:text-2xl sm:w-2/4 w-full">
          <span className="text-cYellow-main font-bold">Shoppingify</span>{" "}
          allows you to take your shopping list wherever you go{" "}
        </h1>

        {/* Input */}
        <div className="shadow flex sm:w-64">
          <span className="flex justify-end items-center text-gray-500 p-2">
            <i className="material-icons text-xl">search</i>
          </span>
          <input
            className="w-full rounded p-2 outline-none placeholder-cGray-extralight text-xs"
            type="text"
            ref={text}
            onChange={(e) => onSearchChange(e)}
            placeholder="Search item"
          />
        </div>
      </header>

      {/* Main */}
      <main>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          categories.map(
            (category, index) =>
              (filtered !== null
                ? filtered.filter((item) => item.category == `${category}`)
                    .length !== 0
                : defaultItems.filter((item) => item.category == `${category}`)
                    .length !== 0) && (
                <div key={index} className="my-4">
                  <h1 className="mb-2">{category}</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    {
                      // Filtered
                      filtered !== null
                        ? filtered
                            .filter((item) => item.category == `${category}`)
                            .map((item, index) => (
                              <div
                                key={index}
                                className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2"
                              >
                                <button
                                  className="focus:outline-none"
                                  onClick={async () => {
                                    setDescMode(true);
                                    setDefaultMode(false);
                                    setAddItemMode(false);
                                    setLoading(true);
                                    await setCurrentItem(item._id);
                                    setLoading(false);
                                  }}
                                >
                                  <h1>{item.name}</h1>
                                </button>
                                <button
                                  onClick={() => addItemToShoppingList(item)}
                                  className="focus:outline-none text-cGray-light material-icons outline-none"
                                >
                                  add
                                </button>
                              </div>
                            ))
                        : // Default items
                          defaultItems
                            .filter((item) => item.category == `${category}`)
                            .map((item, index) => (
                              <div
                                key={index}
                                className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2"
                              >
                                <button
                                  className="focus:outline-none"
                                  onClick={async () => {
                                    setDescMode(true);
                                    setDefaultMode(false);
                                    setAddItemMode(false);
                                    setLoading(true);
                                    await setCurrentItem(item._id);
                                    setLoading(false);
                                  }}
                                >
                                  <h1>{item.name}</h1>
                                </button>
                                <button
                                  onClick={() => {
                                    items.filter((el) => el._id === item._id)
                                      .length === 0
                                      ? addItemToShoppingList(item)
                                      : alert("Item already added!");
                                  }}
                                  className="text-cGray-light material-icons outline-none"
                                >
                                  add
                                </button>
                              </div>
                            ))
                    }
                  </div>
                </div>
              )
          )
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.modes.loading,
  shoppingList: state.shoppingList,
  historyList: state.historyList,
});

export default connect(mapStateToProps, {
  setDescMode,
  setDefaultMode,
  setAddItemMode,
  getAllItems,
  filterItems,
  clearFilter,
  setCurrentItem,
  setLoading,
  addItemToShoppingList,
  saveShoppingList,
  getHistoryLists,
  getStats,
  groupByMonth,
})(Items);
