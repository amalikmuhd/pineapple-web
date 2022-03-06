import { Global } from "./Global";

import { Container } from "./Container.styled";
import { TVContainer, Tv, Title, ChangeableImage } from "./App.styled";

import TVImage from "./home_background.png";
import Fruit from "./fruit8.png";

function App() {
  return (
    <>
      <Global />
      <Container>
        <TVContainer>
          <Tv src={TVImage} />
          {/* <ChangeableImage src={Fruit} /> */}
          <Title>Hi, Ati I miss you!!</Title>
        </TVContainer>
      </Container>
    </>
  );
}

export default App;
