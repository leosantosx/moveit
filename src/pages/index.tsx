import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styles from '../styles/pages/Home.module.css'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox'

import { CountdownProvider } from '../contexts/countdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';

import React from 'react';

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}


export default function 
  Home({ level, currentExperience, challengesCompleted }: HomeProps) 
{
  
  return (
    <>
      <Head>
        <title>Home | Move.it</title>
      </Head>

      <ChallengesProvider 
        level={level} 
        currentExperience={currentExperience} 
        challengeCompleted={challengesCompleted}
      >
        
        <div className={styles.container}>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>

      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    name: 'Leo',
    age: 20
  }

  const { 
          level, 
          currentExperience, 
          challengesCompleted 
        } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}