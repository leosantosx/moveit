import Head from 'next/head'
import styles from '../styles/components/Login.module.css'


export default function() {
    return (
        <>
        <Head>
            <title>Faça login com seu github</title>
        </Head>

        <section className={styles.container}>
            <div>
                <img src="./simble.svg" alt=""/>
            </div>

            <div>

                <img className={styles.simbleImg} src="./logo.svg" alt="Logo"/>
                <h1>Bem-vindo</h1>

                <div className={styles.description}>
                    <img src="./icons/github.svg" alt=""/>
                    <p>Faça login com seu Github para começar</p>
                </div>

                <form>
                    <input placeholder="Digite seu username" type="text"/>
                    <button type="button">
                        <img src="icons/arrow-left.svg" alt="Entrar"/>
                    </button>
                </form>
            </div>
        </section>

        </>
    )
}