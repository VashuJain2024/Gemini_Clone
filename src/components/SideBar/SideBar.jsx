import React, { useContext, useState } from "react";
import styles from "./SideBar.module.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setextended] = useState(false);
  const { onsent, prevPrompts, setRecentPrompt ,newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onsent(prompt);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <img
          className={styles.menu}
          src={assets.menu_icon}
          alt="menu_icon"
          onClick={() => {
            setextended(!extended);
          }}
        />
        <div className={styles.new_chat} onClick={newChat}>
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className={styles.recent}>
            <p className={styles.recent_title}>Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  className={styles.recent_entry}
                  key={index}
                  onClick={() => loadPrompt(item)}
                >
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.bottom_item} ${styles.recent_entry}`}>
          <img src={assets.question_icon} alt="question_icon" />
          {extended && <p>Help</p>}
        </div>
        <div className={`${styles.bottom_item} ${styles.recent_entry}`}>
          <img src={assets.history_icon} alt="history_icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className={`${styles.bottom_item} ${styles.recent_entry}`}>
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
