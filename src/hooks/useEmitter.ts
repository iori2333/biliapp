import { useCallback } from 'react';
import { appWindow } from '@tauri-apps/api/window';

export enum EmitType {
  BeforeTerminate = 'web/terminate',
  Created = 'web/created-video'
}

type PayloadMap = {
  'web/terminate': never;
  'web/created-video': string;
};

type ParamsOf<T extends keyof PayloadMap> = Parameters<
  PayloadMap[T] extends never ? () => void : (arg: PayloadMap[T]) => void
>;

function useEmitter() {
  const emitter = useCallback(
    async <T extends EmitType>(event: T, ...args: ParamsOf<T>) => {
      await appWindow.emit(event, ...args);
    },
    []
  );
  return [emitter] as const;
}

export default useEmitter;
