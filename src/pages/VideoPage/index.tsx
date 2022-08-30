import React from 'react';
import VideoHeader from '@/components/VideoHeader';
import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

function VideoPage() {
  const { bvid } = useParams();
  return (
    <>
      <VideoHeader />
      <Flex as="main" flexDirection="row" h="100%">
        <Box flex={1}>Video: {bvid}</Box>
        <Box
          className="scrollable-container"
          w="300px"
          height="calc(100% - 45px)"
        >
          <p>Comment</p>
        </Box>
      </Flex>
    </>
  );
}

export default VideoPage;
