import PropTypes from "prop-types";
import { memo } from "react";

import styles from "./styles.module.css";

const CounterView = ({
  counterValue,
  onIncrement,
  onDecrement,
  onReset,
  onRemove,
  id,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.screen}>{counterValue}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => onDecrement(id)}>
          -
        </button>
        <button className={styles.button} onClick={() => onReset(id)}>
          reset
        </button>
        <button className={styles.button} onClick={() => onIncrement(id)}>
          +
        </button>
      </div>
      <button className={styles.homeButton} onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default memo(CounterView);
