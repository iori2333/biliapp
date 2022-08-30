import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/MainHeader';

export interface PageBaseProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
}

function PageBase({ content, children }: PageBaseProps) {
  return (
    <Box height="100%">
      <Header>{children}</Header>
      <Box
        className="scrollable-container"
        as="main"
        height="calc(100% - 75px)"
      >
        {children ? <Outlet /> : content}
      </Box>
    </Box>
  );
}

export default PageBase;
