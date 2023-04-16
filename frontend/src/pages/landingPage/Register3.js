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
          <RegisterTabs id="3" />
          <form className="w-100">
            <div className="mt-1 flex jc-sb">
              <Input placeholder={"Founder's Name"} label="Founder's Name" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input
                type="date"
                placeholder={"Established Date"}
                label="Established Date"
              />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input type="text" placeholder={"Address 1"} label="Address 1" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input type="text" placeholder={"Address 2"} label="Address 2" />
              <Input placeholder={"Postal code"} label="Postal code" />
            </div>
            <div className="mt-1 flex jc-sb">
              <Input
                type="text"
                required
                placeholder={"Digital Address"}
                label="Digital Address"
              />
            </div>
            <div className="mt-2">
              <Button type="submit" block="block">
                Next
              </Button>
            </div>
          </form>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register2;
