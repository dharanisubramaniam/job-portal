import React from "react";
import "./JobPosting.scss";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, id } = props;
  return (
    <div className="label-input">
      <label htmlFor={id} className="label1">
        {label}
      </label>
      <div className="input-error">
        <div className="field-input">
          <Field type="text" id={id} name={name} />
        </div>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default Input;
