import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../../Routes/routeNames";
import styles from "./styles.module.css";

const HomeView = () => {
  return (
    <div className={styles.container}>
      <Link to={ROUTE_NAMES.COUNTER_PAGE} className={styles.button}>
        Counter
      </Link>
    </div>
  );
};

export default HomeView;
