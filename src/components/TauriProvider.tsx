import { listen } from '@tauri-apps/api/event';
import React, { createContext, useCallback } from 'react';
import pubsub from 'pubsub-js';
import { useNavigate } from 'react-router-dom';
import useSubscription from '@/hooks/useSubscription';

export const TauriContext = createContext<{
  onClose: () => void;
}>({
  onClose: () => {}
});

async function registerTauriEvent(...event: string[]) {
  return await Promise.all(
    event.map(it => listen(it, () => pubsub.publish('web.' + it)))
  );
}

const listeners = await registerTauriEvent('tray-quit', 'tray-settings');

function TauriProvider({ children }: { children: React.ReactNode }) {
  const onClose = useCallback(() => listeners.forEach(func => func()), []);
  const navigate = useNavigate();

  useSubscription('tray-settings', () => navigate('/settings'), [navigate]);

  return (
    <TauriContext.Provider value={{ onClose }}>
      {children}
    </TauriContext.Provider>
  );
}

export default TauriProvider;
