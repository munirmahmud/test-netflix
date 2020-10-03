import React from 'react';
import jumboData from './fixtures/jumbo.json';
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <Jumbotron.Container>
        {jumboData.map(item => (
            <Jumbotron key={item.id} direction={item.direction}>
                <p>{item.title}</p>
                <p>{item.subTitle}</p>
            </Jumbotron>
        ))}
    </Jumbotron.Container>
  );
}

export default App;
