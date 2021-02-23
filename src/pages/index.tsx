import Head from 'next/head'
import GlobalStyle from '../styles/global'
import Container from '../components/Container/Container'
import ExperienceBar from '../components/ExperienceBar/ExperienceBar'

export default function Home() {
  return (
    <>
      <Head>
          <meta name="theme-color" content="#22ff99" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          <title>Moveit</title>
      </Head>
      <Container>
        <GlobalStyle />
        <ExperienceBar />
      </Container>
    </>
  )
}
