import './App.css';
import './styles/pages/_index.scss';
import Header from './components/Header';
import { ThemeProvider } from './components/Theme/ThemeContext';
import ParticlesComponent from './components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <ParticlesComponent id="particles" />
      <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;