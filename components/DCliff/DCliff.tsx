import ImageAvatar from "./image-daniel.jpg";
import styles from "./DCliff.module.scss";

export default function DCliff() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={ImageAvatar.src}
          alt="Daniel Clifford."
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Daniel Clifford</h1>
          <h2 className={styles.label}>Verified Graduate</h2>
        </div>
      </div>
      <h1 className={styles.title}>
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny&apos;s worth.
      </h1>
      <p className={styles.description}>
        &quot;I was an EMT for many years before I joined the bootcamp.
        I&apos;ve been looking to make a transition and have heard some people
        who had an amazing experience here. I signed up for the free intro
        course and found it incredibly fun! I enrolled shortly thereafter. The
        next 12 weeks was the best - and most grueling - time of my life. Since
        completing the course, I&apos;ve successfully switched careers, working
        as a Software Engineer at a VR startup.&quot;
      </p>
    </div>
  );
}
