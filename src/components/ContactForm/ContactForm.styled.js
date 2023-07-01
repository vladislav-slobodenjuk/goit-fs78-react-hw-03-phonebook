import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-end;

  padding: 20px;

  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  label {
    margin-bottom: 20px;
  }

  input {
    margin-left: 10px;
  }

  button {
    align-self: center;
  }
`;
