import styles from "./layout.module.css";

export function Layout({ chats, messages }) {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messages}</div>
      </div>
    </div>
  );
}
