import ImageAvatar from "./image-kira.jpg";
import styles from "./KWhit.module.scss";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={ImageAvatar.src}
          alt="Kira Whittle."
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Kira Whittle</h1>
          <h2 className={styles.label}>Verified Graduate</h2>
        </div>
      </div>
      <h1 className={styles.title}>
        Such a life-changing experience. Highly recommended!
      </h1>
      <p className={styles.description}>
        “Before joining the bootcamp, I’ve never written a line of code. I
        needed some structure from professionals who can help me learn
        programming step by step. I was encouraged to enroll by a former student
        of theirs who can only say wonderful things about the program. The
        entire curriculum and staff did not disappoint. They were very hands-on
        and I never had to wait long for assistance. The agile team project, in
        particular, was outstanding. It took my learning to the next level in a
        way that no tutorial could ever have. In fact, I’ve often referred to it
        during interviews as an example of my developent experience. It
        certainly helped me land a job as a full-stack developer after receiving
        multiple offers. 100% recommend!”
      </p>
    </div>
  );
}
