import styles from "./SearchBar.module.css";
import Tab from "./Tab";

export default function SearchBar() {
  return (
    <Tab>
      <div className={styles.formWrapper}>
        <form>
          <label htmlFor="search-input">Search:</label>
          <input id="search-input"></input>
          <button aria-label="Submit" className={styles.submitBtn}>
            <img
              alt=""
              src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
            />
          </button>
        </form>
      </div>
    </Tab>
  );
}
