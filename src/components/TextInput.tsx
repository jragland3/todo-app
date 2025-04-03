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
            <div className="addItemForm">
                {displayTextInput ? (
                    <div>
                        <textarea 
                            className="textInput"
                            cols={50}
                            rows={5}
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Enter your task..."/>
                        <button className="submitButton" onClick={handleSubmit}>Submit</button>
                        <button className="cancelButton" onClick={ () => changeDisplay(false) }>Cancel</button>
                    </div>
                ) : <></>}
            </div>
        </>
    )
}

export default TextInput