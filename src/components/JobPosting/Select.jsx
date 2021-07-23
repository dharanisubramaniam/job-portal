import React from "react";
import { Field, ErrorMessage } from "formik";
import "./JobPosting.scss";

function Select(props) {
  const { name, id, label, item } = props;
  return (
    <div className="label-input">
      <label htmlFor={id} className="label1">
        {label}
      </label>
      <div className="input-error">
        <div className="field">
          <Field as="select" id={id} name={name}>
            <option>Select a company</option>
            {item.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </Field>
        </div>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default Select;
