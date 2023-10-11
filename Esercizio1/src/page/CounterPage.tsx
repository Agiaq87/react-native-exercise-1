import React, {Text, View} from 'react-native';
import {
  color,
  fontSize,
  height,
  padding,
  textAlign,
} from '../styles/mainStyles';
import {Counter} from '../components/Counter';
import {Header} from 'react-native/Libraries/NewAppScreen';

export function CounterPage(): JSX.Element {
  return (
    <View style={[color.tertiary, height.auto]}>
      <Header />
      <Text
        style={[
          padding.large,
          fontSize.title,
          textAlign.center,
          color.primary,
          color.onPrimary,
        ]}>
        Counter Page
      </Text>
      <Counter />
    </View>
  );
}
