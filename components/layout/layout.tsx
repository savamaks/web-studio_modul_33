import { PropsWithChildren } from "react";
import Head from "next/head";
import Navigation from "../navigation";
import styles from './layout.module.css'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Web Studio</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <header className={styles.header}> 
                    <div>Logo</div>
                   <Navigation/>
                </header>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>&copy; 2023 Web studio</footer>
            </div>
        </>
    );
}
