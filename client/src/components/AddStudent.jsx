import React, { useState } from "react";

const iniState = {
  name: "",
  city: "",
  age: "",
  education: "",
  gender: "",
  contact: "",
};

const AddStudent = ({ getTheStudent }) => {
  const [studentData, setStudentData] = useState(iniState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const myAllUserData = {
      ...studentData,
      [name]: type === "checkbox" ? checked : value,
    };
    setStudentData(myAllUserData);
  };

  const onSubmitStudent = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/student", {
      method: "POST",
      body: JSON.stringify(studentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setStudentData(iniState);
    alert("Submited");
    getTheStudent();
  };

  const { name, city, age, education, gender, contact } = studentData;

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add More Students Here
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label className="form-label">Name</label>
                <input
                  onChange={handleChange}
                  value={name}
                  name="name"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Name"
                />
                <label className="form-label">City</label>
                <input
                  onChange={handleChange}
                  value={city}
                  name="city"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter City"
                />
                <label className="form-label">Age</label>
                <input
                  onChange={handleChange}
                  value={age}
                  name="age"
                  type="number"
                  className="form-control mb-2"
                  placeholder="Enter Age"
                />
                <label className="form-label">Education</label>
                <input
                  onChange={handleChange}
                  value={education}
                  name="education"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Education"
                />
                <label className="form-label">Gender</label>
                <input
                  onChange={handleChange}
                  value={gender}
                  name="gender"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Gender"
                />
                <label className="form-label">Contact</label>
                <input
                  onChange={handleChange}
                  value={contact}
                  name="contact"
                  type="number"
                  className="form-control mb-2"
                  placeholder="Enter Contact"
                />
                <button
                  onClick={onSubmitStudent}
                  className="btn btn-primary my-2"
                  style={{ float: "right" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
