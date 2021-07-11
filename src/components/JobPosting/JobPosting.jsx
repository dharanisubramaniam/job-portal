import axios from "axios";
import { useFormik } from "formik";
import "./JobPosting.scss";
import { useStateValue } from "../../redux/StateProvider";

const JobPosting = () => {
  const baseURL = "http://localhost:5001";
  const { state, dispatch } = useStateValue();
  const { location, company, jobType, category } = state;

  const jobFormik = useFormik({
    initialValues: {
      designation: "",
      company_id: 0,
      location_ids: [],
      category_ids: [],
      job_type_ids: [],
      salary: "",
      min_experience: "",
      max_experience: "",
      job_link: "",
    },

    onSubmit: async (values) => {
      const post = await axios.post(baseURL + "/api/jobs", values);
      console.log(post);
    },
  });
  // console.log("values", values);
  const companyFormik = useFormik({
    initialValues: {
      new_company: "",
      logo_name_with_ext: "",
    },
    onSubmit: async (values) => {
      const company = await axios.post(baseURL + "/api/company", {
        name: values.new_company,
        logo_name_with_ext: values.logo_name_with_ext,
      });
      console.log("company", company);
    },
  });

  const categoryFormik = useFormik({
    initialValues: {
      new_category: "",
    },
    onSubmit: async (values) => {
      const category = await axios.post(baseURL + "/api/category", {
        name: values.new_category,
      });
      console.log("category", category);
      const categoryres = await axios.get(baseURL + "/api/category");
      const _category = categoryres.data;
      dispatch({ type: "SET_CATEGORY", category: _category });
    },
  });

  const locationFormik = useFormik({
    initialValues: {
      new_location: "",
    },
    onSubmit: async (values) => {
      const location = await axios.post(baseURL + "/api/location", {
        name: values.new_location,
      });
      console.log("location", location);
      const locationres = await axios.get(baseURL + "/api/location");
      const _location = locationres.data;
      dispatch({ type: "SET_LOCATION", location: _location });
    },
  });

  const jobTypeFormik = useFormik({
    initialValues: {
      new_jobType: "",
    },
    onSubmit: async (values) => {
      const jobType = await axios.post(baseURL + "/api/jobType", {
        name: values.new_jobType,
      });
      console.log("jobType", jobType);
      const jobTyperes = await axios.get(baseURL + "/api/jobType");
      const _jobType = jobTyperes.data;
      dispatch({ type: "SET_JOBTYPE", jobType: _jobType });
    },
  });

  return (
    <div className="form">
      <h1>Job Posting</h1>
      <form onSubmit={jobFormik.handleSubmit}>
        <div className="label-input">
          <label htmlFor="designation">Designation</label>
          <br />
          <div>
            <input
              type="text"
              id="designation"
              name="designation"
              onChange={jobFormik.handleChange}
              value={jobFormik.values.designation}
            />
          </div>
          <br />
        </div>
        <div className="label-input">
          <label htmlFor="company_id">Company</label>

          <br />
          <div>
            <select
              type="text"
              id="company_id"
              name="company_id"
              onChange={jobFormik.handleChange}
              value={jobFormik.values.company_id}
            >
              <option value="" disabled hidden className="placeholder">
                select company
              </option>
              {company.map((company) => (
                <option
                  key={company.id}
                  value={company.id}
                  label={company.name}
                >
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          <br />
        </div>

        <div className="label-input">
          <label htmlFor="location_ids">Location</label>

          <br />
          <div>
            <select
              type="text"
              id="location_ids"
              name="location_ids"
              onChange={jobFormik.handleChange}
              value={jobFormik.values.location_ids}
              multiple
            >
              <option value="" disabled hidden id="default-option">
                select location
              </option>
              {location.map((location) => (
                <option
                  key={location.id}
                  value={location.id}
                  label={location.name}
                >
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <br />
        </div>
        <div className="label-input">
          <label htmlFor="category_ids">Category</label>
          <br />
          <div>
            <select
              type="text"
              id="category_ids"
              name="category_ids"
              onChange={jobFormik.handleChange}
              value={jobFormik.values.category_ids}
              multiple
            >
              <option value="" disabled hidden id="default-option">
                select job category
              </option>
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
          <label htmlFor="job_type_ids">Job Type</label>
          <br />
          <div>
            <select
              type="text"
              id="job_type_ids"
              name="job_type_ids"
              onChange={jobFormik.handleChange}
              value={jobFormik.values.job_type_ids}
              multiple
            >
              <option value="" disabled hidden id="default-option">
                select job type
              </option>
              {jobType.map((jobType) => (
                <option
                  key={jobType.id}
                  value={jobType.id}
                  label={jobType.name}
                >
                  {jobType.name}
                </option>
              ))}
            </select>
          </div>
          <br />
        </div>

        <div className="label-input">
          <label htmlFor="salary">Salary</label>

          <br />
          <div>
            <input
              type="text"
              id="salary"
              name="salary"
              onChange={jobFormik.handleChange}
              value={jobFormik.values.salary}
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
              onChange={jobFormik.handleChange}
              value={jobFormik.values.min_experience}
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
              onChange={jobFormik.handleChange}
              value={jobFormik.values.max_experience}
            />
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
              onChange={jobFormik.handleChange}
              value={jobFormik.values.job_link}
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
      <form onSubmit={companyFormik.handleSubmit}>
        <h1>Company Posting</h1>
        <div className="label-input">
          <label htmlFor="new_company">New Company</label>
          <input
            type="text"
            name="new_company"
            placeholder="Enter new company"
            onChange={companyFormik.handleChange}
            value={companyFormik.values.new_company}
          />
          <br />
          <label htmlFor="logo_name_with_ext">
            Logo With Extension (Eg: amazon.jpg)
          </label>
          <input
            type="text"
            name="logo_name_with_ext"
            placeholder="Enter logo with extension"
            onChange={companyFormik.handleChange}
            value={companyFormik.values.logo_name_with_ext}
          />
        </div>
        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <form onSubmit={categoryFormik.handleSubmit}>
        <h1>Category Posting</h1>
        <div className="label-input">
          <label htmlFor="new_category">New Category</label>
          <input
            type="text"
            name="new_category"
            placeholder="Enter new category"
            onChange={categoryFormik.handleChange}
            value={categoryFormik.values.new_category}
          />
        </div>
        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <form onSubmit={locationFormik.handleSubmit}>
        <h1>Location Posting</h1>
        <div className="label-input">
          <label htmlFor="new_location">New Location</label>
          <input
            type="text"
            name="new_location"
            placeholder="Enter new location"
            onChange={locationFormik.handleChange}
            value={locationFormik.values.new_location}
          />
        </div>
        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <form onSubmit={jobTypeFormik.handleSubmit}>
        <h1>JobType Posting</h1>
        <div className="label-input">
          <label htmlFor="new_jobType">New JobType</label>
          <input
            type="text"
            name="new_jobType"
            placeholder="Enter jobType"
            onChange={jobTypeFormik.handleChange}
            value={jobTypeFormik.values.new_jobType}
          />
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
