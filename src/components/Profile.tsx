import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={ styles.profileContainer }>
            <img src="https://github.com/leosantosx.png" alt="profile"/>
            <div>
                <strong>Leo Santos</strong>
                
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}