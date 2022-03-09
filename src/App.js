import { Global } from "./Global";

import { Container } from "./Container.styled";
import { TVContainer, Tv, ChangeableImage } from "./App.styled";
import TVImage from "./home_background.png";

//Firebase
import db from "./firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const fruitsLocations = collection(db, "fruits");

  const [getFruit, setFruits] = useState([]);

  useEffect(() => {
    onSnapshot(fruitsLocations, (snapshot) => {
      setFruits(snapshot.docs.map((doc) => doc.data()));
    });
  });

  const gdt = "assets/fruit" + getFruit.map((name) => name.number) + ".png";

  return (
    <>
      <Global />
      <Container>
        <TVContainer>
          <Tv src={TVImage} />
          {console.log(gdt)}
          <ChangeableImage src={gdt} />
        </TVContainer>
      </Container>
    </>
  );
}

export default App;
