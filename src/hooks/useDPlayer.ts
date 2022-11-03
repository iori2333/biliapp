import { useCallback, useMemo, useState } from 'react';
import DPlayer, { DPlayerEvents, DPlayerOptions } from 'dplayer';
import {
  appWindow,
  PhysicalPosition,
  PhysicalSize
} from '@tauri-apps/api/window';

function useDPlayer(): [(options: DPlayerOptions) => DPlayer, DPlayerOptions] {
  const [windowState, setWindowState] = useState({
    size: new PhysicalSize(1280, 720),
    pos: new PhysicalPosition(0, 0)
  });

  const baseOptions: DPlayerOptions = useMemo(
    () => ({
      container: null,
      screenshot: true,
      hotkey: true,
      preload: 'auto',
      autoplay: true,
      subtitle: {
        url: 'https://api.endcloud.cn/ja.vtt',
        type: 'webvtt',
        fontSize: '25px',
        bottom: '5%',
        color: '#ffffff'
      },
      video: {
        url: 'http://qiniu-video.cdn.bcebos.com/test.mp4'
      }
    }),
    []
  );

  const create = useCallback(
    (options: DPlayerOptions) => {
      const dp = new DPlayer(options);

      dp.on('fullscreen' as DPlayerEvents, async () => {
        const size = await appWindow.innerSize();
        const pos = await appWindow.outerPosition();
        setWindowState({ size, pos });
        await appWindow.setFullscreen(true);
      });

      dp.on('fullscreen_cancel' as DPlayerEvents, async () => {
        await appWindow.setFullscreen(false);
        const { size, pos } = windowState;
        await appWindow.setSize(size);
        await appWindow.setPosition(pos);
      });

      return dp;
    },
    [windowState]
  );

  return [create, baseOptions];
}

export default useDPlayer;
