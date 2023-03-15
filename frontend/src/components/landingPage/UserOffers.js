import styled from "styled-components";

const Section = styled.section`
  background-color: var(--secondary-color);
  ${(props) =>
    props.reverse &&
    `
    background-color: var(--light-red-color);
    `}

  .container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    ${(props) =>
      props.reverse &&
      `
    flex-direction: row-reverse;
    `}

    p,
    li {
      color: var(--light-dark-color);
    }

    & > div {
      flex-basis: 40%;
    }

    img {
      border-radius: 3.7rem;
      border: 0.2rem solid var(--primary-color);
      height: 30rem;
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 2.5rem;
    }

    i {
      background: var(--primary-color);
      color: var(--white-color);
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;

const UserOffers = ({ title, intro, list = [], image, reverse = false }) => {
  return (
    <Section className="py-5" reverse={reverse}>
      <div className="container">
        <div>
          <h2 className="display-2">{title}</h2>
          <p>{intro}</p>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <i className="fa fa-arrow-right"></i> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {image && (
          <div>
            <img loading="lazy" src={image} alt="" />
          </div>
        )}
      </div>
    </Section>
  );
};

export default UserOffers;
