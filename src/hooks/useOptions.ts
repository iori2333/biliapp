import { actions } from '@/store/slices/settings';
import { useAppDispatch, useAppSelector } from './useRedux';

function useOptions(): [typeof state, typeof actions, typeof dispatch] {
  const state = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  return [state, actions, dispatch];
}

export default useOptions;
