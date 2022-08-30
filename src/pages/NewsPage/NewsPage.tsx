import React from 'react';
import { HStack } from '@chakra-ui/react';

import PageBase from '@/pages/PageBase';
import NavigationButton from '@/components/Header/NavigationButton';

function NewsPage() {
  return (
    <PageBase>
      <HStack>
        <NavigationButton title="综合" to="/news/all" />
        <NavigationButton title="视频" to="/news/video" />
      </HStack>
    </PageBase>
  );
}

export default NewsPage;
