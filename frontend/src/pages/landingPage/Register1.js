import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Navbar from "../../components/landingPage/Navbar";
import RegisterTabs from "../../components/landingPage/RegisterTabs";
import User from "../../models/users";

const RegisterContainer = styled.section`
  min-height: calc(100vh - 7rem);
  background: var(--white-color);
  padding: 5rem 0;
`;

const Register1 = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [other_name, setOtherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitFormHandler = async (e) => {
    try {
      const body = {
        first_name,
        last_name,
        email,
        phone,
        password,
        role: "admin",
      };

      const user = await User.addUser(body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <RegisterContainer>
        <div className="container">
          <RegisterTabs id="1" />
          <form className="w-100">
            <div className="mt-1 flex jc-sb">
              <Input
                placeholder={"First name"}
                label="First name"
                value={first_name}
                setValue={setFirstName}
              />
              <Input
                placeholder={"Last name"}
                label="Last name"
                value={last_name}
                setValue={setLastName}
              />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input
                placeholder={"Other name"}
                label="Other name"
                value={other_name}
                setValue={setOtherName}
              />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input
                type="email"
                placeholder={"Email"}
                label="Email"
                value={email}
                setValue={setEmail}
              />
              <Input
                placeholder={"Phone no."}
                label="Phone number"
                value={phone}
                setValue={setPhone}
              />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input
                type="password"
                placeholder={"Password"}
                label="Password"
                value={password}
                setValue={setPassword}
              />
              <Input
                type="password"
                placeholder={"Confirm password"}
                label="Confirm password"
                value={confirmPassword}
                setValue={setConfirmPassword}
              />
            </div>
            <div className="mt-2">
              <Button type="submit" block="block" onClick={submitFormHandler}>
                Next
              </Button>
            </div>
          </form>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register1;
