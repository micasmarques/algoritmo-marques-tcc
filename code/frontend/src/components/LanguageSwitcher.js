import React from 'react';
import {useTranslation} from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useTheme} from '@mui/material/styles';

function LanguageSwitcher() {
    const {i18n} = useTranslation();
    const theme = useTheme();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.checked ? 'en' : 'pt')
            .then(() => {
                console.log("Language changed successfully");
            })
            .catch((error) => {
                console.error("Error changing language: ", error);
            });
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={i18n.language === 'en'}
                    onChange={handleLanguageChange}
                    name="languageSwitch"
                    color="default"
                />
            }
            label={<span
                style={{color: theme.palette.text.primary}}>{i18n.language === 'en' ? 'English' : 'Português'}</span>}
        />
    );
}

export default LanguageSwitcher;
