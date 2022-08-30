import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/components/MainHeader';
import { motion } from 'framer-motion';
import BackTopButton from '@/components/BackTopButton';

export interface PageBaseProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
}

function PageBase({ content, children }: PageBaseProps) {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header>{children}</Header>
      <Box
        ref={ref}
        className="scrollable-container"
        pos="relative"
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
        <BackTopButton el={ref} />
      </Box>
    </>
  );
}

export default PageBase;
