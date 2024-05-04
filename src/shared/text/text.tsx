import {createText} from '@shopify/restyle';
import React from 'react';
import {ThemeProps} from '../../theme';

const TextBase = createText<ThemeProps>();
function Text(props: any) {
  return <TextBase {...props}>{props.children}</TextBase>;
}

export default Text;
