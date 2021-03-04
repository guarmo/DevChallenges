// Import types
import {
  GET_HISTORY_SL,
  ADD_HISTORY_SL,
  SET_CURRENT_HISTORY_SL,
  GET_STATS,
  GROUP_BY_MONTH,
} from "../actions/types";

// Create initial state
const initialState = {
  lists: [],
  currentList: null,
  statsItems: null,
  statsCategory: null,
  groupMonths: null,
};

export default function historyList(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GROUP_BY_MONTH:
      // Group by month
      const result = payload.reduce((r = [], list) => {
        let dateObj = new Date(list.date);
        let monthyear = dateObj.toLocaleString("en-us", {
          month: "long",
          year: "numeric",
        });
        let name = monthyear.replace(/\s/g, "");
        if (!r[name]) r[name] = [list];
        else r[name].push(list);
        return r;
      }, {});

      let months = [];
      let qty = [];
      for (const [key, value] of Object.entries(result)) {
        months.push(key);
        qty.push(result[key].length);
      }

      return {
        ...state,
        groupMonths: { months, qty },
      };
    case GET_HISTORY_SL:
      return {
        ...state,
        lists: payload,
      };
    case ADD_HISTORY_SL:
      return {
        lists: [...state.lists, payload],
      };
    case SET_CURRENT_HISTORY_SL:
      return {
        ...state,
        currentList: payload,
      };
    case GET_STATS:
      // Stats items
      const stats = [];
      payload.map((list) =>
        list.items.map((item) => {
          let obj = stats.find((el) => el.name === item.name);
          obj ? (obj.pieces = obj.pieces + item.pieces) : stats.push(item);
        })
      );

      stats.sort(function (a, b) {
        return a.pieces + b.pieces;
      });

      const numberOfItems = stats.length;
      const slicedStats = stats.slice(0, 3);

      slicedStats.map(
        (item) =>
          (item.percentage = Math.floor((item.pieces / numberOfItems) * 100))
      );

      // Stats category
      const arr = [
        { name: "Fruit And Vegetables", qty: 0 },
        { name: "Meat And Fish", qty: 0 },
        { name: "Pets", qty: 0 },
        { name: "Beverages", qty: 0 },
      ];

      payload.map((list) =>
        list.items.map((item) => {
          if (item.category === "Fruits and vegetables") arr[0].qty++;
          if (item.category === "Meat and Fish") arr[1].qty++;
          if (item.category === "Pets") arr[2].qty++;
          if (item.category === "Beverages") arr[3].qty++;
        })
      );

      let totQty = arr[0].qty + arr[1].qty + arr[2].qty + arr[3].qty;

      arr.sort(function (a, b) {
        return a.category - b.category;
      });

      const slicedCategories = arr.slice(0, 3);
      slicedCategories.map(
        (cat) => (cat.percentage = Math.floor((cat.qty / totQty) * 100))
      );

      return {
        ...state,
        statsItems: slicedStats,
        statsCategory: slicedCategories,
      };
    default:
      return state;
  }
}
