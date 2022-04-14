import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../../Routes/routeNames";
import styles from "./styles.module.css";

const HomeView = () => {
  return (
    <div className={styles.container}>
      <Link to={ROUTE_NAMES.COUNTER_PAGE} className={styles.button}>
        Simple Counter
      </Link>
      <Link to={ROUTE_NAMES.COUNTER_OF_COUNTERS_PAGE} className={styles.button}>
        Counter of Counters
      </Link>
    </div>
  );
};

export default HomeView;
