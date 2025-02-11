import React, { useContext } from "react";
import styles from "./Main.module.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className={styles.main_container}>
        {!showResult ? (
          <>
            <div className={styles.greet}>
              <p>
                <span>Hello, Vashu !</span>{" "}
              </p>
              <p>How can I help you today ?</p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className={styles.card}>
                <p>Briefly summarize this concept : urban plannig</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className={styles.card}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className={styles.card}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
        ) : (
          <div className={styles.result}>
            <div className={styles.result_title}>
              <img src={assets.user_icon} alt="user_icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className={styles.result_data}>
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {loading ? (
                <div className={styles.loader}>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className={styles.main_bottom}>
          <div className={styles.search_box}>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input && (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                />
              )}
            </div>
          </div>
          <p className={styles.bottom_info}>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
