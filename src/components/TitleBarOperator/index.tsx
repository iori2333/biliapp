import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MdClose,
  MdMinimize,
  MdCloseFullscreen,
  MdFullscreen
} from 'react-icons/md';
import { ButtonGroup, IconButton, useDisclosure } from '@chakra-ui/react';
import { appWindow } from '@tauri-apps/api/window';

import useEvent from '@/hooks/useEvent';
import ExitAlert from './ExitAlert';

function TitleBarOperator({ onCloseClick }: { onCloseClick?: () => void }) {
  const [maximized, setMaximized] = useState(false);

  const defaultOnClose = useCallback(() => {
    appWindow.close();
  }, []);

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
    appWindow.isMaximized().then(
      res => setMaximized(res),
      err => console.error(err)
    );
  }, []);

  return (
    <ButtonGroup data-tauri-drag-region>
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
        onClick={onCloseClick ?? defaultOnClose}
        _hover={{ bg: '#c92020', color: 'white' }}
        _active={{ bg: '#961414', color: 'white' }}
      />
    </ButtonGroup>
  );
}

export function TitleBarOperatorWithAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  useEvent('tray-quit', () => onOpen());

  return (
    <>
      <TitleBarOperator onCloseClick={onOpen} />
      <ExitAlert isOpen={isOpen} close={onClose} closeRef={cancelRef} />
    </>
  );
}

export default TitleBarOperator;
