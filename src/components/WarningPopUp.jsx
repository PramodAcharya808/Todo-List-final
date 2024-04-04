import styles from "./WarningPopUp.module.css";

let WarningPopUp = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={`${styles.warningBox}`}><p className={styles.text}>Please enter the item ..!</p></div>
    </div>
  );
};

export default WarningPopUp;
