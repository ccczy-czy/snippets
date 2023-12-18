import React, { useState } from "react";
import styles from "./Tab.module.css";

export default function Tab({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={isVisible ? styles.wrapper : styles.wrapperHidden}>
      <div className={styles.dotWrapper}>
        <button onClick={handleClick} className={styles.dot}></button>
      </div>
      {children}
    </div>
  );
}
