import { useQuery } from 'react-query';

export function useTokenAvailable() {
  return useQuery<boolean, Error>(
    `token-available`,
    async () => {
      const token = localStorage.getItem('access_token');
      return !!token;
    },
    {
      refetchInterval: 500,
    },
  );
}
