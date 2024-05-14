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
  gap: 0.4rem;
 
`;

export const FormButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Button = styled.button`
padding: 0.8rem 1.5rem;
display: flex;

justisfy-content: space-between;
`;