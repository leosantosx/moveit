import { useContext } from 'react'
import { CountdownContext } from '../contexts/countdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){

    const { 
        minutes, 
        seconds, 
        isActive, 
        hasFinished, 
        resetCountdown, 
        startCountdown
    } = useContext(CountdownContext)

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('')

    return(
        <div>
            <div className={ styles.countdownContainer }>
            <div>
                <span>{ minuteLeft }</span>
                <span>{ minuteRight }</span>
            </div>
            <span>:</span>
            <div>
                <span>{ secondLeft }</span>
                <span>{ secondRight }</span>
            </div>
        </div>

        { hasFinished ? (
            <button 
                disabled
                className={ styles.countdownButton }>
                Ciclo encerrado
                <img src="icons/check-cicle.svg" alt="icon check" />
            </button>
        ): (
            <>
                { isActive ? (
                    <button 
                    type='button'
                    onClick={ resetCountdown }
                    className={ `${styles.countdownButton} ${styles.countdownButtonActive}` }>
                    Abandonar ciclo
                    <img src="icons/x.svg" alt="Abandonar" />
                    </button>
                ): (
                    <button 
                        type='button'
                        onClick={ startCountdown }
                        className={ styles.countdownButton }>
                        Iniciar ciclo
                        <img src="icons/play-arrow.svg" alt="play" />
                    </button>
                )}
            </>
        )}

        
        </div>
    )
}