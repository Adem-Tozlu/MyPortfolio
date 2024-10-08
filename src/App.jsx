import "./styles/pages/_index.scss";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import ParticlesComponent from "./components/ParticlesBackground";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ParticlesComponent id="particles" />
        <Header />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
