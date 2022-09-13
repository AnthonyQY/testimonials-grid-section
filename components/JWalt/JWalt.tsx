import ImageAvatar from "./image-jonathan.jpg";
import styles from "./JWalt.module.scss";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={ImageAvatar.src}
          alt="Jonathan Walters."
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Jonathan Walters</h1>
          <h2 className={styles.label}>Verified Graduate</h2>
        </div>
      </div>
      <h1 className={styles.title}>
        The team was very supportive and kept me motivated
      </h1>
      <p className={styles.description}>
        “I started as a total newbie with virtually no coding skills. I now work
        as a mobile engineer for a big company. This was one of the best
        investments I've made in myself.”
      </p>
    </div>
  );
}
