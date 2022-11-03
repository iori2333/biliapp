import React from 'react';
import { Button, ButtonGroup, Heading, HStack, Text } from '@chakra-ui/react';
import UserAvatar from '../UserAvatar';

interface AccountCardProps {
  name: string;
  avatar: string;
}

interface TagProps {
  title: string;
  count: number;
  onClick?: () => void;
}

function Tag({ title, count, onClick }: TagProps) {
  return (
    <Button onClick={onClick} flexDirection="column" p="10px">
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text as="span" size="xs">
        {count}
      </Text>
    </Button>
  );
}

function AccountCard({ name, avatar }: AccountCardProps) {
  return (
    <HStack justify="space-between">
      <HStack>
        <UserAvatar />
        <Text>{name}</Text>
      </HStack>

      <ButtonGroup>
        <Tag title="测试" count={123} />
        <Tag title="测试" count={123} />
        <Tag title="测试" count={123} />
      </ButtonGroup>
    </HStack>
  );
}

export default AccountCard;
