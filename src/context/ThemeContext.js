import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, { color: 'var(--color-primary)' });

  const changeColor = color => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
