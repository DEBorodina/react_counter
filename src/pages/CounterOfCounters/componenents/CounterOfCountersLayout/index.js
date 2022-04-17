import styles from "./styles.module.css";
import PropTypes from "prop-types";
import CounterView from "../CounterView";

const CounterOfCountersView = ({
  counters,
  addCounter,
  resetCounters,
  increment,
  decrement,
  remove,
  reset,
  number,
  sum,
}) => {
  return (
    <div>
      <div className={styles.container}>
        <button onClick={addCounter} className={styles.button}>
          add counter
        </button>
        <button onClick={remove} className={styles.button}>
          remove counter
        </button>
        <button onClick={resetCounters} className={styles.button}>
          reset
        </button>
        <div className={styles.smallScreen}>sum: {sum}</div>
        <div className={styles.smallScreen}>number: {number}</div>
      </div>
      <div className={styles.counterContainer}>
        {counters.map(({ id, value }) => {
          return (
            <CounterView
              counterValue={value}
              id={id}
              key={id}
              onIncrement={increment}
              onDecrement={decrement}
              onReset={reset}
              onRemove={remove}
            />
          );
        })}
      </div>
    </div>
  );
};

CounterOfCountersView.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  addCounter: PropTypes.func.isRequired,
  resetCounters: PropTypes.func.isRequired,
};

export default CounterOfCountersView;
