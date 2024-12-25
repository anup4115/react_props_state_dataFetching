import Fetch from "./components/Fetch";
import Props from "./components/Props";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <Props name={"Ram"} />
      <State />
      <Fetch />
    </div>
  );
}

export default App;
