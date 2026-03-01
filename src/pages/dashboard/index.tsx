
import styles from "./styles.module.css"
import Head from "next/head";

export default function Dashboard(){
    return(
        <div className={styles.content}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <h1>Pagina Painel</h1>
        </div>
    );
}