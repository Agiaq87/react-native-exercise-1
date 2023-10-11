import React, {Button, Text, View} from 'react-native';
import {useCounter} from '../hooks/useCounter';
import {
  color,
  flexDirection,
  fontSize,
  fontWeight,
  justifyContent,
  padding,
  textAlign,
  width,
} from '../styles/mainStyles';

export function Counter(): JSX.Element {
  const counterState = useCounter();
  return (
    <View style={(flexDirection.row, width.auto, justifyContent.spaceBetween)}>
      <Button onPress={counterState.onIncrement} title="+" />
      <Text
        style={[
          padding.medium,
          fontSize.large,
          color.secondary,
          color.onSecondary,
          textAlign.center,
          fontWeight.bold,
          fontSize.title,
        ]}>
        {counterState.count}
      </Text>
      <Button onPress={counterState.onDecrement} title="-" />
    </View>
  );
}
