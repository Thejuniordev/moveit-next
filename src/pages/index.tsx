import { CompletedChallenge } from "../components/CompletedChallenge";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className="">
          <Profile />
          <CompletedChallenge />
        </div>
        <div className=""></div>
      </section>
    </div>
  )
}
