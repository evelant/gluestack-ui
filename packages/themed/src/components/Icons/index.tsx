import { createIcon } from '@gluestack-ui/icon';
import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../styled';

const StyledIcon: any = styled(
  AsForwarder,
  {
    color: '$backgroundLight800',
    _dark: {
      color: '$backgroundDark400',
    },
    variants: {
      size: {
        xs: {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        sm: {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        md: {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        lg: {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        xl: {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_icon'],
    componentName: 'Icon',
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export const Icon = createIcon({
  Root: StyledIcon,
});

export * from './Icons';
