import React from 'react';

import ViewBase from '@/pages/ViewBase';
import PageBase from '@/pages/PageBase';
import { TileListSample } from '@/components/TileList';

function MePage() {
  return (
    <PageBase
      content={
        <ViewBase>
          <TileListSample />
        </ViewBase>
      }
    />
  );
}

export default MePage;
