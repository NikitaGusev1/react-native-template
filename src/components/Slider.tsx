import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ISliderProps {
  containerStyle?: StyleProp<ViewStyle>;
  lineStyle?: StyleProp<ViewStyle>;
}

export const Slider = ({ containerStyle, lineStyle }: ISliderProps) => {
  return (
    <Container style={containerStyle}>
      <PanGestureHandler>
        <Line style={lineStyle} />
      </PanGestureHandler>
    </Container>
  );
};

const Container = styled.View``;

const Line = styled.View``;
