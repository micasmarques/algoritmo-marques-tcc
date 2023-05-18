import React, {useState} from 'react';
import axios from 'axios';

function FileUploader() {
    const [file, setFile] = useState(null);
    const [numSentences, setNumSentences] = useState(1);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    params: {
                        num_sentences: numSentences,
                    },
                });

                console.log(response.data.summary);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange}/>
            <input type="number" value={numSentences} onChange={(e) => setNumSentences(e.target.value)}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUploader;
