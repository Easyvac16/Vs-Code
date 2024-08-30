import { useState } from 'react';
import './riddle.css'

export default function Riddle(props) {
    const [inputValue, setInputValue] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleInputChanges = (e) => {
        setInputValue(e.target.value);
    }


    const handleSubmit = () => {
        console.log(inputValue);
    }

    function checkAns() {
        if (!isSubmitted) {

            props.onAnswerSubmitted();

            if (inputValue.toLowerCase() === props.answer.toLowerCase()) {
                setIsCorrect(true);
                setBgColor('lightGreen')
                props.onCorrectAnswer();
            }
            else {
                setBgColor('red');
            }
        }
    }

    return (
        <div class='riddle-container' >
            <h3>{props.riddle}</h3>
            <div class="form-group" >
                <input required="" type="text" id="answer" name="answer" class="form-field" onChange={handleInputChanges} disabled={isSubmitted} />
            </div>
            <button onClick={checkAns} disabled={isSubmitted}>Відправити</button>
            <hr></hr>
        </div>

    );
}
