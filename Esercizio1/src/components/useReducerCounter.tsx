import React, {createContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// 1 Tipo dello stato
type State = {
  count: number;
};

// 2 Tipo delle azioni
type Action = {
  type: 'increment' | 'decrement' | 'incrementBy' | 'reset';
} & Record<string, any>;

// 3 Stato iniziale
const initialState: State = {count: 0};

// 4 Definizione reducer
function reducer(oldState: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return {count: oldState.count + 1};
    case 'decrement':
      return {count: oldState.count - 1};
    case 'incrementBy':
      return {count: oldState.count + Number.parseInt(action.amount)};
    case 'reset':
      return {count: 0};
    default:
      return {count: oldState.count};
  }
}

// 5.1 definizione context per lo stato
const CounterContext = createContext<State | null>(null);

// 5.1 Definizione context per le azioni (mediante dispatch)
const CounterDispatchContext = createContext<{
  dispatch: React.Dispatch<Action>;
} | null>(null);

// 6 Definiamo due hooks per accedere ai context in amniera comoda
// 6.1 per lo stato
export function useCounterState() {
  const context = React.useContext(CounterContext);
  if (context === null) {
    throw new Error('useContextState must be used within a CounterProvider');
  }

  return context;
}

// 6.2 per le azioni
function useCounterDispatch() {
  const context = React.useContext(CounterDispatchContext);
  if (context === null) {
    throw new Error('useCounterDispatch must be used within a CounterProvider');
  }

  return context;
}

// Componente
export function UseReducerCounter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [textInputState, setTextInputState] = useState<string>('');

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={{dispatch}}>
        <Text style={styles.title}>Use Reducer:</Text>
        <View style={styles.sizeBox} />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <CounterButton type={'decrement'} />
          <CounterValue />
          <CounterButton type={'increment'} />
        </View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{paddingTop: 20, fontSize: 18}}>
              Increment by amount:
            </Text>
            <TextInput
              style={{fontSize: 18}}
              value={textInputState}
              placeholder=" number"
              onChangeText={text => setTextInputState(text)}
              onEndEditing={() => {
                if (validateText(textInputState)) {
                  dispatch({
                    type: 'incrementBy',
                    amount: textInputState,
                  });
                }
              }}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={{padding: 12}}
              onPress={() => dispatch({type: 'reset'})}>
              <Text style={styles.reset}>Reset counter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
}

function CounterValue() {
  const state = useCounterState();

  return <Text style={styles.counterStateText}>Count: {state.count}</Text>;
}

type CounterButtonProps = {
  type: 'increment' | 'decrement' | 'incrementBy';
  amount?: number;
};

function CounterButton({type}: CounterButtonProps) {
  const {dispatch} = useCounterDispatch();

  const handlePress = () => {
    if (dispatch) {
      dispatch({type});
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.counterActionText}>
        {type === 'increment' ? '+' : '-'}
      </Text>
    </TouchableOpacity>
  );
}

function validateText(text: string): boolean {
  const reg = new RegExp('^[0-9]+$');
  return reg.test(text);
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 40,
  },
  sizeBox: {
    height: 5,
  },
  counterText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 16,
  },
  counterStateText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  counterActionText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 16,
  },
  reset: {
    fontSize: 18,
    padding: 8,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
});
