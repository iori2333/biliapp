import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Checkbox,
  Text,
  VStack
} from '@chakra-ui/react';

import useOptions from '@/hooks/useOptions';

export interface ExitAlertProps {
  isOpen: boolean;
  closeAlert: () => void;
  onClose: () => void;
  closeRef: React.MutableRefObject<null>;
}

function ExitAlert({ isOpen, onClose, closeAlert, closeRef }: ExitAlertProps) {
  const [state, actions, dispatch] = useOptions();
  const [checked, setChecked] = useState(() => !state.exitDialog);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={closeAlert}
      leastDestructiveRef={closeRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            退出
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <VStack align="flex-start">
              <Text>是否确定要退出 Biliapp?</Text>
              <Checkbox
                defaultChecked={checked}
                onChange={e => setChecked(e.target.checked)}
              >
                下次不再提醒
              </Checkbox>
            </VStack>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={closeRef} onClick={closeAlert}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                dispatch(actions.setExitDialog(!checked));
                onClose();
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
