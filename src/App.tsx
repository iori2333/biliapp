import React, { useMemo } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useLocation, useRoutes } from 'react-router-dom';

import SideBar from '@/components/SideBar';
import routes from '@/routes';

function App() {
  const element = useRoutes(routes);
  const { pathname } = useLocation();
  const showSide = useMemo(() => !pathname.startsWith('/video'), [pathname]);

  return (
    <Flex flexDirection="row" height="100%">
      {showSide && <SideBar />}
      <Box flex="1">{element}</Box>
    </Flex>
  );
}

export default App;
