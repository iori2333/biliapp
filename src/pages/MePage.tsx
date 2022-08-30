import React from 'react';

import PageBase from '@/pages/PageBase';
import ViewBase from './ViewBase';
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
