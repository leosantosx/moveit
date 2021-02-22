import React from 'react'
import GlobalStyle from './styles/global'
import Container from './components/Container/Container'
import ExpererienceBar from './components/ExperienceBar/ExperienceBar'

const App: React.FC = () =>  {
  return (
    <Container>
      <GlobalStyle />
      <ExpererienceBar />
    </Container>
  )
}

export default App
