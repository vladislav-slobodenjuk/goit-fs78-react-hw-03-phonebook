import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  /* align-items: center; */

  padding: 20px;

  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  input {
    margin-top: 10px;
  }
`;
