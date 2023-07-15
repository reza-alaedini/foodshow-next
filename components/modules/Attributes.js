import styles from "./Attributes.module.css";

// icons
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function Attributes() {
  return (
    <div className={styles.container}>
      <h3>Why us ?</h3>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fats</p>
        </div>
        <div>
          <Food />
          <p>Best restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
