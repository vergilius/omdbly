import {useLocation} from 'react-router-dom';

const useQuery = (key: string): string => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key) ?? '';
};

export default useQuery;
