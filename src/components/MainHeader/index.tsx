import React from 'react';
import { HStack, Heading, Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import SearchBox from './SearchBox';
import { TitleBarOperatorWithAlert } from '@/components/TitleBarOperator';

interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children: navigation }: HeaderProps) {
  return (
    <HStack
      as="header"
      data-tauri-drag-region
      height="75px"
      zIndex="100"
      p="15px"
    >
      <Heading
        bgGradient="linear(to-r, #a75fee, #74e0d8)"
        bgClip="text"
        data-tauri-drag-region
        userSelect="none"
        as="h2"
        size="lg"
      >
        BiliApp
      </Heading>
      <HStack data-tauri-drag-region justify="space-between" flex="1">
        <AnimatePresence>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navigation}
          </Box>
        </AnimatePresence>
        <SearchBox />
      </HStack>
      <TitleBarOperatorWithAlert />
    </HStack>
  );
}

export default Header;
