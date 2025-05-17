import "./styles.css";
import { DogList } from "./DogList";
import { DogNameContainer } from "./AddDogStyles";

export default function App() {
  return (
    <div className="App">
      <div className="flexcontainer">
        <h1>Who's the best dog ever?</h1>
        <div>
          <DogList />
          <DogNameContainer>
            <div id="showName">it is ...</div>
          </DogNameContainer>
        </div>
      </div>
    </div>
  );
}
