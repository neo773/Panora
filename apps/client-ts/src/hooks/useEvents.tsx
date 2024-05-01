import { PaginationParams } from '@/lib/types';
import config from '@/lib/config';
import { useQuery } from '@tanstack/react-query';
import { events as Event } from 'api';
import Cookies from 'js-cookie';

const fetchEvents = async (params: PaginationParams, project_id: string): Promise<Event[]> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    pageSize: params.pageSize.toString(),
  });

  const response = await fetch(`${config.API_URL}/events?project_id=${project_id}&${searchParams.toString()}`,
  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${Cookies.get('access_token')}`,
      },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useEvents = (params: PaginationParams, project_id: string) => {
  return useQuery({
    queryKey: ['events', { page: params.page, pageSize: params.pageSize }],
    queryFn: () => fetchEvents(params, project_id),
  });
};

export default useEvents;