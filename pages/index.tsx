import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import DCliff from "../components/DCliff/DCliff";
import JWalt from "../components/JWalt/JWalt";
import JHarm from "../components/JHarm/JHarm";
import PAbra from "../components/PAbra/PAbra";
import KWhit from "../components/KWhit/KWhit";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.dcliff}>
          <DCliff />
        </div>
        <div className={styles.jwalt}>
          <JWalt />
        </div>
        <div className={styles.jharm}>
          <JHarm />
        </div>
        <div className={styles.pabra}>
          <PAbra />
        </div>
        <div className={styles.kwhit}>
          <KWhit />
        </div>
      </div>
    </div>
  );
};

export default Home;
