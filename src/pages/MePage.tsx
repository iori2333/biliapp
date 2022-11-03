import React from 'react';

import PageBase from '@/pages/PageBase';
import { TileListSample } from '@/components/TileList';
import { Stack } from '@chakra-ui/react';
import AccountCard from '@/components/AccountCard';

function MePage() {
  return (
    <PageBase
      content={
        <Stack>
          <AccountCard name="Iori" avatar="a.jpg" />
          <TileListSample />
        </Stack>
      }
    />
  );
}

export default MePage;
