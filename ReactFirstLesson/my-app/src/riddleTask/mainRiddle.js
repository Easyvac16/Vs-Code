import Riddle from "./riddle";
import { useState } from "react";


export default function RiddleMain() {
    const riddles = [
        'Як звати Олега?',
        'Як низивається велика лампочка що світить над нами?',
        'Що важче 1кг заліза чи пір`я?',
        'Так чи ні?',
        'Столиця України?'
    ]

    const answers = [
        'олег',
        'сонце',
        'обидва',
        'так',
        'київ'
    ]

    const [message, setMessage] = useState("");

    const [reset, setReset] = useState(false);

    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [completedAnswers, setCompletedAnswers] = useState(0);

    const handleCorrectAnswer = () => {
        setCorrectAnswers(prevCount => prevCount + 1);
    };

    const handleAnswerSubmitted = () => {
        setCompletedAnswers(prevCount => prevCount + 1);
    };

    const handleReset = () => {
        setCorrectAnswers(0);
        setCompletedAnswers(0);
        setReset(prev => !prev);
    };

    const handleMessageChanges = (newMessage) => {
        setMessage(newMessage);
    }

    return (
        <div key={reset}>
            <Riddle riddle={riddles[0]} answer={answers[0]} onCorrectAnswer={handleCorrectAnswer} onAnswerSubmitted={handleAnswerSubmitted} />
            <Riddle riddle={riddles[1]} answer={answers[1]} onCorrectAnswer={handleCorrectAnswer} onAnswerSubmitted={handleAnswerSubmitted} />
            <Riddle riddle={riddles[2]} answer={answers[2]} onCorrectAnswer={handleCorrectAnswer} onAnswerSubmitted={handleAnswerSubmitted} />
            <Riddle riddle={riddles[3]} answer={answers[3]} onCorrectAnswer={handleCorrectAnswer} onAnswerSubmitted={handleAnswerSubmitted} />
            <Riddle riddle={riddles[4]} answer={answers[4]} onCorrectAnswer={handleCorrectAnswer} onAnswerSubmitted={handleAnswerSubmitted} />

            {completedAnswers === riddles.length && (
                <h3 className='ans'>Правильних відповідей: {correctAnswers}</h3>
            )}

            <button onClick={handleReset}>Перезавантажити тест</button>
        </div>
    );
}