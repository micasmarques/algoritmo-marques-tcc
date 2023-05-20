import React, {useState} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {useTranslation} from 'react-i18next';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeSwitcher from "./ThemeSwitcher";

function Summary() {
    const {t} = useTranslation();
    const [text, setText] = useState('');
    const [numSentences, setNumSentences] = useState(1);
    const [summary, setSummary] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            ...(darkMode ? {
                primary: {
                    main: '#ffffff',
                },
                secondary: {
                    main: '#ffffff',
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#ffffff',
                },
            } : {
                primary: {
                    main: '#000000',
                },
                secondary: {
                    main: '#000000',
                },
                text: {
                    primary: '#000000',
                    secondary: '#000000',
                },
            })
        },
    });


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
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    gap: 3,
                    p: 2,
                    bgcolor: theme.palette.background.default
                }}
            >
                <Tooltip title={t('titleTooltip')}>
                    <Typography variant="h4" component="div" gutterBottom sx={{color: theme.palette.text.primary}}>
                        {t('textSummarization')}
                    </Typography>
                </Tooltip>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        gap: 2,
                        width: '80%',
                        flexWrap: 'wrap'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: {xs: '100%', sm: '45%'},
                            mt: 2,
                        }}
                    >
                        <Tooltip title={t('inputTooltip')}>
                            <TextField
                                variant="outlined"
                                multiline
                                fullWidth
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                label={t('enterText')}
                                maxRows={10}
                                sx={{
                                    overflow: 'auto',
                                    color: theme.palette.text.primary,
                                    marginBottom: '5px' // Use a medida que seja adequada para o seu layout
                                }}
                            />
                        </Tooltip>
                        <Tooltip title={t('numberTooltip')}>
                            <TextField
                                variant="outlined"
                                type="number"
                                value={numSentences}
                                onChange={(e) => setNumSentences(Number(e.target.value))}
                                label={t('numberOfSentences')}
                                sx={{color: theme.palette.text.primary}}
                            />
                        </Tooltip>
                        {text && (
                            <Button variant="contained" onClick={handleClearText}>
                                {t('resetText')}
                            </Button>
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        <Tooltip title={t('buttonTooltip')}>
                            <Button variant="contained" onClick={handleClick}>
                                {t('summarize')}
                            </Button>
                        </Tooltip>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: {xs: '100%', sm: '45%'},
                            mt: 2,
                            padding: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h6" component="div" gutterBottom sx={{color: theme.palette.text.primary}}>
                            {t('summary')}
                        </Typography>
                        <Box sx={{overflow: 'auto', maxHeight: '180px'}}>
                            <Typography variant="body1" component="pre"
                                        sx={{
                                            whiteSpace: 'pre-wrap',
                                            textAlign: 'justify',
                                            color: theme.palette.text.primary
                                        }}>{summary}</Typography>
                        </Box>
                        {summary && (
                            <Button variant="contained" onClick={handleClearSummary}>
                                {t('resetSummary')}
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Summary;
