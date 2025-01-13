import React from 'react';
import styles from './CourseSillabus.module.css';
import { Scissors, Brush, Wind, Crown, Sparkles, Wand2, Heart, Gem, 
         Palette, Feather, Smile, Star, Settings, Shell } from 'lucide-react';

const getTopicIcon = (index) => {
  const icons = [
    Scissors, Brush, Wind, Crown, Sparkles, Wand2, 
    Heart, Gem, Palette, Feather, Smile, Star, Settings, Shell
  ];
  return icons[index % icons.length];
};

const Topic = ({ content, index }) => {
  const Icon = getTopicIcon(index);
  return (
    <li className={styles.topic}>
      <Icon className={styles.topicIcon} size={16} />
      <span>{content}</span>
    </li>
  );
};

const PracticalSection = ({ topics }) => (
  <div className={styles.practicalSection}>
    <div className={styles.practicalHeader}>
      <Sparkles size={18} />
      <h3 className={styles.practicalTitle}>תרגול מעשי</h3>
    </div>
    <ul className={styles.subtopicList}>
      {topics.map((topic, index) => (
        <li key={index} className={styles.subtopic}>
          <Crown size={14} className={styles.subtopicIcon} />
          <span>{topic}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HairstylingCourse = () => {
  const courseContent = [
    {
      title: 'מפגש ראשון: תיאוריה',
      topics: [
        'התיאוריה המקיפה של עולם התסרוקות',
        'הכרת מוצרים מקצועיים ושימושם הנכון',
        'שיטות מתקדמות להכנת השיער',
        'לימוד סוגי ניפוחים שונים'
      ],
      practical: ['תסרוקת קוקטייל נמוכה ראשונה', 'תסרוקת קוקטייל נמוכה שנייה']
    },
    {
      title: 'מפגש שני: תורת הגלים',
      topics: [
        'טכניקות ליצירת גלים קלאסיים',
        'טכניקות ליצירת גלים אופנתיים',
        'טכניקות ליצירת גלים חופשיים',
        'טכניקות ליצירת גלי חוף',
        'שימוש מקצועי בבייביליס',
        'עבודה נכונה עם תוספות שיער'
      ],
      practical: ['תסרוקת גלים', 'תסרוקת קוקו מוברש']
    },
    {
      title: 'מפגש שלישי: תסרוקות כלה וערב',
      topics: [
        'טכניקות איסוף ועבודה עם ספוג',
        'יצירת טקסטורות מיוחדות',
        'התאמת סוגי פוני לתסרוקת'
      ],
      practical: ['תסרוקת כלה', 'תסרוקת ערב']
    },
    {
      title: 'מפגש רביעי: תסרוקות קוקטייל נמוכות',
      topics: [
        'הכנה וחלוקת שיער מקצועית',
        'יצירת טקסטורות מיוחדות',
        'טכניקות משיכה לאלמנטים ייחודיים'
      ],
      practical: ['תסרוקת קוקטייל נמוכה מתקדמת ראשונה', 'תסרוקת קוקטייל נמוכה מתקדמת שנייה']
    }
  ];

  return (
    <div className={styles.container} id="קורס מתחילות">
      <div className={styles.inner}>
        <h1 className={styles.mainTitle}>
          <Scissors className={styles.titleIcon} />
          סילבוס קורס תסרוקות
          <Scissors className={styles.titleIcon} />
        </h1>
        {courseContent.map((meeting, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.meetingTitle}>{meeting.title}</h2>
            <ul className={styles.topicList}>
              {meeting.topics.map((topic, topicIndex) => (
                <Topic key={topicIndex} content={topic} index={topicIndex} />
              ))}
            </ul>
            <PracticalSection topics={meeting.practical} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default HairstylingCourse;