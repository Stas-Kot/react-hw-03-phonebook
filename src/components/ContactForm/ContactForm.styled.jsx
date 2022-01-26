import styled from '@emotion/styled/macro';

export const Form = styled.form`
  width: 400px;
  border: 2px solid black;
  padding: 20px;
  & label {
    font-weight: 500;
  }
  & p {
    margin: 0;
    margin-bottom: 10px;
  }
  & input {
    margin-bottom: 30px;
    &:focus {
      border: 2px solid #6ea2de;
      box-shadow: 0px 0px 10px #6ea2de;
      outline: none;
    }
  }
`;

export const Btn = styled.button`
  display: block;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:active {
    background-color: #0066ff;
  }

  &.deleteBtn {
    display: inline;
    margin-left: 20px;
  }
`;
