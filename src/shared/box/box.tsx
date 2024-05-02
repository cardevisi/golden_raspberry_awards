import {createBox} from '@shopify/restyle';
import React from 'react';
import {ThemeProps} from '../../theme';

const BoxBase = createBox<ThemeProps>();
function Box(props: any) {
  return <BoxBase {...props}>{props.children}</BoxBase>;
}

export default Box;
