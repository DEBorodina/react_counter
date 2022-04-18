import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import CounterOfCountersContainer from "../pages/CounterOfCounters/containers/CounterOfCountersContainer";
import ToDoListContainer from "../pages/ToDoList/containers/ToDoListContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTER_OF_COUNTERS_PAGE}
        element={<CounterOfCountersContainer />}
      />
      <Route
        path={ROUTE_NAMES.TODO_LIST_PAGE}
        element={<ToDoListContainer />}
      />
      <Route path="*" element={<HomeContainer />} />
    </Routes>
  );
};
