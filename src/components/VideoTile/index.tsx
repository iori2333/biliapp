import React, { memo, useCallback } from 'react';
import { VStack, Link, HStack, Box } from '@chakra-ui/react';

// import testData from './data.json';
import VideoImage from './VideoImage';
import { MdAccountCircle } from 'react-icons/md';
import dayjs from 'dayjs';
import { VideoInfo } from '@/api/models/video';

interface VideoTileProps {
  video: VideoInfo;
}

function VideoTile({ video }: VideoTileProps) {
  const timeString = useCallback((time: number) => {
    const timeObj = dayjs.unix(time);
    if (timeObj.diff(dayjs(), 'year') > 0) {
      return timeObj.format('YYYY-M-DD');
    }
    return dayjs.unix(time).format('M-DD');
  }, []);

  return (
    <VStack height="200px" userSelect="none" align="flex-start">
      <VideoImage video={video} />
      <Box>
        <Link
          transition="all 0.2s ease-in-out"
          _hover={{
            textDecoration: 'none',
            color: 'bilibili'
          }}
          fontWeight="bold"
        >
          {video.title}
        </Link>
        <HStack
          as="span"
          cursor="pointer"
          fontSize="xs"
          color="gray.300"
          spacing="2px"
          transition="all 0.2s ease-in-out"
          _hover={{
            textDecoration: 'none',
            color: 'bilibili'
          }}
        >
          <MdAccountCircle />
          <Box>
            {video.owner.name} · {timeString(video.ctime)}
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}

export default memo(VideoTile);
