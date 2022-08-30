import { appWindow, WebviewWindow } from '@tauri-apps/api/window';
import { useCallback } from 'react';

function useWindow() {
  const newWindow = useCallback((bvid: string) => {
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
        await appWindow.emit('web/created-video', `video-window-${bvid}`);
        await webview.setFocus();
      })
      .catch(err => console.log(err));

    return webview;
  }, []);

  return newWindow;
}

export default useWindow;
