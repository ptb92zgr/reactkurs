import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={`${styles.menuContainer} container`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">Strona główna</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
