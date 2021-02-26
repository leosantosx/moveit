import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import style from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {

    const { level, closeLevelUpModal } = useContext(ChallengesContext)
    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{ level }</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>
                <button 
                    type="button"
                    onClick={closeLevelUpModal}
                >
                    <img src="icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
    
}