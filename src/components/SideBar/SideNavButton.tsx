import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useBaseUrl from '@/hooks/useBaseUrl';
import { KeyRequired } from '@/utils';

import BaseSideButton, { BaseSideButtonProps } from './BaseSideButton';

type SideNavButtonProps = KeyRequired<BaseSideButtonProps, 'icon'> & {
  to: string;
};

function SideNavButton({ title, to, icon }: SideNavButtonProps) {
  const [, baseUrl] = useBaseUrl();
  const isActive = useMemo(() => to.startsWith(baseUrl), [baseUrl, to]);
  const nav = useNavigate();
  const navigate = useCallback(() => {
    if (!isActive) {
      nav(to);
    }
  }, [isActive, nav, to]);

  return (
    <BaseSideButton
      color={isActive ? 'bilibili' : undefined}
      title={title}
      icon={icon}
      onClick={navigate}
    />
  );
}

export default SideNavButton;
