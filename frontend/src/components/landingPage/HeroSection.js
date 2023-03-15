import styled from "styled-components";
import Button from "../Button";

import hero from "../../assets/images/hero.png";

const HeroSec = styled.header`
  background: var(--secondary-color);
  min-height: 65rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  .container {
    display: flex;
    justify-content: space-between;
    word-wrap: break-word;

    .header-content {
      flex-basis: 50%;
      display: flex;
      align-items: center;

      h1 {
        font-family: var(--primary-font);
        font-size: 4.5rem;
        line-height: 1.2;
        font-weight: 800;
      }

      p {
        color: var(--light-dark-color);
      }

      p,
      .buttons-container {
        margin-top: 3rem;
      }

      .buttons-container a {
        margin-right: 2rem;
      }
    }

    .header-img {
      flex-basis: 40%;
      height: 100%;
    }
  }

  @media (max-width: 1100px) {
    .container {
      .header-content {
        flex-basis: 50%;
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroSec>
      <div className="container">
        <div className="header-content">
          <div>
            <h1>
              Best school management system that makes you focus on the
              important things.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="buttons-container">
              <Button>Get started</Button>
              <Button outline>Watch a demo</Button>
            </div>
          </div>
        </div>
        <div className="header-img">
          <img src={hero} alt="" />
        </div>
      </div>
    </HeroSec>
  );
};

export default HeroSection;
