import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import {
  MdAccountCircle,
  MdHome,
  MdNotifications,
  MdSettings
} from 'react-icons/md';

import SideNavButton from './SideNavButton';
import BackButton from './BackButton';
import ColorModeButton from './ColorModeButton';
import UserAvatar from '../UserAvatar';

function SideBar() {
  return (
    <Flex
      data-tauri-drag-region
      w="65px"
      bgGradient="linear(to-t, #a75fee, #74e0d8)"
      flexDirection="column"
      justify="space-between"
    >
      <VStack flex="0" padding="5px">
        <BackButton />
        <SideNavButton title="主页" to="/home/recommend" icon={<MdHome />} />
        <SideNavButton title="动态" to="/news/all" icon={<MdNotifications />} />
        <SideNavButton title="我" to="/me" icon={<MdAccountCircle />} />
      </VStack>
      <VStack>
        <UserAvatar />
        <SideNavButton to="/settings" icon={<MdSettings />} />
        <ColorModeButton />
      </VStack>
    </Flex>
  );
}

export default SideBar;
