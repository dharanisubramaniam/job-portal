import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-dropdown-select";

const JobPosting = () => {

    const baseURL = "http://localhost:5001";

    const [state, setState] = useState(false);
    const [category_id, setCategory_id] = useState(0);
    const [designation, setDesignation] = useState('');
    const [company_id, setCompany_id] = useState(0);
    const [min_experience, setMin_experience] = useState(0);
    const [max_experience, setMax_experience] = useState(0);
    const [location_id, setLocation_id] = useState(0);
    const [salary, setSalary] = useState(0);
    const [job_type_id, setJob_type_id] = useState(0);
    const [job_link, setJob_link] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const categoriesRes = await axios.get(baseURL + "/api/category");
        setCategories(categoriesRes.data);
        categories.push({
            value: 'king',
            label: 'jegan'
        });
        console.log(categories);
    }, []);

    useEffect(async () => {
        if (state) {
            const jobres = await axios.post(baseURL + "/api/jobs", {
                category_id,
                designation,
                company_id,
                min_experience,
                max_experience,
                location_id,
                salary,
                job_type_id,
                job_link
            });
            const _job = jobres.data;
            setSuccessMessage(_job.designation + ' Job is posted Sucessfully...!!!');
            console.log(successMessage);
            // fetch(baseURL+"/api/jobs").then(() => alert('Success'));
        }
    }, [state]);

    return (
        <div>
            <h4>{successMessage}</h4>
            <h1>Job Posting</h1>
            <label>Designation</label><br />
            <input type="text" onChange={(e) => setDesignation(e.target.value)} /><br />
            <label>Categories</label><br />
            <Select options={categories} onChange={(values) => setCategory_id(values)} />
            <label>Job Link</label><br />
            <input type="text" onChange={(e) => setJob_link(e.target.value)} /><br />
            <label>Minimum Experience</label><br />
            <input type="number" onChange={(e) => setMin_experience(e.target.value)} /><br />
            <label>Maximum Experience</label><br />
            <input type="number" onChange={(e) => setMax_experience(e.target.value)} /><br />
            <label>Salary</label><br />
            <input type="number" onChange={(e) => setSalary(e.target.value)} /><br />
            <button onClick={() => { setState(true) }}>SUBMIT</button>
        </div>
    );
};

export default JobPosting;