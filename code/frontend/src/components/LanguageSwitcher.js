import React from 'react';
import {useTranslation} from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function LanguageSwitcher() {
  const {i18n} = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.checked ? 'en' : 'pt');
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
      label={i18n.language === 'en' ? 'English' : 'Português'}
    />
  );
}

export default LanguageSwitcher;
