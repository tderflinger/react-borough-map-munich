import React, { useState } from "react";
import "./App.css";
import MunichMap from "./components/MunichMap/MunichMap";
import styled from "@emotion/styled";

function App() {
  const [borough, setBorough] = useState("");

  const handleBorough = (name) => {
    setBorough(name);
  };

  return (
    <>
      <Container>
        <h1>Munich Boroughs</h1>
        <MunichMap callback={handleBorough} />
        <h1>{borough}</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

export default App;
