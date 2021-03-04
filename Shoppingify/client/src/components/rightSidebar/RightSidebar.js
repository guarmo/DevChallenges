import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Default from "./Default";
import Desc from "./desc/Desc";
import Form from "./Form";
import {
  setDefaultMode,
  setAddItemMode,
  setDescMode,
  setEditMode,
} from "../../actions/modes";

import { getShoppingList } from "../../actions/shoppingList";

const RightSidebar = ({
  setDefaultMode,
  setAddItemMode,
  setDescMode,
  setEditMode,
  getShoppingList,
  shoppingList,
  modes: { defaultMode, addItemMode, descMode, editMode },
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getListOnload() {
      setLoading(true);
      await getShoppingList();
      setLoading(false);
    }

    getListOnload();
  }, []);

  return (
    <div
      style={{ width: "30%" }}
      className="flex flex-col justify-between relative"
    >
      {defaultMode && (
        <Default
          loading={loading}
          setAddItemMode={setAddItemMode}
          setDefaultMode={setDefaultMode}
          setEditMode={setEditMode}
          editMode={editMode}
        />
      )}
      {addItemMode && (
        <Form
          setDescMode={setDescMode}
          setDefaultMode={setDefaultMode}
          setAddItemMode={setAddItemMode}
        />
      )}
      {descMode && (
        <Desc setDescMode={setDescMode} setDefaultMode={setDefaultMode} />
      )}
    </div>
  );
};

RightSidebar.propTypes = {
  setDefaultMode: PropTypes.func.isRequired,
  setDescMode: PropTypes.func.isRequired,
  setAddItemMode: PropTypes.func.isRequired,
  modes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  modes: state.modes,
  shoppingList: state.shoppingList,
});

export default connect(mapStateToProps, {
  setDefaultMode,
  setDescMode,
  setAddItemMode,
  setEditMode,
  getShoppingList,
})(RightSidebar);
