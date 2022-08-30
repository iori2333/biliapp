import { listen } from '@tauri-apps/api/event';
import React, { createContext, useCallback, useEffect } from 'react';
import pubsub from 'pubsub-js';
import { useNavigate } from 'react-router-dom';

export const TauriContext = createContext<{
  onClose: () => void;
}>({
  onClose: () => {}
});

const listeners = await Promise.all([
  listen('tray-quit', () => pubsub.publish('web.tray-quit')),
  listen('tray-settings', () => pubsub.publish('web.tray-settings'))
]);

function TauriProvider({ children }: { children: React.ReactNode }) {
  const onClose = useCallback(() => listeners.forEach(func => func()), []);
  const navigate = useNavigate();
  useEffect(() => {
    const id = pubsub.subscribe('web.tray-settings', () =>
      navigate('/settings')
    );
    return () => {
      pubsub.unsubscribe(id);
    };
  }, [navigate]);

  return (
    <TauriContext.Provider value={{ onClose }}>
      {children}
    </TauriContext.Provider>
  );
}

export default TauriProvider;
