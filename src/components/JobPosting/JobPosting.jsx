import axios from "axios";
import { Formik, Form } from "formik";
import "./JobPosting.scss";
import { useStateValue } from "../../redux/StateProvider";
import { fetchData } from "../global/fetch";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import React from "react";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import { baseURL } from "../global/config";

const doAuthCheck = true;

const JobPosting = () => {
  const [id, setId] = useState(1);

  const tabs = [
    {
      _id: 1,
      name: "Job Posting",
    },
    {
      _id: 2,
      name: "New Company",
    },
    {
      _id: 3,
      name: "New Category",
    },
    {
      _id: 4,
      name: "New JobType",
    },
    {
      _id: 5,
      name: "New Location",
    },
  ];

  //error message component can be any react or html component that
  //we can redner any react component inside field component using render props
  return (
    <div className="form">
      <div className="category-tabs">
        {tabs.map((tab) => (
          <p
            key={tab._id}
            onClick={() => {
              setId(tab._id);
            }}
          >
            {tab.name}
          </p>
        ))}
        <a href="http://localhost:3000/">Home</a>
      </div>
      <div className="formik">
        {(id === 1 && <Job />) ||
          (id === 2 && <Company />) ||
          (id === 3 && <Category />) ||
          (id === 4 && <JobType />) ||
          (id === 5 && <Location />)}
      </div>
    </div>
  );
};

export default JobPosting;

function Job() {
  const { state, dispatch } = useStateValue();
  const { location, company, jobType, category, token } = state;

  useEffect(() => {
    fetchData(true, state, dispatch);
    // eslint-disable-next-line
  }, []);

  const jobPostingValidationSchema = Yup.object({
    designation: Yup.string().required("Required"),
    company_id: Yup.number().required("Required"),
    salary: Yup.string().required("Required"),
    location_ids: Yup.array().required("Required"),
    category_ids: Yup.array().required("Required"),
    job_type_ids: Yup.array().required("Required"),
    min_experience: Yup.number().required("Required"),
    max_experience: Yup.number().required("Required"),
    job_link: Yup.string().required("Required"),
  });
  const jobPostingInitialValues = {
    designation: "",
    company_id: 0,
    location_ids: [],
    category_ids: [],
    category: [],
    job_type_ids: [],
    salary: "",
    min_experience: "",
    max_experience: "",
    job_link: "",
  };

  const jobPostingOnSubmit = async (values) => {
    console.log(values, "values");

    const post = await axios.post(baseURL + "/api/jobs", values, {
      headers: { "x-auth-token": token, doAuthCheck },
    });
    if (post.status === 200) {
      alert("submitted successfully");
    }
    console.log("job post", post);
  };
  return (
    <Formik
      initialValues={jobPostingInitialValues}
      onSubmit={jobPostingOnSubmit}
      validationSchema={jobPostingValidationSchema}
    >
      <Form>
        <Input name="designation" id="designation" label="Designation" />
        <Select
          name="company_id"
          id="company_id"
          label="Company"
          item={company}
        />

        <Checkbox
          name="location_ids"
          id="location_ids"
          label="Location"
          item={location}
        />
        <Checkbox
          name="job_type_ids"
          id="job_type_ids"
          label="Job Type"
          item={jobType}
        />
        <Checkbox
          name="category_ids"
          id="category_ids"
          label="Category"
          item={category}
        />

        <Input name="salary" id="salary" label="Salary" />
        <Input
          name="min_experience"
          id="min_experience"
          label="Minimum Experience"
        />
        <Input
          name="max_experience"
          id="max_experience"
          label="Maximum Experience"
        />
        <Input name="job_link" id="job_link" label="Job Link" />

        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </Form>
    </Formik>
  );
}

