import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/thejuniordev.png" alt="Junior Alves"/>
            <div className="">
                <strong>Junior Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }</p>
            </div>
        </div>
    );
}