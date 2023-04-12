import styled from 'styled-components';
export const WordsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 0;
  width: 100%;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 2);
    justify-content: space-around;
    flex-direction: row;
  } ;
`;
export const Word = styled.li`
  box-sizing: border-box;
  width: 360px;
  text-align: start;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 1px rgb(0 0 0 / 15%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  >p { margin: 0;}
 
  @media screen and (max-width: 424px) {
    flex-direction: column;
    width: 280px;
  };

  @media screen and (min-width: 1024px) {
    width: 380px;
  };
`;