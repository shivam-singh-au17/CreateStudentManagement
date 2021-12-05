import React, { useState, useContext } from "react";
import { LoginContext } from "./LoginContext";

const iniState = {
  userUserEmail: "",
  userPassword: "",
};

const LoginPage = () => {
  const { roleHandler } = useContext(LoginContext);
  const [helpData, setHelpData] = useState(iniState);

  const handleChang = (e) => {
    const { name, value, type, checked } = e.target;
    const myAllUserData = {
      ...helpData,
      [name]: type === "checkbox" ? checked : value,
    };
    setHelpData(myAllUserData);
  };

  const { userUserEmail, userPassword } = helpData;

  const submitHelpPopup = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(helpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    roleHandler(userUserEmail);
    setHelpData(iniState);
    alert("Submited");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img
            className="my-5"
            src="https://learn.masaischool.com/img/login-page.svg"
            alt=""
          />
        </div>

        <div className="col">
          <h1 className="text-center my-5">Login Form</h1>
          <div className="mb-3">
            <label htmlFor="myInput1" className="form-label">
              Email address
            </label>
            <input
              name="userUserEmail"
              value={userUserEmail}
              onChange={handleChang}
              type="email"
              className="form-control"
              id="myInput1"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="myInput2" className="form-label">
              Password
            </label>
            <input
              name="userPassword"
              value={userPassword}
              onChange={handleChang}
              type="password"
              className="form-control"
              id="myInput2"
              placeholder="Enter Password"
            />
          </div>
          <button
            onClick={submitHelpPopup}
            className="btn btn-primary my-3"
            style={{ float: "right" }}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
