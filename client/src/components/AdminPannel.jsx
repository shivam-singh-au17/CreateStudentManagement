import React, { useState } from "react";
import { NavBarAdmin } from "./NavBarAdmin";
import StudentList from "./StudentList";
import axios from "axios";

const AdminPannel = () => {
  const [getStudent, setGetStudent] = useState([]);

  function getTheStudent() {
    axios.get(`http://localhost:5000/student/`).then((res) => {
      setGetStudent(res.data.data);
    });
  }
  return (
    <div>
      <NavBarAdmin getTheStudent={getTheStudent} />
      <StudentList
        getStudent={getStudent}
        setGetStudent={setGetStudent}
        getTheStudent={getTheStudent}
      />
    </div>
  );
};

export default AdminPannel;
