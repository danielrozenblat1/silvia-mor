import React, { useEffect, useRef, useState } from 'react';
import styles from './Bonus.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
import certificate from "../../Icons/wired-lineal-977-internship-hover-pinch.json"
import work from "../../Icons/wired-lineal-406-study-graduation-hover-pinch.json"
import secure from "../../Icons/wired-lineal-16-avatar-woman-nodding-hover-pinch (1).json"
import avialable from "../../Icons/wired-lineal-405-non-stop-24-h-hover-spin.json"
import silvia from "../../images/סילביה מסדרת עבודות.png"
import certificates from "../../images/סילביה תעודות.png"
const ServiceColumns = () => {
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    const playerRef4 = useRef(null);
    const [activeColumns, setActiveColumns] = useState({});

    const services = [
        {
            icon: secure,
            ref: playerRef1,
            title: "ביטחון מקצועי מלא",
            type: "text",
            points: [
                "בכל סוגי השיער",
                "בכל סוגי התסרוקות",
                "בכל הטכניקות הקיימות"
            ]
        },
        {
            icon: work,
            ref: playerRef2,
            title: "הזדמנויות להשתלבות בשוק העבודה",
            type: "image",
            image: silvia
        },
        {
            icon: certificate,
            ref: playerRef3,
            title: "תעודת הסמכה מהידע שנרכש מהטובים בעולם",
            type: "image",
            image: certificates
        },
        {
            icon: avialable,
            ref: playerRef4,
            title: "זמינות מלאה גם לאחר הקורס",
            type: "text",
            points: [
                "לכל חשש או התלבטות",
                "לכל שאלה מקצועית"
            ]
        }
    ];

    useEffect(() => {
        [playerRef1, playerRef2, playerRef3, playerRef4].forEach(ref => {
            ref?.current?.playFromBeginning();
        });
    }, []);

    const handleComplete = (ref) => {
        setTimeout(() => {
            ref?.current?.playFromBeginning();
        }, 2500);
    };

    useEffect(() => {
        ScrollReveal().reveal(`.${styles.icon}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
    }, []);

    const toggleColumn = (index) => {
        setActiveColumns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const renderContent = (service, isActive) => {
        if (service.type === "image") {
            return (
                <div className={styles.imageContainer}>
                    <img 
                        src={service.image} 
                        alt={service.title}
                        className={styles.contentImage}
                        style={{ 
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                            transition: 'opacity 0.3s ease, transform 0.3s ease'
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div className={styles.textPoints} style={{ 
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}>
                    {service.points.map((point, idx) => (
                        <p key={idx} className={styles.point}>{point}</p>
                    ))}
                </div>
            );
        }
    };

    return (
        <div className={styles.mainContainer}>
            {services.map((service, index) => (
                index % 2 === 0 && (
                    <div key={index / 2} className={styles.container}>
                        <div className={styles.column}>
                            <div 
                                className={`${styles.cardContent} ${activeColumns[index] ? styles.active : ''}`}
                                onClick={() => toggleColumn(index)}
                            >
                                <div className={styles.icon}>
                                    <Player
                                        icon={service.icon}
                                        ref={service.ref}
                                        size="95%"
                                        loop={true}
                                        onComplete={() => handleComplete(service.ref)}
                                    />
                                </div>
                                <div className={styles.textContainer}>
                                    <p className={styles.text}>{service.title}</p>
                                    <div className={`${styles.arrow} ${activeColumns[index] ? styles.arrowActive : ''}`}>
                                        ▼
                                    </div>
                                </div>
                                <div className={`${styles.pointsWrapper} ${activeColumns[index] ? styles.pointsVisible : ''}`}>
                                    {renderContent(service, activeColumns[index])}
                                </div>
                            </div>
                        </div>
                        {services[index + 1] && (
                            <div className={styles.column}>
                                <div 
                                    className={`${styles.cardContent} ${activeColumns[index + 1] ? styles.active : ''}`}
                                    onClick={() => toggleColumn(index + 1)}
                                >
                                    <div className={styles.icon}>
                                        <Player
                                            icon={services[index + 1].icon}
                                            ref={services[index + 1].ref}
                                            size="95%"
                                            loop={true}
                                            onComplete={() => handleComplete(services[index + 1].ref)}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <p className={styles.text}>{services[index + 1].title}</p>
                                        <div className={`${styles.arrow} ${activeColumns[index + 1] ? styles.arrowActive : ''}`}>
                                            ▼
                                        </div>
                                    </div>
                                    <div className={`${styles.pointsWrapper} ${activeColumns[index + 1] ? styles.pointsVisible : ''}`}>
                                        {renderContent(services[index + 1], activeColumns[index + 1])}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            ))}
        </div>
    );
};

export default ServiceColumns;