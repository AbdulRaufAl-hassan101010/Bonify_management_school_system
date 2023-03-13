import styled from "styled-components";

const Button = styled.a`
  padding: 1rem 1.6rem;
  border-radius: 3.7rem;
  display: inline-block;
  background: ${(props) => (props.bg ? props.bg : `var(--primary-color)`)};
  color: ${(props) => (props.color ? props.color : `var(--white-color)`)};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
