import styles from "./Recommends.module.css";
import result1 from "../../images/סילביה מור המלצות 1.png";
import result2 from "../../images/סילביה מור המלצות 2.png";
import result3 from "../../images/סילביה מור המלצות 3.png";
import result4 from "../../images/סילביה מור המלצות 4.png";
import result5 from "../../images/סילביה מור המלצות 5.png";
import result6 from "../../images/סילביה מור המלצות 6.png";
import result7 from "../../images/סילביה מור המלצות 7.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FormScreen from "../form/FormScreen";

const Recommends = () => {
  const sliderSettings = {
    speed: 700,
    autoplaySpeed: 2500,
    infinite: true,
    dots: false,
    slidesToShow: window.innerWidth < 450 ? 1 :
                  window.innerWidth <= 1050 ? 2 : 4,
    slidesToScroll: 1,
  };

  const content = [
    { type: 'image', src: result1 },
    { type: 'image', src: result2 },
    { type: 'image', src: result3 },
    { type: 'image', src: result4 },
    { type: 'image', src: result5 },
    { type: 'image', src: result6 },
    { type: 'image', src: result7 },
  ];

  return (
    <>
      <div className={styles.title} id="לקוחות ממליצות">וזה מה שיש להם להגיד</div>
      <div className={styles.explain}>
        החליקי בין התמונות כדי לראות מה שיש למקבץ קטן מהתלמידים והתלמידות שלי לומר
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemScope itemType="http://schema.org/Review">
              {item.type === 'image' && (
                <img
                  src={item.src}
                  alt={`סילביה מור לקוחה ממליצה מספר ${index + 1}`}
                  className={styles.image1}
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                />
              )}

              {item.type === 'video' && (
                <video
                  muted
                  controls
                  className={styles.video}
                  itemProp="video"
                  preload="none"
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

              <meta itemProp="datePublished" content={new Date().toISOString()} />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.explain}>
        השאירי פרטים בטופס שנמצא למטה ונדאג לחזור אלייך בהקדם
      </div>

      <FormScreen />
    </>
  );
};

export default Recommends;
