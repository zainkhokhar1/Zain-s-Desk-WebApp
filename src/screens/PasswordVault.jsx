
import React from 'react';
import PasswordVaultContainer from '../components/home/PasswordVaultContainer';
import Popup from '../components/password-vault/Popup';

const PasswordVault = () => {
  return (
    <div>
      <PasswordVaultContainer />
      <Popup />
    </div>
  )
}

export default PasswordVault;
