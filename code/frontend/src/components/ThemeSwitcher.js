import React from 'react';
import {useTranslation} from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useTheme} from '@mui/material/styles';

function ThemeSwitcher({darkMode, setDarkMode}) {
    const {t} = useTranslation();
    const theme = useTheme();

    const handleThemeChange = (event) => {
        setDarkMode(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={darkMode}
                    onChange={handleThemeChange}
                    name="themeSwitch"
                    color="default"
                />
            }
            label={<span style={{color: theme.palette.text.primary}}>{darkMode ? t('darkMode') : t('lightMode')}</span>}
        />
    );
}

export default ThemeSwitcher;
