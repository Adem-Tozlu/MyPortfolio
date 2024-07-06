import './App.css';

import './styles/pages/_index.scss';
import Header from './components/Header';
import { ThemeProvider } from './components/Theme/ThemeContext';
import ParticlesComponent from './components/ParticlesBackground';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <ParticlesComponent id="particles" />
      <Header />
      < Main/>
      <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;