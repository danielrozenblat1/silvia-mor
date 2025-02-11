import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import { useEffect, useState } from 'react';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import FixedFirstScreen from './screens/FixedFirstScreen';
import SixthScreen from './screens/SixthScreen';
import SeventhScreen from './screens/SeventhScreen';
import ParallaxQuote from './screens/EightScreen';
import NinthScreen from './screens/NinthScreen';

function App() {
      
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  {/* <FirstScreen scrolled={scrolled}/> */}
  <FixedFirstScreen/>
  <SecondScreen/>
  <SixthScreen/>
  <SeventhScreen/>
  <ParallaxQuote/>
  <NinthScreen/>
  {/* <ThirdScreen/>
  <ForthScreen/> */}
  <ByMe/>
  </>
}

export default App;
