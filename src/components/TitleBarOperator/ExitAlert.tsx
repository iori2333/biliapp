import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';
import { appWindow, getAll } from '@tauri-apps/api/window';
import React, { useContext } from 'react';
import { TauriContext } from '../TauriProvider';

export interface ExitAlertProps {
  isOpen: boolean;
  close: () => void;
  closeRef: React.MutableRefObject<null>;
}

function ExitAlert({ isOpen, close, closeRef }: ExitAlertProps) {
  const { onClose } = useContext(TauriContext);

  return (
    <AlertDialog isOpen={isOpen} onClose={close} leastDestructiveRef={closeRef}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Exit Biliapp
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Are you sure to exit Biliapp?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={closeRef} onClick={close}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose();
                if (appWindow.label === 'main') {
                  getAll().forEach(win => win.close());
                } else {
                  appWindow.close();
                }
              }}
              ml={3}
            >
              Exit
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default ExitAlert;
