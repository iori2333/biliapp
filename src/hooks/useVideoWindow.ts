import { WebviewWindow } from '@tauri-apps/api/window';
import { useCallback } from 'react';
import useEmitter, { EmitType } from './useEmitter';

function useWindow() {
  const [emit] = useEmitter();
  const newWindow = useCallback(
    (bvid: string) => {
      const webview = new WebviewWindow(`video-window-${bvid}`, {
        title: 'Video',
        url: `/video/${bvid}`,
        width: 1080,
        height: 720,
        resizable: true,
        decorations: false
      });

      webview
        .once('tauri://created', async () => {
          await emit(EmitType.Created, `video-window-${bvid}`);
          await webview.setFocus();
        })
        .catch(err => console.log(err));

      return webview;
    },
    [emit]
  );

  return newWindow;
}

export default useWindow;
