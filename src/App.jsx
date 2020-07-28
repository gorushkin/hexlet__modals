import React, { useState } from "react";
import { useImmer } from "use-immer";
import getModal from "./modals/index.js";

const renderAddModal = (state, handler, submitHandler) => {
  if (!state) return null;
  return getModal("adding")(handler, submitHandler);
};

const renderTaskList = (list) => {
  const renderTask = (name) => (
    <div>
      <span className="mr-3">{name}</span>
      <button
        type="button"
        className="border-0 btn-link p-0 mr-3"
        data-testid="item-rename"
      >
        rename
      </button>
      <button
        type="button"
        className="border-0 btn-link p-0"
        data-testid="item-remove"
      >
        remove
      </button>
    </div>
  );

  if (list.length === 0) return null;
  return list.map((item) => {
    return renderTask(item);
  });
};

const App = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState(["asdfd"]);

  const addNoteHandler = () => {
    setShowAddModal(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, value]);
  };

  const changeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <>
      <div className="mb-3">
        <button
          onClick={addNoteHandler}
          data-testid="item-add"
          className="btn btn-secondary"
        >
          add
        </button>
      </div>
      {renderTaskList(list)}
      {renderAddModal(showAddModal, changeHandler, submitHandler)}
    </>
  );
};

export default App;
