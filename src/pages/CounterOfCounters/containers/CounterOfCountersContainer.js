import CounterOfCountersLayout from "../componenents/CounterOfCountersLayout";
import { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { cloneDeep } from "lodash";

const CounterOfCountersContainer = () => {
  const [counters, setCounters] = useState([]);
  const [sum, setSum] = useState(0);
  const [number, setNumber] = useState(0);

  const increment = useCallback((id) => {
    setCounters((state) => {
      const copy = cloneDeep(state);
      const indexToIncrement = copy.findIndex((counter) => counter.id === id);
      copy[indexToIncrement].value++;
      return copy;
    });
  }, []);

  const decrement = useCallback((id) => {
    setCounters((state) => {
      const copy = cloneDeep(state);
      const indexToDecrement = copy.findIndex((counter) => counter.id === id);
      if (copy[indexToDecrement].value > 0) {
        copy[indexToDecrement].value--;
      }
      return copy;
    });
  }, []);

  const reset = useCallback((id) => {
    setCounters((state) => {
      const copy = cloneDeep(state);
      const indexToReset = copy.findIndex((counter) => counter.id === id);
      copy[indexToReset].value = 0;
      return copy;
    });
  }, []);

  const addCounter = () => {
    setCounters((state) => {
      const copy = state.map((counter) => {
        if (counter.value % 2 === 0) {
          return { ...counter, value: counter.value + 1 };
        } else {
          return { ...counter };
        }
      });
      const newCounter = { value: 0, id: uuid() };
      return [...copy, newCounter];
    });
  };

  const remove = useCallback((id) => {
    setCounters((state) => {
      const indexToDelete = state.findIndex((counter) => counter.id === id);
      if (indexToDelete === -1) {
        const copy = state.map((counter) => {
          if (counter.value % 2 === 0) {
            return { ...counter };
          } else {
            return { ...counter, value: counter.value - 1 };
          }
        });
        copy.pop();
        return copy;
      }
      const copy = [...state];
      copy.splice(indexToDelete, 1);
      return copy;
    });
  }, []);

  const resetCounters = () => {
    setCounters([]);
  };

  useEffect(() => {
    setNumber((state) => counters.length);
    setSum((state) =>
      counters.reduce((sum, counter) => sum + counter.value, 0)
    );
  }, [counters]);

  return (
    <CounterOfCountersLayout
      counters={counters}
      addCounter={addCounter}
      resetCounters={resetCounters}
      increment={increment}
      decrement={decrement}
      reset={reset}
      remove={remove}
      sum={sum}
      number={number}
    />
  );
};

export default CounterOfCountersContainer;
