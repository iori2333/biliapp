import pubsub from 'pubsub-js';
import React, { useEffect } from 'react';

function useEvent<T>(
  event: string,
  callback: (message: string, data?: T) => void,
  deps?: React.DependencyList
) {
  useEffect(() => {
    const id = pubsub.subscribe('web.' + event, callback);
    return () => {
      pubsub.unsubscribe(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useEvent;
