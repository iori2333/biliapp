import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import VideoTile from '../VideoTile';

import sampleVideo from './data.json';

interface TileListProps {
  title?: string;
  children?: React.ReactElement[];
}

const videos = [
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo,
  sampleVideo
];

export function TileListSample() {
  return (
    <TileList title="推荐视频">
      {videos.map((video, index) => (
        <VideoTile key={index} video={video} />
      ))}
    </TileList>
  );
}

function TileList({ title, children }: TileListProps) {
  return (
    <VStack align="flex-start">
      {title && (
        <Heading as="h3" size="md" mb="10px">
          {title}
        </Heading>
      )}
      <SimpleGrid columns={4} spacing="20px">
        {children}
      </SimpleGrid>
    </VStack>
  );
}

export default TileList;
