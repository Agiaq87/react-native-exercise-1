import React, {createContext, useCallback} from 'react';

type State = {
  count: number;
  ids: Array<string>;
};

type Action = {
  type: 'add' | 'remove' | 'reset';
} & Record<string, string>; // Se passo un dato, sara per forza un id, tranne che per il reset

const initialCartState: State = {count: 0, ids: []};

function reducer(oldState: State, action: Action) {
  console.log('CART OLD STATE ', oldState, 'CARTS ACTION REDUCER', action);
  switch (action.type) {
    case 'add':
      return {count: oldState.count + 1, ids: [action.id, ...oldState.ids]};
    case 'remove':
      return {
        count: oldState.count - 1,
        ids: oldState.ids.splice(oldState.ids.indexOf(action.id), 1),
      };
    case 'reset':
      return {
        count: 0,
        ids: (oldState.ids.length = 0),
      };
    default: {
      return {count: oldState.count};
    }
  }
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
  const [state, dispatch] = React.useReducer(reducer, initialCartState);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={{dispatch}}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCartStateHook(): (id: string) => string | undefined {
  const state = useCartState();

  const search = useCallback((id: string): string | undefined => {
    return state.ids.find(e => e === id);
  }, []);

  return search;
}

export function useCartDispatchHook() {
  const {dispatch} = useCartDispatch();

  return dispatch;
}
