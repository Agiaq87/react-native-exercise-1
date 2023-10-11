import React, {Button, Text, View} from 'react-native';
import {Row} from './Row';
import {Col} from './Col';
import {useCounter} from '../hooks/useCounter';
import {fontSize, padding} from '../styles/mainStyles';

export function Counter(): JSX.Element {
  const counterState = useCounter();
  return (
    <View>
      <Row>
        <Col numRows={3}>
          <Button onPress={counterState.onIncrement} title="+" />
          <Text style={[padding.medium, fontSize.large]}>
            {counterState.count}
          </Text>
          <Button onPress={counterState.onDecrement} title="-" />
        </Col>
      </Row>
    </View>
  );
}
