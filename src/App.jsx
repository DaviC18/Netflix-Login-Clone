import Header from "./components/Header";
import Landing from "./components/Landing";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App bg">
      <div className="bg-shadow">
        <Header />
        <Landing />
      </div>
    </div>
  );
}

export default App;
