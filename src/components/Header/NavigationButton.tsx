import React, { memo, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

export interface NavigationButtonProps {
  title: string;
  to: string;
}

function NavigationButton({ title, to }: NavigationButtonProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = useMemo(() => pathname.startsWith(to), [pathname, to]);
  return (
    <Box
      _after={{
        content: '""',
        display: 'block',
        m: '0 auto',
        w: '25%',
        h: '3px',
        transition: 'all 0.2s ease-in-out',
        bg: isActive ? 'bilibili' : 'transparent'
      }}
    >
      <Button
        bg="transparent"
        h="45px"
        color={isActive ? 'bilibili' : undefined}
        _hover={{
          color: 'bilibili',
          bg: 'transparent'
        }}
        _active={{}}
        onClick={() => {
          navigate(to);
        }}
      >
        {title}
      </Button>
    </Box>
  );
}

export default memo(NavigationButton);
