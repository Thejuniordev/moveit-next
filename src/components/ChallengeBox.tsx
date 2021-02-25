import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const { resetCountdown } = useContext(CountdownContext);
 
    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="body"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeBoxFailButton} onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" className={styles.challengeBoxSuccessButton} onClick={handleChallengeSucceded}>Completei</button>
                    </footer>
                </div>
            ) : (
                <>
                <div className={styles.challengeBoxNotActive}>
                    <strong>Inicie um ciclo para receber os desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avançe de level completando os desafios
                    </p>
                </div>
                </>
            )}
        </div>
    );
}