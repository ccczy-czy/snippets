import styles from "./Avatar.module.css";
import Tab from "./Tab";

export default function Avatar() {
  return (
    <Tab>
      <button className={styles.avatarBtn}>
        <img
          className={styles.avatar}
          src="https://sandpack-bundler.vercel.app/img/avatars/004.png"
          alt="pinky man"
        />
      </button>
    </Tab>
  );
}
