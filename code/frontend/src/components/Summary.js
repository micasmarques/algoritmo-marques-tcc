import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

function Summary() {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    const [numSentences, setNumSentences] = useState(1);
    const [summary, setSummary] = useState('');

    const handleClick = () => {
        if (numSentences >= 1) {
            fetch('http://localhost:5000/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text,
                    num_sentences: numSentences
                })
            })
                .then(response => response.json())
                .then(data => {
                    setSummary(data.summary);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert(t('enterValidNumber'));
        }
    };

    const handleClearSummary = () => {
        setSummary('');
    };

    const handleClearText = () => {
        setText('');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                gap: 2
            }}
        >
            <LanguageSwitcher />
            <Tooltip title={t('titleTooltip')}>
                <Typography variant="h4" component="div" gutterBottom>
                    {t('textSummarization')}
                </Typography>
            </Tooltip>
            <Tooltip title={t('inputTooltip')}>
                <TextField
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    label={t('enterText')}
                />
            </Tooltip>
            <Tooltip title={t('numberTooltip')}>
                <TextField
                    variant="outlined"
                    type="number"
                    value={numSentences}
                    onChange={(e) => setNumSentences(e.target.value)}
                    label={t('numberOfSentences')}
                />
            </Tooltip>
            <Tooltip title={t('buttonTooltip')}>
                <Button variant="contained" onClick={handleClick}>
                    {t('summarize')}
                </Button>
            </Tooltip>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    textAlign: 'center'
                }}
            >
                <Typography variant="h6" component="div" gutterBottom>
                    {t('summary')}
                </Typography>
                <Typography variant="body1">{summary}</Typography>
                {summary && (
                    <Button variant="contained" onClick={handleClearSummary}>
                        {t('clearSummary')}
                    </Button>
                )}
            </Box>
            {text && (
                <Button variant="contained" onClick={handleClearText}>
                    {t('clearText')}
                </Button>
            )}
        </Box>
    );
}

export default Summary;
