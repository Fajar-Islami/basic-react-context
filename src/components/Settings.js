import React from 'react';
import { useAppContext } from '../context/app-context';

const Settings = () => {
  const context = useAppContext();
  return (
    <input
      type='text'
      name='name'
      id='name'
      placeholder='Change name'
      onChange={(e) =>
        context.setUser({
          ...context.user,
          name: e.target.value,
        })
      }
      value={context.user.name ?? ''}
    />
  );
};

export default Settings;
