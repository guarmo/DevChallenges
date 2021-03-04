import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromShoppingList,
  addPiece,
  subtractPiece,
} from "../../actions/shoppingList";

const AddPieceBtn = ({
  pieces,
  item,
  removeItemFromShoppingList,
  addPiece,
  subtractPiece,
}) => {
  return (
    <div className="flex items-center hover:bg-white pr-1 rounded-lg">
      <div className="bg-cYellow-main mr-2 p-1 rounded-lg">
        <button
          onClick={() => removeItemFromShoppingList(item)}
          className="material-icons text-sm text-white outline-none"
        >
          delete_outline
        </button>
      </div>
      <button
        onClick={() => subtractPiece(item)}
        className="text-cYellow-main outline-none"
      >
        -
      </button>
      <div className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2">
        {pieces}
      </div>
      <button
        onClick={() => addPiece(item)}
        className="text-cYellow-main outline-none"
      >
        +
      </button>
    </div>
  );
};

export default connect(null, {
  removeItemFromShoppingList,
  addPiece,
  subtractPiece,
})(AddPieceBtn);
