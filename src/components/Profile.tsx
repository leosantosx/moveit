import { useSession } from 'next-auth/client'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){

    const { level } = useContext(ChallengesContext)
    const [ session ] = useSession()

    return(
        <div className={ styles.profileContainer }>
            <img src={session.user.image} alt="profile"/>
            <div>
                <strong>{session.user.name}</strong>
                 
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}