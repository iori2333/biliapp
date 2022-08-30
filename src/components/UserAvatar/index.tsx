import React, { useRef } from 'react';
import { Avatar, useDisclosure } from '@chakra-ui/react';

import BaseSideButton from '@/components/SideBar/BaseSideButton';
import LoginDialog from './LoginDialog';
import useAccount from '@/hooks/useAccount';

function UserAvatar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account] = useAccount();
  const finalRef = useRef(null);
  return (
    <>
      <BaseSideButton
        icon={
          <Avatar
            size="sm"
            name={account.userName}
            // src="https://bit.ly/dan-abramov"
          />
        }
        onClick={() => {
          if (!account.hasLoggedIn) {
            onOpen();
          }
        }}
      />
      <LoginDialog finalRef={finalRef} isOpen={isOpen} close={onClose} />
    </>
  );
}

export default UserAvatar;
