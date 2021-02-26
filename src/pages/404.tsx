import style from '../styles/pages/Home.module.css'

export default function () {
    return (
        <section className={style.container}>
            <img className={style.page404} src="https://www.epoka.com/pub/media/theme/noroute/404-error.svg" alt="404"/>
        </section>
    )
}