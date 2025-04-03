import { useGlobal } from "../GlobalContext";
import { useState } from "react";

function TextInput() {
    const { displayTextInput, changeDisplay, addTodo } = useGlobal();
    const [inputText, setInputText] = useState<string>('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        if (inputText.trim()) {
            addTodo(inputText.trim());
            changeDisplay(false);
            setInputText('');
        } else {
            alert('Please enter some text!');
        }
    };

    return (
        <>
            <div className="addItemForm" data-test="addItemForm">
                {displayTextInput ? (
                    <div>
                        <textarea 
                            className="textInputBox"
                            cols={50}
                            rows={5}
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Enter your task..."
                            data-test="textInputBox"/>
                        <button 
                            className="submitButton"
                            onClick={handleSubmit}
                            data-test="submitButton">
                                Submit
                        </button>
                        <button
                            className="cancelButton"
                            onClick={ () => changeDisplay(false) }
                            data-test="cancelButton">
                                Cancel
                        </button>
                    </div>
                ) : <></>}
            </div>
        </>
    )
}

export default TextInput