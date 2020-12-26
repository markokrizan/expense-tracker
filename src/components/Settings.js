import React from 'react'
import LanguageSwitch from './LanguageSwitch'
import useTranslation from '../hooks/useTranslation'

const Settings = () => {
  return (
    <div>
      <h4 className="u-mb-md">{useTranslation('SETTINGS')}</h4>
      <div className="settings-option">
        <span>{useTranslation('LANGUAGE')}</span> <LanguageSwitch/>
      </div>
     
    </div>
  )
}

export default Settings;
