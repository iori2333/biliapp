import React, { useRef } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from '@chakra-ui/react';

interface LoginDialogProps {
  finalRef: React.MutableRefObject<null>;
  isOpen: boolean;
  close: () => void;
}

function LoginDialog({ finalRef, isOpen, close }: LoginDialogProps) {
  const initialRef = useRef(null);
  const nextRef = useRef<HTMLInputElement>(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={close}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login to Bilibili</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Account</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Your Bilibili ID / Phone Number"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  nextRef.current?.focus();
                }
              }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input ref={nextRef} type="password" placeholder="Your password" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Login
          </Button>
          <Button onClick={close}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginDialog;
