import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./JobPosting.scss";

const JobPosting = () => {
  const baseURL = "http://localhost:5001";
  const [category, setCategory] = useState([]);
  useEffect(async () => {
    const categoryRes = await axios.get(baseURL + "/api/category");
    setCategory(categoryRes.data);
  }, []);
  const formik = useFormik({
    initialValues: {
      designation: "",
      category_id: "",
      job_link: "",
      min_experience: "",
      max_experience: "",
      salary: "",
      company: "",
    },

    onSubmit: async (values) => {
      const post = await axios.post(baseURL + "/api/jobs", values);
      console.log(post);
    },
  });

  return (
    <div className="form">
      <h1>Job Posting</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="label-input">
          <label htmlFor="designation">Designation</label>
          <br />
          <div>
            <input
              type="text"
              id="designation"
              name="designation"
              onChange={formik.handleChange}
              value={formik.values.designation}
            />
          </div>
          <br />
        </div>
        <div className="label-input">
          <label htmlFor="category_id">Category</label>
          <br />
          <div>
            <select
              type="text"
              id="category_id"
              name="category_id"
              onChange={formik.handleChange}
              value={formik.values.category_id}
            >
              {category.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  label={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <br />
        </div>
        <div className="label-input">
          <label htmlFor="job_link">Job Link</label>
          <br />
          <div>
            <input
              type="text"
              id="job_link"
              name="job_link"
              onChange={formik.handleChange}
              value={formik.values.job_link}
            />
          </div>
          <br />
        </div>

        <div className="label-input">
          <label htmlFor="min_experience">Minimum Experience</label>
          <br />
          <div>
            <input
              type="text"
              id="min_experience"
              name="min_experience"
              onChange={formik.handleChange}
              value={formik.values.min_experience}
            />
          </div>
          <br />
        </div>

        <div className="label-input">
          <label htmlFor="max_experience">Maximum Experience</label>
          <br />
          <div>
            <input
              type="text"
              id="max_experience"
              name="max_experience"
              onChange={formik.handleChange}
              value={formik.values.max_experience}
            />
          </div>
          <br />
        </div>

        <div className="label-input">
          <label htmlFor="salary">Salary</label>

          <br />
          <div>
            <input
              type="number"
              id="salary"
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
            />
          </div>
          <br />
        </div>

        <div className="label-input">
          <label htmlFor="company">Company</label>

          <br />
          <div>
            <input
              type="text"
              id="company"
              name="company"
              onChange={formik.handleChange}
              value={formik.values.company}
            />
          </div>
          <br />
        </div>
        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPosting;
