import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [faithMode, setFaithMode] = useState(true);

  return (
    <SettingsContext.Provider value={{ faithMode, setFaithMode }}>
      {children}
    </SettingsContext.Provider>
  );
}
