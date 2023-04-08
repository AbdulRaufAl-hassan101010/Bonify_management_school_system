import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const RegisterTabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  i {
    display: inline-block;
  }

  .active {
    background: var(--primary-color);
    color: var(--white-color);
  }

  & > a {
    flex: 4;
    border: 0.01rem solid #ccc;
    padding: 1.2rem;
    border-radius: 1rem;
    justify-content: center;
    align-self: center;
    text-align: center;
    width: 100%;
  }
`;

const tabs = [
  { title: "User Info", icon: "fa-sharp fa-solid fa-user fa-2x" },
  { title: "School Info", icon: "fa-sharp fa-solid fa-school fa-2x" },
  { title: "Personal Details", icon: "fa-sharp fa-solid fa-list fa-2x" },
  { title: "User Info", icon: "fa-sharp fa-solid fa-school fa-2x" },
];

const RegisterTabs = () => {
  // get url params to set active tab
  let { id } = useParams();
  if (!id) id = 1;

  return (
    <RegisterTabsContainer>
      {tabs.map(({ title, icon }, index) => {
        return (
          <React.Fragment key={index}>
            <Link
              key={index}
              to=""
              className={+id === index + 1 ? "active" : ""}
            >
              <div className="display-2">{index + 1}</div>
              <i className={icon}></i>
              <div>
                <small>{title}</small>
              </div>
            </Link>
            {tabs.length - 1 !== index && (
              <div>
                <i className="fa fa-arrow-right fa-2x"></i>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </RegisterTabsContainer>
  );
};

export default RegisterTabs;
