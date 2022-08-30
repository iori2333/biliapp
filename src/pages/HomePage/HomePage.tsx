import React from 'react';
import { HStack } from '@chakra-ui/react';

import PageBase from '@/pages/PageBase';
import NavigationButton from '@/components/Header/NavigationButton';

function HomePage() {
  return (
    <PageBase>
      <HStack>
        <NavigationButton title="直播" to="/home/live" />
        <NavigationButton title="推荐" to="/home/recommend" />
        <NavigationButton title="热门" to="/home/hot" />
        <NavigationButton title="番剧" to="/home/bangumi" />
        <NavigationButton title="电影" to="/home/movie" />
      </HStack>
    </PageBase>
  );
}

export default HomePage;
