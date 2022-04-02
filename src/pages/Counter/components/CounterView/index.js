import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { ROUTE_NAMES } from "../../../../Routes/routeNames";

const CounterView = ({
  counterValue,
  onIncrement,
  onDecrement,
  onReset,
  parityType,
}) => {
  return (
    <div
      className={`${styles.container} ${
        parityType === "odd" ? styles.darkBackground : ""
      }`}
    >
      <p className={styles.screen}>{counterValue}</p>
      <p className={styles.smallScreen}>{parityType}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onDecrement}>
          -
        </button>
        <button className={styles.button} onClick={onReset}>
          reset
        </button>
        <button className={styles.button} onClick={onIncrement}>
          +
        </button>
      </div>
      <Link className={styles.homeButton} to={ROUTE_NAMES.HOME_PAGE}>
        Home
      </Link>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default CounterView;
