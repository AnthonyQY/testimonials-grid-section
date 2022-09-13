import ImageAvatar from "./image-jeanette.jpg";
import styles from "./JHarm.module.scss";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={ImageAvatar.src}
          alt="Jeanette Harmon."
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Jeanette Harmon</h1>
          <h2 className={styles.label}>Verified Graduate</h2>
        </div>
      </div>
      <h1 className={styles.title}>
        An overall wonderful and rewarding experience
      </h1>
      <p className={styles.description}>
        “Thank you for the wonderful experience! I now have a job I really
        enjoy, and make a good living while doing something I love.”
      </p>
    </div>
  );
}
