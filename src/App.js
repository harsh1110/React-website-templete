import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './Component/Banner';
import { Navbar } from './Component/Navbar';
import { OverView } from './Component/OverView';
import { Profile } from './Component/Profile';
import { Skills } from './Component/Skills';
import { Resume } from './Component/Resume';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';

function App() {
  return (
    <>
    <Banner/>
    <Navbar/>
    <OverView/>
    <Profile/>
    <Skills/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
