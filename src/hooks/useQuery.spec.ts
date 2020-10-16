import useQuery from './useQuery';
import {useLocation} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('useQuery()', () => {
  beforeEach(() => {
    useLocation.mockReset();
  });

  it ('returns empty string on non-existing key', () => {
    useLocation.mockReturnValue({search: 'query=123'});

    expect(useQuery('test')).toEqual('');
    expect(useLocation).toHaveBeenCalledTimes(1);
  });

  it ('returns proper value for existing key', () => {
    useLocation.mockReturnValue({search: 'query=123'});

    expect(useQuery('query')).toEqual('123');
  });
});

// const useQuery = (key: string): string => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);

//   return searchParams.get(key) ?? '';
// };

// export default useQuery;
