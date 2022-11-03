import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Flex } from '@chakra-ui/react';

import VideoHeader from '@/components/VideoHeader';
import VideoPlayer from '@/components/VideoPlayer';

function VideoPage() {
  const { bvid } = useParams();

  return (
    <>
      <VideoHeader />
      <Divider />
      <Flex as="main" flexDirection="row" h="100%">
        <Box flex={1}>
          <VideoPlayer />
          Video: {bvid}
        </Box>
        <Divider orientation="vertical" />
        <Box
          className="scrollable-container"
          w="300px"
          height="calc(100% - 45px)"
        >
          <p>Comment</p>
          <p>Comment</p>
          <p>Comment</p>
        </Box>
      </Flex>
    </>
  );
}

export default VideoPage;
