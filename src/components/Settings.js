import React from 'react';
import { useAppContext } from '../context/app-context';

const Settings = () => {
  const [state, dispatch] = useAppContext();
  return (
    <input
      type='text'
      name='name'
      id='name'
      placeholder='Change name'
      onChange={(e) =>
        dispatch({
          type: 'updateUser',
          payload: {
            ...state.user,
            name: e.target.value,
          },
        })
      }
      value={state.user.name ?? ''}
    />
  );
};

export default Settings;
