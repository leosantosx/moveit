import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/components/Login.module.css'
import { signIn } from 'next-auth/client'
import axios from 'axios'

export function FormLogin() {

    const [user, setUser] = useState('')
    const [error, setError] = useState('')

    async function handleFormLogin(){
        
        if(!user){
            setError('Digite um nome de usuário')
            return
        }

        try{
            const response = await axios.get(`https://api.github.com/users/${user}`)
            if(response.status == 200){
                setError('')
                signIn('github')
            }
        }catch{
            setError('Ocorreu um erro na requisição')
        }

        
    }

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
                    <input 
                        placeholder="Digite seu username" 
                        type="text"
                        onChange={e => setUser(e.target.value)}
                        />
                    <button 
                        type="button"
                        onClick={handleFormLogin}
                    >
                        <img src="icons/arrow-left.svg" alt="Entrar"/>
                </button>
                </form>

                { error && <p className={styles.messageError}>{error}</p> }
            </div>
            
        </section>

        </>
    )
}