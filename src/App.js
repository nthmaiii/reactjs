import './App.css';
import logo from './assets/images/logo.svg';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';
import { Section4 } from './components/Section4/Section4';
import { Section7 } from './components/Section7/Section7';
import { Section8 } from './components/Section8/Section8';
function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 />
      <Section8 />
      <Footer />
    </>
  );
}

export default App;
