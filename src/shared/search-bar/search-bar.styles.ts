import {StyleSheet} from 'react-native';

const getStyle = (seachButtonClick: boolean) => {
  return StyleSheet.create({
    input: {
      width: seachButtonClick ? '82%' : '100%',
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 5,
      color: 'black',
    },
    button: {
      width: '15%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      color: 'black',
    },
  });
};

export {getStyle};
