import ImageAvatar from "./image-patrick.jpg";
import styles from "./PAbra.module.scss";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={ImageAvatar.src}
          alt="Patrick Abrams."
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Patrick Abrams</h1>
          <h2 className={styles.label}>Verified Graduate</h2>
        </div>
      </div>
      <h1 className={styles.title}>
        Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy.
      </h1>
      <p className={styles.description}>
        “The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people.”
      </p>
    </div>
  );
}
