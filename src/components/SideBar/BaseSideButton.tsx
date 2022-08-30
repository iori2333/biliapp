import React, { memo } from 'react';
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';

export interface BaseSideButtonProps extends FlexProps {
  title?: string;
  icon?: React.ReactElement;
}

function BaseSideButton({ title, icon, ...props }: BaseSideButtonProps) {
  const overrideProps: FlexProps = {
    as: 'button',
    fontSize: '25px',
    padding: '0.75rem',
    flexDirection: 'column',
    align: 'center',
    justify: 'center',
    userSelect: 'none',
    lineHeight: '1.2',
    transition: 'color 0.5s cubic-bezier(.08,.52,.52,1)',
    fontWeight: 'semibold',
    _hover: { color: 'bilibili' },
    ...props
  };
  return (
    <Flex {...overrideProps}>
      {icon && <Box>{icon}</Box>}
      {title && <Text fontSize="xs">{title}</Text>}
    </Flex>
  );
}

export default memo(BaseSideButton);
