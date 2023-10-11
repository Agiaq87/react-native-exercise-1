import React, {StyleSheet, View} from 'react-native';

export const Row = ({children}) => <View style={styles.row}>{children}</View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
});
