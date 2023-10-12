import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  fontSize,
  fontWeight,
  padding,
  color,
  borderWidth,
  borderRadius,
} from '../styles/mainStyles';

export type SearchProps = {
  callable: () => void;
};

export function Search(props: SearchProps): JSX.Element {
  return (
    <View style={styles.sectionSearch}>
      <TouchableOpacity onPress={props.callable}>
        <Text
          style={[
            fontSize.large,
            fontWeight.large,
            padding.medium,
            color.tertiary,
            color.onTertiary,
            borderWidth.low,
            borderRadius.medium,
          ]}>
          Go to Search
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionSearch: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#000',
    borderWidth: 5,
    borderTopLeftRadius: 20,
  },
});
