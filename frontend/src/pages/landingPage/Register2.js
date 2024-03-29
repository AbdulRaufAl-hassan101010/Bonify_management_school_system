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
          <RegisterTabs id="2" />
          <form className="w-100">
            <div className="mt-1 flex jc-sb">
              <Input placeholder={"School name"} label="School name" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input type="email" placeholder={"Email"} label="Email" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input placeholder={"Phone no."} label="Phone number" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input placeholder={"Founder's Name"} label="Founder's Name" />
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
