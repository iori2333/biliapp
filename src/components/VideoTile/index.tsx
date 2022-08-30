import React, { memo, useCallback } from 'react';
import { VStack, Link, HStack, Box } from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';
import { getAll } from '@tauri-apps/api/window';
import dayjs from 'dayjs';

import VideoImage from './VideoImage';
import { VideoInfo } from '@/api/models/video';
import useVideoWindow from '@/hooks/useVideoWindow';

interface VideoTileProps {
  video: VideoInfo;
}

function VideoTile({ video }: VideoTileProps) {
  const newWindow = useVideoWindow();

  const timeString = useCallback((time: number) => {
    const timeObj = dayjs.unix(time);
    if (timeObj.diff(dayjs(), 'year') > 0) {
      return timeObj.format('YYYY-M-DD');
    }
    return dayjs.unix(time).format('M-DD');
  }, []);

  const onClickVideo = useCallback(
    (bvid: string) => {
      const window = getAll().find(win => win.label == `video-window-${bvid}`);
      if (window) {
        window.setFocus().catch(err => console.log(err));
      } else {
        newWindow(bvid);
      }
    },
    [newWindow]
  );

  const onClickUser = useCallback(() => {}, []);

  return (
    <VStack height="200px" userSelect="none" align="flex-start">
      <VideoImage
        pic={video.pic}
        title={video.title}
        view={video.stat.view}
        danmaku={video.stat.danmaku}
        duration={video.duration}
        onClick={() => onClickVideo(video.bvid)}
      />
      <Box>
        <Link
          transition="all 0.2s ease-in-out"
          _hover={{
            textDecoration: 'none',
            color: 'bilibili'
          }}
          fontWeight="bold"
          onClick={() => onClickVideo(video.bvid)}
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
          onClick={onClickUser}
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
