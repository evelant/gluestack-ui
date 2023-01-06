import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7 22a5 5 0 0 1-2-4" />
      <Path d="M7 16.93c.96.43 1.96.74 2.99.91" />
      <Path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
      <Path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <Path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z" />
    </StyledSvg>
  );
};
Icon.displayName = 'LassoSelect';
export const LassoSelect = React.memo(Icon);
