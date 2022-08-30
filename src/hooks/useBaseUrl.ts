import { useLocation } from 'react-router-dom';

function useBaseUrl() {
  const location = useLocation();
  const { pathname } = location;
  const index = pathname.indexOf('/', 1);
  if (index === -1) {
    return [pathname, pathname];
  }
  return [pathname, pathname.substring(0, index)];
}

export default useBaseUrl;
