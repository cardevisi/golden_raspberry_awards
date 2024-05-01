import React from 'react';
import {memo} from 'react';
import {TitleProps} from './title.types';
import {createText} from '@shopify/restyle';
import {ThemeProps} from '../../theme';

const Text = createText<ThemeProps>();

const TitleBase = ({name}: TitleProps) => {
  return (
    <Text variant="header" color="white" marginBottom="m" marginTop="l">
      {name}
    </Text>
  );
};

export const Title = memo(TitleBase);
