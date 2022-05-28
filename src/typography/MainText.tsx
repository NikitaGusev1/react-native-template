import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface IProps {
  children: string;
  onPress?: () => void;
}

export const MainText = ({ children, onPress }: IProps) => {
  return (
    <BorderlessButton onPress={onPress}>
      <StyledText>{children}</StyledText>
    </BorderlessButton>
  );
};

const StyledText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;
