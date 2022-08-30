import { useCallback, useEffect, useRef } from 'react';

interface DebounceState {
  fn: (...args: unknown[]) => unknown;
  timer: number | null;
}

function useDebounce(
  fn: (...args: unknown[]) => unknown,
  delay = 0.5,
  deps = [] as unknown[]
) {
  const { current } = useRef<DebounceState>({ fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, [fn, current]);

  const debounced = useCallback(() => {
    if (current.timer != null) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn();
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, current, delay]);

  return debounced;
}

export default useDebounce;
