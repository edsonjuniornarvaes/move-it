import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time, setTime] = useState(25 * 60); //define quantidade de minutos
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60); //arredonda o valor para baixo, calcula o tempo
    const secunds = time % 60; //resulta no resto da divisão exibindo os segundos

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    //torna os minutos em string,se não houver 2 casas inserir zero,separa os minutos em array (esquerdo e direito)
    const [secundLeft, secundRight] = String(secunds).padStart(2,'0').split('');
    //torna os segundos em string,se não houver 2 casas inserir zero,separa os segundos em array (esquerdo e direito)

    function StartCountdown(){
        setActive(true);
    }

    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>
            <button type="button" className={styles.countdownButton} onClick={StartCountdown}>
                Iniciar um ciclo
            </button>
        </div>
    )
}
