import { AppLayout } from '../layouts/AppLayout';
import { MainText } from '../typography/MainText';
import React from 'react';

export const HomeScreen = () => {
  return (
    <AppLayout withPadding={true} disableScroll={false}>
      <MainText>template</MainText>
    </AppLayout>
  );
};
