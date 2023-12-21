import styles from "./Friend.module.css";
import VisuallyHidden from "./VisuallyHidden";
import Tab from "./Tab";

export default function Friend() {
  return (
    <Tab>
      <div className={styles.listWrapper}>
        <ul className={styles.friendList}>
          <li className={styles.friend}>
            <div className={styles.greenDot} />
            Chen
            <VisuallyHidden>(Online)</VisuallyHidden>
          </li>
        </ul>
      </div>
    </Tab>
  );
}
