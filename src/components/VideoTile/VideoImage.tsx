import React, { memo, useCallback } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

import { VideoInfo } from '@/api/models/video';
import { MdOutlineComment, MdPlayArrow } from 'react-icons/md';

interface VideoLabelProps {
  icon?: React.ReactNode;
  label: string;
}

function VideoLabel({ icon, label }: VideoLabelProps) {
  return (
    <HStack fontSize="xs" spacing="2px">
      {icon}
      <Text>{label}</Text>
    </HStack>
  );
}

function VideoImage({ video }: { video: VideoInfo }) {
  const viewString = useCallback((count: number) => {
    if (count > 10000) {
      return `${(count / 10000).toFixed(1)}万`;
    }
    return count.toString();
  }, []);

  const timeString = useCallback((time: number) => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;
    const minuteString = minute < 10 ? `0${minute}` : `${minute}`;
    const secondString = second < 10 ? `0${second}` : `${second}`;
    if (hour > 0) {
      return `${hour}:${minuteString}:${secondString}`;
    }
    return `${minuteString}:${secondString}`;
  }, []);

  return (
    <Box
      pos="relative"
      _hover={{
        boxShadow: '2xl',
        transform: 'scale(1.05)'
      }}
      borderRadius="2xl"
      transition="all 0.2s ease-in-out"
      overflow="hidden"
    >
      <Image src={video.pic} alt={video.title} cursor="pointer" />
      <Box
        bg="linear-gradient(to bottom, #00000000, #000000)"
        pos="absolute"
        bottom="0"
        left="0"
        right="0"
        color="white"
        p="5px 10px"
      >
        <HStack justify="space-between">
          <HStack>
            <VideoLabel
              icon={<MdPlayArrow />}
              label={viewString(video.stat.view)}
            />
            <VideoLabel
              icon={<MdOutlineComment />}
              label={viewString(video.stat.danmaku)}
            />
          </HStack>
          <VideoLabel label={timeString(video.duration)} />
        </HStack>
      </Box>
    </Box>
  );
}

export default memo(VideoImage);
