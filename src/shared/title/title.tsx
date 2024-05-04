import React from 'react';
import {memo} from 'react';
import {TitleProps} from './title.types';
import {Text} from '../text';

const TitleBase = ({name}: TitleProps) => {
  return (
    <Text variant="header" color="white" marginBottom="m" marginTop="l">
      {name}
    </Text>
  );
};

export const Title = memo(TitleBase);
