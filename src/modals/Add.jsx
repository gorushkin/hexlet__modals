import React, { useEffect, useRef } from "react";
import _ from "lodash";
// import { useFormik } from "formik";
// import { Modal, FormGroup, FormControl } from "react-bootstrap";

const Add = (changeHandler, submitHandler) => {
  const inputEl = useRef(null);

  // useEffect(() => {
  //   inputEl.current.focus();
  // });

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title h4">Add</div>
          <button className="close" type="button">
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                ref={inputEl}
                onChange={changeHandler}
                className="form-control"
                data-testid="input-body"
                name="body"
                required=""
              />
            </div>
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
