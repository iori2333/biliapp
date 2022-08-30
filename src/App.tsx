import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';

import SideBar from '@/components/SideBar';
import routes from '@/routes';

function App() {
  const element = useRoutes(routes);
  return (
    <Flex flexDirection="row" height="100%">
      <SideBar />
      <Box flex="1">{element}</Box>
    </Flex>
  );
}

export default App;
