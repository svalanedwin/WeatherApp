declare module 'redux-mock-store' {
  import { Middleware } from 'redux';

  export interface MockStore<S = any> {
    getState(): S;
    dispatch: jest.Mock;
    subscribe(listener: () => void): () => void;
  }

  export interface MockStoreCreator<S = any> {
    (initialState?: S, middlewares?: Middleware[]): MockStore<S>;
    getState(): S;
    dispatch: jest.Mock;
    subscribe(listener: () => void): () => void;
  }

  export default function configureStore<S = any>(middlewares?: Middleware[]): MockStoreCreator<S>;
}
