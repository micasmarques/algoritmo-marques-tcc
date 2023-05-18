import React, { useState } from 'react';
import axios from 'axios';

function InputText() {
    const [text, setText] = useState('');
    const [numSentences, setNumSentences] = useState(1);

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await axios.post('http://localhost:5000/summarize', { text, numSentences });
        console.log(response.data.summary);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Texto:
                <textarea value={text} onChange={e => setText(e.target.value)} />
            </label>
            <label>
                Número de Sentenças:
                <input type="number" value={numSentences} onChange={e => setNumSentences(e.target.value)} />
            </label>
            <button type="submit">Sumarizar</button>
        </form>
    );
}

export default InputText;
