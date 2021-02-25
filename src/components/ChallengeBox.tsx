import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const contextData = useContext(ChallengeContext);
    const hasActiveChallenge = true;

    console.log(contextData);

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="body"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça um supino de quatro</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeBoxFailButton}>Falhei</button>
                        <button type="button" className={styles.challengeBoxSuccessButton}>Completei</button>
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