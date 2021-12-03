import React from "react";
import { NavBarAdmin } from "./NavBarAdmin";
import StudentList from "./StudentList";

const AdminPannel = () => {
  return (
    <div>
      <NavBarAdmin />
      <StudentList />
    </div>
  );
};

export default AdminPannel;
