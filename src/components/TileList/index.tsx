import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import VideoTile from '../VideoTile';

import sampleVideo from './data.json';

interface TileListProps {
  title?: string;
  children?: React.ReactElement[];
}

const videos = [
  { ...sampleVideo, bvid: '1' },
  { ...sampleVideo, bvid: '2' },
  { ...sampleVideo, bvid: '3' },
  { ...sampleVideo, bvid: '4' },
  { ...sampleVideo, bvid: '5' },
  { ...sampleVideo, bvid: '6' },
  { ...sampleVideo, bvid: '7' },
  { ...sampleVideo, bvid: '8' },
  { ...sampleVideo, bvid: '9' },
  { ...sampleVideo, bvid: '10' },
  { ...sampleVideo, bvid: '11' }
];

export function TileListSample() {
  return (
    <TileList title="推荐视频">
      {videos.map(video => (
        <VideoTile key={video.bvid} video={video} />
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
      <SimpleGrid minChildWidth="240px" spacing="20px">
        {children}
      </SimpleGrid>
    </VStack>
  );
}

export default TileList;
