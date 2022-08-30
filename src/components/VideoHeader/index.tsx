import React, { useCallback, useState } from 'react';
import { Text, HStack, IconButton } from '@chakra-ui/react';
import TitleBarOperator from '../TitleBarOperator';
import { MdPushPin, MdSkipNext, MdSkipPrevious } from 'react-icons/md';

import './index.scss';
import { appWindow } from '@tauri-apps/api/window';
import PlaylistButton from './PlaylistButton';

function VideoHeader() {
  const [pinned, setPinned] = useState(false);

  const onPin = useCallback((on: boolean) => {
    setPinned(on);
    appWindow.setAlwaysOnTop(on).catch(err => console.log(err));
  }, []);

  return (
    <HStack
      as="header"
      data-tauri-drag-region
      h="45px"
      justify="space-between"
      p="0 15px"
    >
      <HStack>
        <IconButton
          bg="transparent"
          aria-label="previous"
          icon={<MdSkipPrevious />}
        />
        <IconButton
          bg="transparent"
          aria-label="previous"
          icon={<MdSkipNext />}
        />
        <Text>Video</Text>
      </HStack>
      <HStack>
        <PlaylistButton />
        <IconButton
          className={'pin-button ' + (pinned ? 'pinned' : '')}
          aria-label="pinned"
          bg="transparent"
          onClick={() => onPin(!pinned)}
          icon={<MdPushPin />}
        />
        <TitleBarOperator />
      </HStack>
    </HStack>
  );
}

export default VideoHeader;