function Location() {
  const { state, dispatch } = useStateValue();
  const { token } = state;
  const newLocationInitialValues = {
    new_location: "",
  };

  const newLocationOnSubmit = async (values) => {
    const location = await axios.post(
      baseURL + "/api/location",
      {
        name: values.new_location,
      },
      { headers: { "x-auth-token": token, doAuthCheck } }
    );
    if (location.status === 200) {
      alert("submitted successfully");
    }
    console.log("location", location);
    const locationres = await axios.get(baseURL + "/api/location", {
      headers: { "x-auth-token": token, doAuthCheck },
    });
    const _location = locationres.data;
    dispatch({ type: "SET_LOCATION", location: _location });
  };
  const newLocationValidationSchema = Yup.object({
    new_location: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={newLocationInitialValues}
      onSubmit={newLocationOnSubmit}
      validationSchema={newLocationValidationSchema}
    >
      <Form>
        <Input name="new_location" id="new_location" label="New Location" />

        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </Form>
    </Formik>
  );
}

function Company() {
  const { state, dispatch } = useStateValue();
  const { token } = state;
  const newCompanyInitialValues = {
    new_company: "",
    logo_url: "",
  };
  const newCompanyOnSubmit = async (values) => {
    const company = await axios.post(
      baseURL + "/api/company",
      {
        name: values.new_company,
        logo_url: values.logo_url,
      },
      { headers: { "x-auth-token": token, doAuthCheck } }
    );
    if (company.status === 200) {
      alert("submitted successfully");
    }
    console.log("company", company);
    const companyres = await axios.get(baseURL + "/api/company", {
      headers: { "x-auth-token": token, doAuthCheck },
    });
    const _company = companyres.data;
    dispatch({ type: "SET_LOCATION", company: _company });
  };
  const newCompanyValidationSchema = Yup.object({
    new_company: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={newCompanyInitialValues}
      onSubmit={newCompanyOnSubmit}
      validationSchema={newCompanyValidationSchema}
    >
      <Form>
        <Input name="new_company" id="new_company" label="New Company" />
        <Input name="logo_url" id="logo_url" label="Logo URL" />

        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </Form>
    </Formik>
  );
}

function Category() {
  const { state, dispatch } = useStateValue();
  const { token } = state;
  const newCategoryInitialValues = {
    new_category: "",
  };
  const newCategoryOnSubmit = async (values) => {
    const category = await axios.post(
      baseURL + "/api/category",
      {
        name: values.new_category,
      },
      { headers: { "x-auth-token": token, doAuthCheck } }
    );
    if (category.status === 200) {
      alert("submitted successfully");
    }
    console.log("category", category);
    const categoryres = await axios.get(baseURL + "/api/category", {
      headers: { "x-auth-token": token, doAuthCheck },
    });
    const _category = categoryres.data;
    dispatch({ type: "SET_CATEGORY", category: _category });
  };
  const newCategoryValidationSchema = Yup.object({
    new_category: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={newCategoryInitialValues}
      onSubmit={newCategoryOnSubmit}
      validationSchema={newCategoryValidationSchema}
    >
      <Form>
        <Input name="new_category" id="new_category" label="New Catgeory" />

        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </Form>
    </Formik>
  );
}
function JobType() {
  const { state, dispatch } = useStateValue();
  const { token } = state;
  const newJobTypeInitialValues = {
    new_jobType: "",
  };
  const newJobTypeOnSubmit = async (values) => {
    const jobType = await axios.post(
      baseURL + "/api/jobType",
      {
        name: values.new_jobType,
      },
      { headers: { "x-auth-token": token, doAuthCheck } }
    );
    if (jobType.status === 200) {
      alert("submitted successfully");
    }
    console.log("jobType", jobType);
    const jobTyperes = await axios.get(baseURL + "/api/jobType", {
      headers: { "x-auth-token": token, doAuthCheck },
    });
    const _jobType = jobTyperes.data;
    dispatch({ type: "SET_JOBTYPE", jobType: _jobType });
  };
  const newJobTypeValidationSchema = Yup.object({
    new_jobType: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={newJobTypeInitialValues}
      onSubmit={newJobTypeOnSubmit}
      validationSchema={newJobTypeValidationSchema}
    >
      <Form>
        <Input name="new_jobType" id="new_jobType" label="New JobType" />

        <div className="button-wrapper">
          <button className="btn" type="submit">
            SUBMIT
          </button>
        </div>
      </Form>
    </Formik>
  );
}
