import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Home Page</h1>
      <Image src={"/globe.svg"} width={100} height={30} />
    </div>
  );
}
