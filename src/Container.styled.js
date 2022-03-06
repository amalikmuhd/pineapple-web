import styled from "styled-components";

import ImageBackground from "./image-background.jpg";

export const Container = styled.div`
  background-image: url(${ImageBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
