import React from 'react';
import styled from 'styled-components';

import { TabVariant } from '../../molecules/Tabs/types';

type DefaultTabType = {
  active?: boolean;
  hideBorder?: boolean;
  disabled?: boolean;
  variant?: string;
  onClick: () => void;
  totalTabs?: number;
};

type DefaultTabTextType = {
  variant?: string;
};

type DefaultTabIconType = {
  src?: string;
};

const BaseTab = styled.div<DefaultTabType>`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '40%' : '100%')};
`;

const PrimaryTab = styled(BaseTab)<DefaultTabType>`
  min-height: 35px;
  padding: 0 32px;
  border-bottom: 4px solid;
  border-bottom-color: ${({ theme, active, hideBorder }) => {
    if (hideBorder) return theme.colors.fullWhite;

    return active ? theme.colors.fullBlack : theme.colors.fullWhite;
  }};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.fullBlack};
  }
`;

const SecondaryTab = styled(BaseTab)<DefaultTabType>`
  min-height: 28px;
  padding: 0 12px;
  border-bottom: 4px solid;
  width: 100%;
  justify-content: space-between;
  border-bottom-color: ${({ theme, active, hideBorder }) => {
    if (hideBorder) return 'transparent';

    return active ? theme.colors.secondaryNeon05 : 'transparent';
  }};
  opacity: ${({ active }) => active ? '100%' : '85%'};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.secondaryNeon05};
  }
`;

const IconTab = styled(BaseTab)<DefaultTabType>`
  width: ${({ totalTabs }) => (totalTabs ? `${100 / totalTabs}%` : '100%')};
  min-height: 50px;
  border-bottom: 2px solid;
  border-bottom-color: ${({ theme, active, hideBorder }) => {
    if (hideBorder) return theme.colors.offWhite;

    return active ? theme.colors.offBlack : theme.colors.offWhite;
  }};
  background: ${({ theme }) => theme.colors.offWhite};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.offBlack};
  }
`;

const PrimaryTabText = styled.p<DefaultTabTextType>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: 500;
  line-height: 24px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.fullBlack};
`;

const SecondaryTabText = styled.p<DefaultTabTextType>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: 900;
  line-height: 24px;
  margin: 10px auto;
  color: ${({ theme }) => theme.colors.secondaryNeon05};
  text-transform: uppercase;
  text-align: center;
`;

const IconTabText = styled.p<DefaultTabTextType>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: 700;
  line-height: 16px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.offBlack};
`;

export const TabIcon = styled.img<DefaultTabIconType>`
  width: 26px;
  height: 26px;
  margin-right: 12px;
`;

export const TabText: React.FC<React.PropsWithChildren<DefaultTabTextType>> = ({ children, variant, ...props }) => {
  if (variant === TabVariant.Secondary) {
    return <SecondaryTabText {...props}>{children}</SecondaryTabText>;
  }

  if (variant === TabVariant.Icon) {
    return <IconTabText {...props}>{children}</IconTabText>;
  }

  return <PrimaryTabText {...props}>{children}</PrimaryTabText>;
};

export const Tab: React.FC<React.PropsWithChildren<DefaultTabType>> = ({ children, variant, ...props }) => {
  if (variant === TabVariant.Secondary) {
    return (
      <SecondaryTab variant={variant} {...props}>
        {children}
      </SecondaryTab>
    );
  }

  if (variant === TabVariant.Icon) {
    return (
      <IconTab variant={variant} {...props}>
        {children}
      </IconTab>
    );
  }

  return (
    <PrimaryTab variant={variant} {...props}>
      {children}
    </PrimaryTab>
  );
};
