import React, { memo, useCallback } from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

import { MdOutlineComment, MdPlayArrow } from 'react-icons/md';

interface VideoLabelProps {
  icon?: React.ReactNode;
  label: string;
}

interface VideoImageProps {
  pic: string;
  title: string;
  view: number;
  danmaku: number;
  duration: number;
  onClick?: () => void;
}

function VideoLabel({ icon, label }: VideoLabelProps) {
  return (
    <HStack fontSize="xs" spacing="2px">
      {icon}
      <Text>{label}</Text>
    </HStack>
  );
}

function VideoImage({
  pic,
  title,
  view,
  danmaku,
  duration,
  onClick
}: VideoImageProps) {
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
      onClick={onClick}
    >
      <Image src={pic} alt={title} cursor="pointer" />
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
            <VideoLabel icon={<MdPlayArrow />} label={viewString(view)} />
            <VideoLabel
              icon={<MdOutlineComment />}
              label={viewString(danmaku)}
            />
          </HStack>
          <VideoLabel label={timeString(duration)} />
        </HStack>
      </Box>
    </Box>
  );
}

export default memo(VideoImage);
