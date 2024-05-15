import { styled } from "styled-components";

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #f5f6f6;
padding: 15px 35px 15px 35px;
margin: 20px 0;
border-radius: 0.75rem;
min-width: 250px;
max-width: 300px;
box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
position: relative;

&:before {
  content: "";
  position: absolute;
  top: 2%;
  left: 10px;
  width: 17px;
  height: 96%;
  background-color: lightblue;
  border-radius: 6px;
}
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  gap: 0.1rem;
  margin: 5px;

  label {
    padding-left: 7px;
    color: darkgray;
    font-weight: bold;
  }

  input,
  select,
  textarea {
    border: none;
    border-radius: 0.5rem; 
  }

  input,
  select {
    padding: 5px;
  }
  
  textarea {
    height: 50px;
  }
 
`;

export const FormButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  
`;

export const CancelButton = styled.button`
padding: 0.8rem 1.5rem;
border-radius: 0.75rem;
border: none;
box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
cursor: pointer;
  &:hover {
    background-color: red;
  }`
    
export const EditButton = styled.button`
padding: 0.8rem 1.5rem;
border-radius: 0.75rem;
border: none;
box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
