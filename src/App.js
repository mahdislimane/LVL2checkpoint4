import React from "react";
import Wrapper from "./Wrapper";
import Photo from "./Photo";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Photo src="./p.jpg" />

        <Title color="red">Mahdi Slimane</Title>

        <Title small>Programmer</Title>
      </Wrapper>
    </div>
  );
}

export default App;
