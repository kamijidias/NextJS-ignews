import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2022</time>
                        <strong>Creating a Monorepo with Learna & Yarn workspaces</strong>
                        <p>In this guide, you will learn how to create Monorepo to manage multiple packahes with a shared build, test, and realease process</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2022</time>
                        <strong>Creating a Monorepo with Learna & Yarn workspaces</strong>
                        <p>In this guide, you will learn how to create Monorepo to manage multiple packahes with a shared build, test, and realease process</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2022</time>
                        <strong>Creating a Monorepo with Learna & Yarn workspaces</strong>
                        <p>In this guide, you will learn how to create Monorepo to manage multiple packahes with a shared build, test, and realease process</p>
                    </a>
                </div>
            </main>
        </>
    );
}