import React, { useState } from "react";

const iniState = {
  title: "",
  type: "",
  deadLine: "",
  tags: "",
  time: "",
};

const AddContests = () => {
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
    fetch("http://localhost:5000/contest", {
      method: "POST",
      body: JSON.stringify(studentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setStudentData(iniState);
    alert("Submited");
  };

  const { title, type, deadLine, tags, time } = studentData;

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
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
                Add More Contests Here
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
                <label className="form-label">Title</label>
                <input
                  onChange={handleChange}
                  value={title}
                  name="title"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Title"
                />
                <label className="form-label">Type</label>
                <input
                  onChange={handleChange}
                  value={type}
                  name="type"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Type"
                />
                <label className="form-label">DeadLine</label>
                <input
                  onChange={handleChange}
                  value={deadLine}
                  name="deadLine"
                  type="date"
                  className="form-control mb-2"
                  placeholder="Enter DeadLine"
                />
                <label className="form-label">Tags</label>
                <input
                  onChange={handleChange}
                  value={tags}
                  name="tags"
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Tags"
                />
                <label className="form-label">Time</label>
                <input
                  onChange={handleChange}
                  value={time}
                  name="time"
                  type="time"
                  className="form-control mb-2"
                  placeholder="Enter Time"
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

export default AddContests;
