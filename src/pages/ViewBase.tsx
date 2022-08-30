import React from 'react';
import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface ViewBaseProps {
  children?: React.ReactNode;
}

function ViewBase({ children }: ViewBaseProps) {
  const key = useLocation().pathname;

  return (
    <AnimatePresence>
      <Box
        p="0.5rem 2rem"
        key={key}
        layout
        as={motion.div}
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
        {children}
      </Box>
    </AnimatePresence>
  );
}

export default ViewBase;
