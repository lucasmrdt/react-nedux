import { useState, useEffect, useCallback } from 'react';

import { Store } from 'nedux';
import { Subscription } from 'rxjs';

type DefaultState = { [key: string]: any };

export type Setter<T> = (value: T | ((prevValue: T) => T)) => void;

export const createStoreHook = <
  T extends DefaultState,
  K extends keyof T = keyof T
>(
  store: Store<T, K>,
) => <U extends K>(key: U): [T[U], Setter<T[U]>] => {
  const [value, setValue] = useState(store.get(key));

  const setter = useCallback<Setter<T[U]>>(
    newValue => store.set(key, newValue),
    [key],
  );

  useEffect(() => {
    const subscription = store.subscribe(key, { next: setValue });
    return () => (subscription as Subscription).unsubscribe();
  }, []);

  return [value, setter];
};
