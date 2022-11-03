import React, { memo, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import DPlayer from 'dplayer';

import useDPlayer from '@/hooks/useDPlayer';

function VideoPlayer() {
  const videoRef = useRef<HTMLDivElement>(null);
  const { current } = useRef<{ dp: DPlayer | null }>({ dp: null });
  const [create, options] = useDPlayer();

  useEffect(() => {
    options.container = videoRef.current;
    current.dp = create(options);
  }, [create, options, current]);

  return <Box ref={videoRef} />;
}

export default memo(VideoPlayer);
