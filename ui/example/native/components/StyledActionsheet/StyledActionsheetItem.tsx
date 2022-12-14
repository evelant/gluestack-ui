import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        bg: '$amber.400',
        p: '$4',
      },
    },
  },
  {}
);
