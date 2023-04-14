import styled from 'styled-components';

export const Test = styled.div`
  display: none;
  border: solid 2px orange;
  border-radius: 12px;
  text-align: center;
  padding: 15px;
`;

export const TestForm =styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 200px;
justify-content: space-between;
align-items: space-between;
`;
export const AnswerWrap = styled.div`
display: flex;
height: 280px;
flex-wrap: wrap;
justify-content: space-around;
align-text: start;
margin: 50px 0 12px;
border: solid 1px grey;
`
export const Answer = styled.label`
height:calc(100% / 2);
min-width: calc(100% / 2);
>input{
    margin: 12px 0 0;
}
`
export const Button = styled.button`
width: 150px;
margin: auto;
padding: 8px;
border: none;
background-color: orange;
`