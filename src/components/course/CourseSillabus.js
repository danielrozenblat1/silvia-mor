import React, { useState } from 'react';
import styles from './CourseSillabus.module.css';
import { Scissors, Brush, Wind, Crown, Sparkles, Wand2, Heart, Gem, 
         Palette, Feather, Smile, Star, Settings, Shell, Plus, Minus } from 'lucide-react';

const CourseSillabus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMeetings, setExpandedMeetings] = useState({});

  const toggleSyllabus = () => {
    setIsOpen(!isOpen);
  };

  const toggleMeeting = (index) => {
    setExpandedMeetings({
      ...expandedMeetings,
      [index]: !expandedMeetings[index]
    });
  };

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
    <div className={styles.container} id="סילבוס">
      <div className={styles.inner}>
        <div className={styles.syllabusHeader} onClick={toggleSyllabus}>
          <div className={styles.headerRight}>
            <h1 className={styles.mainTitle}>
              <Scissors className={styles.titleIcon} />
              סילבוס קורס תסרוקות
            </h1>
            <p className={styles.syllabusDescription}>לחצו כדי לפתוח את הסילבוס המלא</p>
          </div>
          <div className={styles.headerLeft}>
            {isOpen ? 
              <Minus className={styles.toggleIcon} /> : 
              <Plus className={styles.toggleIcon} />
            }
          </div>
        </div>
        
        <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
          {courseContent.map((meeting, index) => (
            <div key={index} className={styles.meetingContainer}>
              <h2 
                className={styles.meetingTitle} 
                onClick={() => toggleMeeting(index)}
              >
                <div className={styles.meetingTitleContent}>
                  <span>{meeting.title}</span>
                </div>
                <div className={styles.meetingToggle}>
                  {expandedMeetings[index] ? 
                    <Minus size={16} className={styles.meetingToggleIcon} /> : 
                    <Plus size={16} className={styles.meetingToggleIcon} />
                  }
                </div>
              </h2>
              
              <div className={`${styles.meetingContent} ${expandedMeetings[index] ? styles.open : ''}`}>
                <ul className={styles.topicList}>
                  {meeting.topics.map((topic, topicIndex) => (
                    <Topic key={topicIndex} content={topic} index={topicIndex} />
                  ))}
                </ul>
                <PracticalSection topics={meeting.practical} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSillabus;