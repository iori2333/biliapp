import { useAppDispatch, useAppSelector } from './useRedux';

function useAccount(): [typeof state, typeof dispatch] {
  const state = useAppSelector(state => state.account);
  const dispatch = useAppDispatch();
  return [state, dispatch];
}

export default useAccount;
