import { useDispatch, useSelector } from "react-redux";

import { CREATE_COUNTER, REMOVE_COUNTER } from "../actions";
import CounterView from "../../CounterOfCounters/componenents/CounterView";

const ReducxCounterManagerContainer = () => {
  const dispatch = useDispatch();

  //const counters = useSelector((store) => store.countersManager.counters);
  const { counters } = useSelector((store) => store.countersManager);

  console.log(counters);

  const handleCounterCreate = () => {
    dispatch(CREATE_COUNTER());
  };

  const handleCounterDelete = (id) => {
    dispatch(REMOVE_COUNTER(id));
  };

  return (
    <div>
      <div>
        <button onClick={handleCounterCreate}>create</button>
      </div>
      {counters.map(({ id, value }) => (
        <CounterView
          key={id}
          id={id}
          counterValue={value}
          onRemove={handleCounterDelete}
        />
      ))}
    </div>
  );
};

export default ReducxCounterManagerContainer;
