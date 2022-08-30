import React, { useState } from 'react';
import {
  InputGroup,
  InputRightElement,
  Input,
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverAnchor,
  InputProps,
  Box
} from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

function SearchBox({ onClick, onBlur, ...props }: InputProps) {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Popover isOpen={open} autoFocus={false}>
        <PopoverAnchor>
          <InputGroup w="300px">
            <InputRightElement pointerEvents="none">
              <MdSearch />
            </InputRightElement>
            <Input
              variant="filled"
              placeholder="搜索你感兴趣的视频"
              onClick={event => {
                onClick?.(event);
                setOpen(true);
              }}
              onBlur={event => {
                onBlur?.(event);
                setOpen(false);
              }}
              {...props}
            />
          </InputGroup>
        </PopoverAnchor>
        <PopoverContent>
          <PopoverHeader>热搜</PopoverHeader>
          <PopoverBody>哼哼，啊啊啊啊啊啊！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default SearchBox;
