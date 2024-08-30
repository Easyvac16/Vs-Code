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
    const [currentIndex, setCurrentIndex] = useState(0); // Додаємо стан для індексу поточної загадки

    const handleCorrectAnswer = () => {
        setCorrectAnswers(prevCount => prevCount + 1);
        handleAnswerSubmitted();
    };

    const handleAnswerSubmitted = () => {
        setCompletedAnswers(prevCount => prevCount + 1);
        setCurrentIndex(prevIndex => prevIndex + 1); // Переходимо до наступної загадки
    };

    const handleReset = () => {
        setCorrectAnswers(0);
        setCompletedAnswers(0);
        setCurrentIndex(0); // Скидаємо індекс до початкового значення
        setReset(prev => !prev);
    };

    const handleMessageChanges = (newMessage) => {
        setMessage(newMessage);
    }

    return (
        <div key={reset}>
            {currentIndex < riddles.length ? (
                <Riddle
                    riddle={riddles[currentIndex]}
                    answer={answers[currentIndex]}
                    onCorrectAnswer={handleCorrectAnswer}
                    onAnswerSubmitted={handleAnswerSubmitted}
                />
            ) : (
                <h3 className='ans'>Правильних відповідей: {correctAnswers}</h3>
            )}

            <button onClick={handleReset}>Перезавантажити тест</button>
        </div>
    );
}
