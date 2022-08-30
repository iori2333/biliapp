import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

export interface PageBaseProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
}

function PageBase({ content, children }: PageBaseProps) {
  return (
    <Box height="100%">
      <Header>{children}</Header>
      <Box
        as="main"
        height="calc(100% - 75px)"
        overflow="overlay"
        __css={{
          '&::-webkit-scrollbar': {
            w: '8px'
          },
          '&::-webkit-scrollbar-track': {
            bg: 'transparent',
            m: '5px 0'
          },
          '&::-webkit-scrollbar-thumb': {
            bg: 'gray.100',
            borderRadius: '4px',
            '&:hover': {
              bg: 'gray.100'
            }
          }
        }}
      >
        {children ? <Outlet /> : content}
      </Box>
    </Box>
  );
}

export default PageBase;
