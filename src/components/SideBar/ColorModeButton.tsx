import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { MdModeNight, MdWbSunny } from 'react-icons/md';

import BaseSideButton from './BaseSideButton';

function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <BaseSideButton
      bg="transparent"
      onClick={toggleColorMode}
      icon={colorMode == 'light' ? <MdWbSunny /> : <MdModeNight />}
    />
  );
}

export default ColorModeButton;
