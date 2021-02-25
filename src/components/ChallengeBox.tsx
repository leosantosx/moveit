import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/countdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)
    
    function handleChallengeSuceeded(){
       completedChallenge()
       resetCountdown()
    }

    function handleChallengeFailed(){
       resetChallenge()
       resetCountdown()
    }
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
                            onClick={ handleChallengeFailed }
                        >
                            Falhei</button>

                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={ handleChallengeSuceeded }
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
