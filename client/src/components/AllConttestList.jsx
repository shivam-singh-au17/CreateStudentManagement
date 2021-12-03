
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllConttestList = () => {

  const [getStudent, setGetStudent] = useState([]);

  function getTheStudent() {
    axios.get(`http://localhost:5000/contest/`).then((res) => {
      setGetStudent(res.data.data);
    });
  }

  useEffect(() => {
    getTheStudent();
  }, []);

  const SortByAge = () => {
    const updatedData = getStudent.sort(compare2);
    setGetStudent([...updatedData]);
  };

  const SortByName = () => {
    const updatedData = getStudent.sort(compare);
    setGetStudent([...updatedData]);
  };

  function compare(a, b) {
    if (a.tags < b.tags) {
      return -1;
    }
    if (a.tags > b.tags) {
      return 1;
    }
    return 0;
    }
    
  function compare2(a, b) {
    if (a.deadLine < b.deadLine) {
      return -1;
    }
    if (a.deadLine > b.deadLine) {
      return 1;
    }
    return 0;
  }

    
  return (
    <div className="container my-5">
      <h1 className="text-center my-5">
        <u>All Contest List</u>
      </h1>
      <div>
        <button className="btn btn-secondary" onClick={SortByAge}>
          Sort By DeadLine
        </button>
        <button className="btn btn-warning m-3 text-light" onClick={SortByName}>
          Sort By Tags
        </button>
      </div>
      <table className="table fs-5">
        <thead>
          <tr className="bg-dark text-light">
            <th>S No.</th>
            <th>Title</th>
            <th>Type</th>
            <th>DeadLine</th>
            <th>Tags</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {getStudent.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.deadLine}</td>
                <td>{item.tags}</td>
                <td>{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllConttestList;
