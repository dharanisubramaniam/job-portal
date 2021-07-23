import React from "react";
import { Field, ErrorMessage } from "formik";
import "./JobPosting.scss";

function Checkbox(props) {
  const { name, id, label, item } = props;
  return (
    <div className="label-input">
      <label className="label1">{label}</label>
      <div className="input-error">
        <div className="field-checkbox">
          <Field name={name} id={id}>
            {({ field }) => {
              return item.map((item) => {
                return (
                  <div key={item.id} className="checkbox">
                    <input
                      type="checkbox"
                      id={item.name}
                      {...field}
                      value={item.id}
                      checked={field.value.includes(item.id.toString())}
                    />
                    <label htmlFor={item.name} className="label2">
                      {item.name}
                    </label>
                  </div>
                );
              });
            }}
          </Field>
        </div>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default Checkbox;
