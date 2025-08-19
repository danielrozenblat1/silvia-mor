      


import NavBarNew from './components/NewNav/NavBarNew';

import SecondScreen from './screens/SecondScreen';

import { useEffect, useState } from 'react';
import ByMe from './components/ByMe/ByMe';

import FixedFirstScreen from './screens/FixedFirstScreen';
import SixthScreen from './screens/SixthScreen';

import ParallaxQuote from './screens/EightScreen';
import NinthScreen from './screens/NinthScreen';
import SeventhScreenFixed from './screens/SeventhScreenFixed';
import HairstylingCourse from './components/course/CourseSillabus';
import SilabusScreen from './screens/SilabusScreen';
import RecommendsScreen from './screens/RecommendsScreen';
import AboutMe from './components/me/Me';
import PrivacyPolicy from './components/privacy copy/Privacy';


const Wrapper=()=>{


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
  <SeventhScreenFixed/>
  <ParallaxQuote/>
  <SilabusScreen/>
  <RecommendsScreen/>
  <NinthScreen/>
   <PrivacyPolicy 
            ownerName="סילביה מור" 
            email="silvimorart@gmail.com" 
            phone="+972 52-625-5255" 
            domain="https://silviamor.co.il/" 
          />
  

  <ByMe/>
  </>

      
}
export default Wrapper