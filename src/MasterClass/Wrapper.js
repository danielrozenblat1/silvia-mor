      


import NavBarNew from '../components/NewNav/NavBarNew';
import styles from "./Wrapper.module.css"
import { useEffect, useState } from 'react';
import ByMe from '../components/ByMe/ByMe';
import FlipCountdown from '../components/countdown/CountDown';
import FirstScreen from './screens/FirstScreen';
import StickyCountdownComponent from '../components/countdown/CountDown';
import MasterClass from './screens/SecondScreen';
import EventSections from '../components/masterclass silabus/MasterclassSilabus';
import PersonalStorySection from '../components/masterclassMe/Me';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import Fit from '../components/MasterclassFit/Fit';



const MasterClassWrapper=()=>{


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
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // עוד שבוע מהיום
  
  return <>
<div style={{background:"linear-gradient(120deg, #565656 0%, #111111 25%, #000000 50%, #222222 75%, #434343 100%)"}}>
<StickyCountdownComponent 
        targetDate={targetDate}
        title="עד המאסטרקלאס הבא:"
        buttonText="להרשמה לחצי כאן!"
        buttonLink="#registration-form"
      />
<FirstScreen/>
<MasterClass/>
<PersonalStorySection/>
  <EventSections/>

  <ForthScreen/>
<Fit/>
{/* 
  <ThirdScreen/>
  <ByMe/> */}
</div>
  </>

      
}
export default MasterClassWrapper