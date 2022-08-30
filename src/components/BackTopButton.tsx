import useDebounce from '@/hooks/useDebounce';
import { IconButton } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';

interface BackTopButtonProps {
  el: React.RefObject<HTMLDivElement>;
}

function BackTopButton({ el }: BackTopButtonProps) {
  const [height, setHeight] = React.useState(el.current?.scrollHeight ?? 0);

  const onScroll = useDebounce(
    () => setHeight(el.current?.scrollTop ?? 0),
    300,
    [el, setHeight]
  );

  useEffect(() => {
    el.current?.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [el, onScroll]);

  return (
    <IconButton
      disabled={height == 0}
      pos="fixed"
      right="20px"
      bottom="20px"
      aria-label="back-top"
      icon={<MdArrowUpward />}
      onClick={() => el.current?.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
}

export default BackTopButton;
