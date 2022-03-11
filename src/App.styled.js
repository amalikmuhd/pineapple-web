import styled from "styled-components";

export const TVContainer = styled.div`
  /* background-color: lightcoral; */
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tv = styled.img`
  width: 40%;
  margin: auto;
  margin-top: 8rem;
  /* margin-top: 25rem; */
`;

export const Title = styled.div`
  position: relative;
  bottom: 47rem;
  right: 5rem;
  font-size: 5rem;
`;

export const ChangeableImage = styled.img`
  position: relative;
  bottom: 47rem;
  right: 5rem;
  width: 18%;

  @media only screen and (max-width: 480px) {
    bottom: 37rem;
  }
`;
