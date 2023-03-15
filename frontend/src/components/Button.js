import styled from "styled-components";

const Button = styled.a`
  padding: 1rem 1.6rem;
  border-radius: 3.7rem;
  display: inline-block;
  background: ${(props) => (props.bg ? props.bg : `var(--primary-color)`)};
  color: ${(props) => (props.color ? props.color : `var(--white-color)`)};
  ${(props) =>
    props.outline &&
    `
    background: transparent;
    color: var(--primary-color);
    border: 0.2rem solid  var(--primary-color);
    padding: 0.8rem 1.6rem;
  `}
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
