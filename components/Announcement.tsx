import styles from "../src/styles/Announcement.module.css";

interface AnnouncementProps {
  text: string;
}

export default function Announcement(props: AnnouncementProps) {
  return (
    <div className={styles.announcement}>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
