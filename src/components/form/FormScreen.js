import { useRef, useState } from 'react';
import styles from './FormScreen.module.css'

const FormScreen = (props) => {
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')
  const reasonRef = useRef('')
  const reciver = "silvimorart@gmail.com"
  const webhookUrl = "https://hook.eu2.make.com/8wk2tfyooa1d1inbwh2qensdkxtc6jy9"
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead"

  const submitHandler = async(e) => {
    e.preventDefault()
    const name = nameRef?.current?.value
    const phone = phoneRef?.current?.value
    const email = emailRef?.current?.value
    const reason = reasonRef?.current?.value

    if(name.trim().length <= 2) {
      alert("אנא הכניסי שם מלא ")
      return;
    }
    if(phone.trim().length !== 10) {
      alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ")
      return;
    }
    if(!email.includes("@")) {
      alert("אנא הכניסי מייל תקין ")
      return;
    }
    if(!reason) {
      alert("אנא בחרי סיבת פנייה")
      return;
    }

    // נתונים לשרת המקורי
    const serverData = {
      name: name,
      phone: phone,
      email: email,
      reason: reason,
      reciver: reciver
    }

    // נתונים לווב-הוק - ללא קינון מיותר
    const webhookData = {
      name: name,
      phone: phone,
      email: email,
      reason: reason
    }

    try {
      console.log('Sending webhook data:', JSON.stringify(webhookData));
      
      // שליחה לווב-הוק קודם לכן, עם טיפול בתגובה
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(webhookData)
      });
      
      console.log('Webhook response status:', webhookResponse.status);
      
      // נסה לקרוא את התגובה כטקסט
      let webhookResponseText;
      try {
        webhookResponseText = await webhookResponse.text();
        console.log('Webhook response text:', webhookResponseText);
      } catch (error) {
        console.log('Could not read webhook response as text:', error);
      }
      
      // שליחה לשרת
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });
      
      if (serverResponse.ok && webhookResponse.ok) {
        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
        nameRef.current.value = ""
        phoneRef.current.value = ""
        emailRef.current.value = ""
        reasonRef.current.value = ""
        setSubmitted(true)
      } else {
        if (!webhookResponse.ok) {
          console.error('Webhook error:', webhookResponse.status, webhookResponseText);
        }
        if (!serverResponse.ok) {
          console.error('Server error:', serverResponse.status);
        }
        throw new Error('Failed to submit form to one or both endpoints');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסי שוב מאוחר יותר")
      console.error('Error submitting form:', error)
    }
  }

  return <>
    <div className={styles.title} id="צרי קשר">{props.title}</div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="שם מלא"
          ref={nameRef}
        />
        <input
          type="tel"
          className={styles.input}
          placeholder="מספר טלפון"
          ref={phoneRef}
        />
        <input
          type="email"
          className={styles.input}
          placeholder="מייל"
          ref={emailRef}
        />
        <select
          className={styles.input}
          ref={reasonRef}
          defaultValue=""
        >
          <option value="" disabled>בחרי סיבת פנייה</option>
          <option value="הרשמה לקורס">הרשמה לקורס</option>
          <option value="שאלה על הקורס">שאלה על הקורס</option>
          <option value="בקשה לפרטים נוספים על סילבוס">בקשה לפרטים נוספים על סילבוס</option>
          <option value="אחר">אחר</option>
        </select>
        <button onClick={submitHandler} className={styles.button}>
          סילביה, צרי איתי קשר
        </button>
      </form>
    </div>
  </>
};

export default FormScreen