import React, { useEffect } from "react";
import axios from "axios";

const StudentList = ({ getTheStudent, getStudent, setGetStudent }) => {
  useEffect(() => {
    getTheStudent();
  }, [getTheStudent]);

  const SortByAge = () => {
    const updatedData = getStudent.sort((a, b) => {
      return a.age - b.age;
    });
    setGetStudent([...updatedData]);
  };

  const SortByName = () => {
    const updatedData = getStudent.sort(compare);
    setGetStudent([...updatedData]);
  };

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/student/${id}`).then((res) => {
      getTheStudent();
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5">
        <u>All Student List</u>
      </h1>
      <div>
        <button className="btn btn-secondary" onClick={SortByAge}>
          Sort By Age
        </button>
        <button className="btn btn-warning m-3 text-light" onClick={SortByName}>
          Sort By Name
        </button>
      </div>
      <table className="table fs-5">
        <thead>
          <tr className="bg-dark text-light">
            <th>S No.</th>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Education</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {getStudent.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.age}</td>
                <td>{item.education}</td>
                <td>{item.gender}</td>
                <td>{item.contact}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleDelete(item._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
