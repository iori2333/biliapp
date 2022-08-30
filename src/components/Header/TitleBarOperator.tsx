import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MdClose,
  MdMinimize,
  MdCloseFullscreen,
  MdFullscreen
} from 'react-icons/md';
import { HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { appWindow } from '@tauri-apps/api/window';
import pubsub from 'pubsub-js';

import ExitAlert from './ExitAlert';

function TitleBarOperator() {
  const [maximized, setMaximized] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const onMaximize = useCallback(() => {
    appWindow
      .isMaximized()
      .then(res => {
        if (res) {
          appWindow.unmaximize();
        } else {
          appWindow.maximize();
        }
        setMaximized(!res);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const id = pubsub.subscribe('web.tray-quit', () => onOpen());
    return () => {
      pubsub.unsubscribe(id);
    };
  }, [onOpen]);

  useEffect(() => {
    appWindow.isMaximized().then(
      res => setMaximized(res),
      err => console.error(err)
    );
  }, []);

  return (
    <>
      <HStack data-tauri-drag-region className="titlebar">
        <IconButton
          bg="transparent"
          aria-label="minimize"
          icon={<MdMinimize />}
          onClick={() => appWindow.minimize()}
        />
        <IconButton
          bg="transparent"
          aria-label="maximize"
          icon={maximized ? <MdCloseFullscreen /> : <MdFullscreen />}
          onClick={onMaximize}
        />
        <IconButton
          bg="transparent"
          aria-label="close"
          icon={<MdClose />}
          onClick={onOpen}
          _hover={{ bg: '#c92020', color: 'white' }}
          _active={{ bg: '#961414', color: 'white' }}
        />
      </HStack>
      <ExitAlert isOpen={isOpen} close={onClose} closeRef={cancelRef} />
    </>
  );
}

export default TitleBarOperator;
