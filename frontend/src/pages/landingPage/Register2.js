import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Navbar from "../../components/landingPage/Navbar";
import RegisterTabs from "../../components/landingPage/RegisterTabs";

const RegisterContainer = styled.section`
  min-height: calc(100vh - 7rem);
  background: var(--white-color);
  padding: 5rem 0;
`;

const Register2 = () => {
  return (
    <>
      <Navbar />
      <RegisterContainer>
        <div className="container">
          <RegisterTabs />
          <form className="w-100">
            <div className="mt-1 flex jc-sb">
              <Input placeholder={"First name"} label="First name" />
              <Input placeholder={"Last name"} label="Last name" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input placeholder={"Other name"} label="Other name" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input type="email" placeholder={"Email"} label="Email" />
              <Input placeholder={"Phone no."} label="Phone number" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input
                type="password"
                placeholder={"Password"}
                label="Password"
              />
              <Input
                type="password"
                placeholder={"Confirm password"}
                label="Confirm password"
              />
            </div>
            <div className="mt-2">
              <Button block="block">Next</Button>
            </div>
          </form>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register2;
