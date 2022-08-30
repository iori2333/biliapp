import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import BaseSideButton from './BaseSideButton';

function BackButton() {
  const navigate = useNavigate();

  return (
    <BaseSideButton
      bg="transparent"
      fontSize="20px"
      icon={<MdArrowBack />}
      onClick={() => navigate(-1)}
      _hover={{ color: 'bilibili' }}
      _active={{ color: 'bilibili' }}
    />
  );
}

export default BackButton;
