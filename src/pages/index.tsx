import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import HeroImg from "../../public/assets/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma facil</title>
      </Head>
      
      <main className={styles.main}>
        <div className={styles.logoContent}>
            <Image
              className={styles.hero}
              alt="Logo tarefas+"
              src={HeroImg}
            />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas!
        </h1>
      </main>
    </div>
  );
}
