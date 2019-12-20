import { useState, useEffect, useCallback, useRef } from 'react';

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
  const subscription = useRef<Subscription | null>(null);
  const [value, setValue] = useState(store.get(key));

  const setter = useCallback<Setter<T[U]>>(
    newValue => store.set(key, newValue),
    [key],
  );

  useEffect(() => {
    subscription.current = store.subscribe(key, setValue, {
      withInitialValue: true,
    }) as Subscription;
  }, []);

  useEffect(() => () => subscription.current?.unsubscribe());

  return [value, setter];
};
