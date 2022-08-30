import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/components/MainHeader';
import { AnimatePresence, motion } from 'framer-motion';

export interface PageBaseProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
}

function PageBase({ content, children }: PageBaseProps) {
  const { pathname } = useLocation();

  return (
    <Box height="100%">
      <Header>{children}</Header>
      <AnimatePresence>
        <Box
          className="scrollable-container"
          p="0.5rem 2rem"
          key={pathname}
          as={motion.main}
          height="calc(100% - 75px)"
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0
          }}
        >
          {children ? <Outlet /> : content}
        </Box>
      </AnimatePresence>
    </Box>
  );
}

export default PageBase;
