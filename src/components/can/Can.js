import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

import styles from './Can.module.css';

const IconTextComponent = ({ text,icon }) => {
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
    },[])
  return (
    <div className={styles.container}>
 <div className={styles.icon}><Player  icon={icon} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconTextComponent;