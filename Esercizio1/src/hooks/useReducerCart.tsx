import React, {createContext} from 'react';

type State = {
  ids: Array<string>;
};

type Action = {
  type: 'add' | 'remove' | 'reset';
  id: string;
}; // Se passo un dato, sara per forza un id, tranne che per il reset

const initialCartState: State = {ids: []};

function cartReducer(oldState: State, action: Action) {
  console.log('CART OLD STATE ', oldState, 'CARTS ACTION REDUCER', action);
  let returnedValue;
  switch (action.type) {
    case 'add': {
      returnedValue = {
        ids: oldState.ids.includes(action.id)
          ? oldState.ids
          : [action.id, ...oldState.ids],
      };
      break;
    }
    case 'remove': {
      oldState.ids.includes(action.id)
        ? (returnedValue = {
            ids: [...oldState.ids.filter(e => e !== action.id)],
          })
        : (returnedValue = {
            ids: oldState.ids,
          });
      break;
    }
    case 'reset': {
      returnedValue = {
        ids: [],
      };
      break;
    }

    default: {
      throw new Error('Undefined action');
    }
  }

  console.log(returnedValue);
  return returnedValue;
}

const CartContext = createContext<State | null>(null);

const CartDispatchContext = createContext<{
  dispatch: React.Dispatch<Action>;
} | null>(null);

function useCartState() {
  const context = React.useContext(CartContext);
  if (context === null) {
    throw new Error('useCartState must be used within a CartProvider');
  }

  return context;
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === null) {
    throw new Error(
      'useCartDispatch must be used within a CartDispatchProvider',
    );
  }

  return context;
}

export type CartProviderProps = {
  children: any;
};

export function CartProvider({children}: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={{dispatch}}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCartStateHook(): State {
  return useCartState();
}

export function useCartDispatchHook() {
  const {dispatch} = useCartDispatch();

  return dispatch;
}
