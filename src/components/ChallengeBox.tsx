import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)
    console.log(activeChallenge);
    
    
    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe { activeChallenge.amount } xp</header>
                    <main>
                        {activeChallenge.type == 'body' && (
                            <img src="icons/body.svg"/>
                        )}
                        
                        { activeChallenge.type == 'eye' && (
                            <img src="icons/eye.svg"/>  
                        )}
                        
                        <strong>Exercite-se</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={ resetChallenge }
                        >
                            Falhei</button>

                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei</button>
                    </footer>
                </div>
            ): (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    )
}
