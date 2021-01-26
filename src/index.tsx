import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { backdropReducer, cartReducer, categoryReducer } from './store'
import './index.css';
import App from './App';

const queryClient = new QueryClient()

const rootReducer = combineReducers({
  backdrop: backdropReducer,
  cart: cartReducer,
  category: categoryReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

