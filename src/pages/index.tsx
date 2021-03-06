import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenge } from "../components/CompletedChallenge";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div className="">
            <Profile />
            <CompletedChallenge />
            <Countdown />
          </div>
          <div className="">
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
