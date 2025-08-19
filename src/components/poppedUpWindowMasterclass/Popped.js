import { useState, useRef } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";
import PrivacyPolicy from "../privacy/Privacy";

const Popped = ({ onClose, title }) => {
  const [agreed, setAgreed] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const reasonRef = useRef(null);
  const reciver = "silvimorart@gmail.com";

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const webhookUrl = "https://hook.eu2.make.com/peo7lcn944wrdke9kyu4wn5hpgvkvs2b";

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const reason = reasonRef.current.value;

    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }
    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    if (!email.includes("@")) {
      alert("אנא הכנס מייל תקין");
      return;
    }
    if (!reason) {
      alert("אנא בחר סיבת פנייה");
      return;
    }

    const serverData = {
      name,
      phone,
      email,
      reason,
      reciver
    };

    const webhookData = {
      data: {
        name,
        phone,
        email,
        reason
      }
    };

    try {
      const [serverResponse, webhookResponse] = await Promise.all([
        fetch(serverUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(serverData),
        }),
        fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(webhookData),
        })
      ]);

      if (serverResponse.ok && webhookResponse.ok) {
        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        reasonRef.current.value = "";
        setAgreed(false);
        handleClose();

        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("שליחה נכשלה לאחד היעדים");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("חלה שגיאה בשליחת הטופס. אנא נסה שוב.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popped}>
        <FaTimes className={styles.closeIcon} onClick={handleClose} />
        
        <div className={styles.container}>
          <div className={styles.subtitle}></div>
          <div className={styles.title}>זמן לקחת החלטה</div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.inputGroup}>
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
                <option value="פרטים על מאסטרקלאס">מאסטר קלאס</option>
              </select>

              {/* תיבת האישור למדיניות הפרטיות */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                marginTop: "15px",
                marginBottom: "15px"
              }}>
                <label style={{ 
                  direction: "rtl", 
                  fontFamily: "AssistantR", 
                  fontSize: "0.85rem", 
                  color:"white",
                  textAlign: "right", 
                  display: "flex", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "5px" 
                }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    style={{ marginLeft: "8px" }}
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                       <PrivacyPolicy 
            ownerName="סילביה מור" 
            email="silvimorart@gmail.com" 
            phone="+972 52-625-5255" 
            domain="https://silviamor.co.il/" 
          />
                  </span>
                  ואני מאשר/ת
                </label>
              </div>

              <button type="submit" className={styles.button}>
                סילביה, צרי איתי קשר
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popped;